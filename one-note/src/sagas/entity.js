import { takeEvery, put, select, call } from 'redux-saga/effects'

import {
  ENTITY_LIST_REQUEST,
  CREATE_ENTITY_REQUEST,
  showSnackbar,
  entityListRequest,
  DELETE_ENTITY_REQUEST,
  setEntityList,
} from '@/actions'

import { transformDataList } from '@/utils/dataMappers'
import {
  sendDataInFirebaseDb,
  getDataInFirebaseDb,
  deleteEntityinFirebaseDb,
} from '@/services'

export function* watchEntityListRequest() {
  yield takeEvery(ENTITY_LIST_REQUEST, workerEntityList)
}

function* workerEntityList({ payload }) {
  try {
    const state = yield select()
    const response = yield call(getDataInFirebaseDb, {
      path: `/${payload}`,
      root: `/${payload}`,
    })

    const userEntityList = yield transformDataList(response.data).filter(
      (item) => item.owner === state.user.email
    )

    yield put(setEntityList({ data: userEntityList, entityName: payload }))
  } catch {}
}

export function* watchCreateEntityRequest() {
  yield takeEvery(CREATE_ENTITY_REQUEST, workerCreateEntity)
}

function* workerCreateEntity({ payload }) {
  try {
    const state = yield select()
    const response = yield call(sendDataInFirebaseDb, {
      value: {
        owner: state.user.email,
        name: payload.entityName,
      },
      path: `/${payload.root}/create-${payload.root}`,
      root: `/${payload.root}`,
    })

    if (response.statusText === 'OK') {
      yield put(entityListRequest(payload.root))
      yield put(
        showSnackbar({
          messageText: `${payload.root} created !`,
          severity: 'success',
        })
      )
    } else {
      yield put(
        showSnackbar({
          messageText: `An error has occurred !`,
          severity: 'error',
        })
      )
    }
  } catch {}
}

export function* watchDeleteEntityRequest() {
  yield takeEvery(DELETE_ENTITY_REQUEST, workerDeleteEntity)
}

function* workerDeleteEntity({ payload }) {
  try {
    const response = yield call(deleteEntityinFirebaseDb, {
      collectionName: `/${payload.root}`,
      collectionRoot: `/${payload.root}/`,
      path: `/${payload.root}/delete-${payload.root}`,
      id: payload.entityId,
    })

    if (response.statusText === 'OK') {
      yield put(entityListRequest(payload.root))
      yield put(
        showSnackbar({
          messageText: `${payload.root} deleted !`,
          severity: 'success',
        })
      )
    } else {
      yield put(
        showSnackbar({
          messageText: `An error has occurred !`,
          severity: 'error',
        })
      )
    }
  } catch {}
}
