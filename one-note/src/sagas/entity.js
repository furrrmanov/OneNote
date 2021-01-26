import { takeEvery, put, select, call } from 'redux-saga/effects'

import {
  ENTITY_LIST_REQUEST,
  CREATE_ENTITY_REQUEST,
  showSuccessSnackbar,
  entityListRequest,
  DELETE_ENTITY_REQUEST,
} from '@/actions'
import {
  sendDataInFirebaseDb,
  getEntityListInFirebaseDb,
  deleteEntityInCollection,
} from '@/utils/firebase'

export function* watchEntityListRequest() {
  yield takeEvery(ENTITY_LIST_REQUEST, workerEntityList)
}

function* workerEntityList({ payload }) {
  try {
    yield getEntityListInFirebaseDb(payload)
  } catch {}
}

export function* watchCreateEntityRequest() {
  yield takeEvery(CREATE_ENTITY_REQUEST, workerCreateEntity)
}

function* workerCreateEntity({ payload }) {
  try {
    const state = yield select()
    yield call(sendDataInFirebaseDb, {
      value: {
        owner: state.user.email,
        name: payload.entityName,
      },
      root: `/${payload.root}`,
    })
    yield put(entityListRequest())
    yield put(showSuccessSnackbar(`${payload.root} created !`))
  } catch {}
}

export function* watchDeleteEntityRequest() {
  yield takeEvery(DELETE_ENTITY_REQUEST, workerDeleteEntity)
}

function* workerDeleteEntity({ payload }) {
  try {
    yield call(deleteEntityInCollection, {
      collectionName: `/${payload.root}`,
      collectionRoot: `/${payload.root}/`,
      id: payload.entityId,
    })

    yield put(entityListRequest())
    yield put(showSuccessSnackbar(`${payload.root} deleted !`))
  } catch {}
}
