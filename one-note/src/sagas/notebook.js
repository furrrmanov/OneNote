import { takeEvery, put, select, call } from 'redux-saga/effects'

import {
  NOTEBOOK_LIST_REQUEST,
  CREATE_NOTEBOOK_REQUEST,
  showSuccessSnackbar,
  notebookListRequest,
  DELETE_NOTEBOOK_REQUEST,
} from '@/actions'
import {
  sendDataInFirebaseDb,
  getNotebookListInFirebaseDb,
  deleteNotebookInCollection,
} from '@/utils/firebase'
import { deleteItemFromNotebookList } from '@/utils/dataMappers'

export function* watchNotebookListRequest() {
  yield takeEvery(NOTEBOOK_LIST_REQUEST, workerNotebookList)
}

function* workerNotebookList() {
  try {
    yield getNotebookListInFirebaseDb('/notebook')
  } catch {}
}

export function* watchCreateNotebookRequest() {
  yield takeEvery(CREATE_NOTEBOOK_REQUEST, workerCreateNotebook)
}

function* workerCreateNotebook({ payload }) {
  try {
    const state = yield select()
    yield call(sendDataInFirebaseDb, {
      value: {
        owner: state.user.email,
        name: payload,
      },
      root: '/notebook',
    })
    yield put(notebookListRequest())
    yield put(showSuccessSnackbar('Notebook created !'))
  } catch {}
}

export function* watchDeleteNotebookRequest() {
  yield takeEvery(DELETE_NOTEBOOK_REQUEST, workerDeleteNotebook)
}

function* workerDeleteNotebook({ payload }) {
  try {
    yield call(deleteNotebookInCollection, {
      collectionName: '/notebook',
      collectionRoot: 'notebook/',
      id: payload.id,
    })

    yield put(notebookListRequest())
    yield put(showSuccessSnackbar('Notebook deleted !'))
  } catch {}
}
