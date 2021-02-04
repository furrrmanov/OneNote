import { takeEvery, put, select, call } from 'redux-saga/effects'

import {
  filteredEntityList,
  activeEntity,
  updateItemFromNoteList,
  deleteItemFromNoteList,
  createSubEntity,
} from '@/utils/dataMappers'
import {
  CREATE_SUB_ENTITY_REQUEST,
  UPDATE_SUB_ENTITY_REQUEST,
  showSuccessSnackbar,
  DELETE_SUB_ENTITY_REQUEST,
  entityListRequest,
} from '@/actions'
// import { updateSubEntityList } from '@/utils/firebase'
import { updateEntityInFirebaseDb } from '@/services'

export function* watchCreateSubEntityRequest() {
  yield takeEvery(CREATE_SUB_ENTITY_REQUEST, workerCreateSubEntity)
}

function* workerCreateSubEntity({ payload }) {
  try {
    const state = yield select()
    const entityList = filteredEntityList(
      state.entities[payload.root],
      payload.id,
      payload.name
    )

    const newSubEntity = createSubEntity(payload.name, payload.id)

    const response = yield call(updateEntityInFirebaseDb, {
      collectionName: `/${payload.root}`,
      collectionRoot: `${payload.root}/`,
      id: payload.id,
      itemName: `${payload.name}List`,
      data: [...entityList, newSubEntity],
    })

    if (response.statusText === 'OK') {
      yield put(entityListRequest(payload.root))
      yield put(showSuccessSnackbar(`${payload.name} created !`))
    } else {
      yield put(showSuccessSnackbar(`An error has occurred !`))
    }
  } catch {}
}

export function* wactUpdateSubEntityRequest() {
  yield takeEvery(UPDATE_SUB_ENTITY_REQUEST, workerUpdateSubEntity)
}

function* workerUpdateSubEntity({ payload }) {
  try {
    const state = yield select()
    const entity = activeEntity(
      state.entities[payload.root],
      payload.item.ownerId
    )
    const filteredSubEntityList = updateItemFromNoteList(
      entity[`${payload.name}List`],
      payload.item
    )

    const response = yield call(updateEntityInFirebaseDb, {
      collectionName: `/${payload.root}`,
      collectionRoot: `${payload.root}/`,
      id: payload.item.ownerId,
      itemName: `${payload.name}List`,
      data: filteredSubEntityList,
    })
    if (response.statusText === 'OK') {
      yield put(entityListRequest(payload.root))
      yield put(showSuccessSnackbar('Changes saved !'))
    } else {
      yield put(showSuccessSnackbar(`An error has occurred !`))
    }
  } catch {}
}

export function* watchDeleteSubEntityRequest() {
  yield takeEvery(DELETE_SUB_ENTITY_REQUEST, workerDeleteSubEntity)
}

function* workerDeleteSubEntity({ payload }) {
  try {
    const state = yield select()
    const entity = activeEntity(
      state.entities[payload.root],
      payload.item.ownerId
    )

    const filteredSubEntityList = deleteItemFromNoteList(
      entity[`${payload.name}List`],
      payload.item
    )

    const response = yield call(updateEntityInFirebaseDb, {
      collectionName: `/${payload.root}`,
      collectionRoot: `${payload.root}/`,
      id: payload.item.ownerId,
      itemName: `${payload.name}List`,
      data: filteredSubEntityList,
    })

    if (response.statusText === 'OK') {
      yield put(entityListRequest(payload.root))
      yield put(showSuccessSnackbar(`${payload.name} deleted !`))
    } else {
      yield put(showSuccessSnackbar(`An error has occurred !`))
    }
  } catch {}
}
