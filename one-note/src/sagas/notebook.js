import { takeEvery, put, select, call } from 'redux-saga/effects'

import { transformDataList } from '@/utils/dataMappers'
import {
  NOTEBOOK_LIST_REQUEST,
  CREATE_NOTEBOOK_REQUEST,
  showSuccessSnackbar,
  setNotebookList,
  notebookListRequest
} from '@/actions'
import { sendDataInFirebaseDb, getDataInFirebaseDb } from '@/utils/firebase'

export function* watchNotebookListRequest() {
  yield takeEvery(NOTEBOOK_LIST_REQUEST, workerNotebookList)
}

function* workerNotebookList() {
  try {
    const state = yield select()
    const response = yield getDataInFirebaseDb('/notebook')
    const userNotebook = transformDataList(response).filter(
      (item) => item.owner === state.user.email
    )

    yield put(setNotebookList(userNotebook))
  } catch {}
}

export function* watchCreateNotebookRequest() {
  yield takeEvery(CREATE_NOTEBOOK_REQUEST, workerCreateNotebook)
}

function* workerCreateNotebook({ payload }) {
  const state = yield select()
  yield console.log('create', payload)
  yield call(sendDataInFirebaseDb, {
    value: {
      owner: state.user.email,
      name: payload,
    },
    root: '/notebook',
  })
  yield put(notebookListRequest())
  yield put(showSuccessSnackbar('Notebook created !'))
}
