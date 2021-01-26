import { takeEvery, put, select, call } from 'redux-saga/effects'

import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

import {
  filteredEntityList,
  activeEntity,
  updateItemFromNoteList,
  deleteItemFromNoteList,
} from '@/utils/dataMappers'
import {
  CREATE_SUB_ENTITY_REQUEST,
  UPDATE_SUB_ENTITY_REQUEST,
  showSuccessSnackbar,
  DELETE_SUB_ENTITY_REQUEST,
} from '@/actions'
import { updateSubEntityList } from '@/utils/firebase'

export function* watchCreateSubEntityRequest() {
  yield takeEvery(CREATE_SUB_ENTITY_REQUEST, workerCreateSubEntity)
}

function* workerCreateSubEntity({ payload }) {
  try {
    const state = yield select()
    const entityList = filteredEntityList(
      state.entity.entityList,
      payload.id,
      payload.name
    )

    const newSubEntity = {
      note: {
        ownerId: payload.id,
        id: uuidv4(),
        date: moment().valueOf(),
        name: 'Untitled note',
        text: '',
      },

      article: {
        ownerId: payload.id,
        id: uuidv4(),
        date: moment().valueOf(),
        name: 'Untitled article',
        img: [],
        text: {
          title: '',
          desription: '',
          characteristic: [],
        },
      },
    }

    yield call(updateSubEntityList, {
      collectionName: `/${payload.root}`,
      collectionRoot: `${payload.root}/`,
      id: payload.id,
      itemName: `${payload.name}List`,
      data: [...entityList, newSubEntity[payload.name]],
    })

    yield put(showSuccessSnackbar(`${payload.name} created !`))
  } catch {}
}

export function* wactUpdateSubEntityRequest() {
  yield takeEvery(UPDATE_SUB_ENTITY_REQUEST, workerUpdateSubEntity)
}

function* workerUpdateSubEntity({ payload }) {
  try {
    const state = yield select()
    const entity = activeEntity(state.entity.entityList, payload.item.ownerId)
    const filteredSubEntityList = updateItemFromNoteList(
      entity[`${payload.name}List`],
      payload.item
    )

    yield call(updateSubEntityList, {
      collectionName: `/${payload.root}`,
      collectionRoot: `${payload.root}/`,
      id: payload.item.ownerId,
      itemName: `${payload.name}List`,
      data: filteredSubEntityList,
    })
  } catch {}

  yield put(showSuccessSnackbar('Changes saved !'))
}

export function* watchDeleteSubEntityRequest() {
  yield takeEvery(DELETE_SUB_ENTITY_REQUEST, workerDeleteSubEntity)
}

function* workerDeleteSubEntity({ payload }) {
  try {
    const state = yield select()
    const entity = activeEntity(state.entity.entityList, payload.item.ownerId)

    const filteredSubEntityList = deleteItemFromNoteList(
      entity[`${payload.name}List`],
      payload.item
    )

    yield call(updateSubEntityList, {
      collectionName: `/${payload.root}`,
      collectionRoot: `${payload.root}/`,
      id: payload.item.ownerId,
      itemName: `${payload.name}List`,
      data: filteredSubEntityList,
    })

    yield put(showSuccessSnackbar(`${payload.name} deleted !`))
  } catch {}
}
