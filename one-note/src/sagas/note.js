import { takeEvery, put, select, call } from 'redux-saga/effects'

import moment from 'moment'
import  uniqid from 'uniqid'

import { filteredNotebookList } from '@/utils/dataMappers'
import {
  CREATE_NOTE,
  showSuccessSnackbar,
  notebookListRequest,
} from '@/actions'
import { updateDataInFirebaseDb } from '@/utils/firebase'

export function* watchCreateNote() {
  yield takeEvery(CREATE_NOTE, workerCreateNote)
}

function* workerCreateNote({ payload }) {
  const state = yield select()
  const noteList = filteredNotebookList(state.notebook.notebookList, payload)
  const newNote = {
    ownerId: payload,
    id: uniqid(),
    date: moment().valueOf(),
    name: 'Untitled note',
    text: '',
  }

  yield call(updateDataInFirebaseDb, {
    collectionName: '/notebook',
    collectionRoot: 'notebook/',
    id: payload,
    itemName: 'noteList',
    data: [...noteList, newNote],
  })

  yield put(notebookListRequest())

  yield put(showSuccessSnackbar('Note created !'))
}
