import { takeEvery, put, select, call } from 'redux-saga/effects'

import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

import {
  filteredNotebookList,
  activeNotebook,
  updateItemFromNoteList,
  deleteItemFromNoteList,
} from '@/utils/dataMappers'
import {
  CREATE_NOTE_REQUEST,
  UPDATE_NOTE_REQUEST,
  showSuccessSnackbar,
  DELETE_NOTE_REQUEST,
} from '@/actions'
import { updateNoteListInFirebaseDb } from '@/utils/firebase'

export function* watchCreateNoteRequest() {
  yield takeEvery(CREATE_NOTE_REQUEST, workerCreateNote)
}

function* workerCreateNote({ payload }) {
  try {
    const state = yield select()
    const noteList = filteredNotebookList(state.notebook.notebookList, payload)
    const newNote = {
      ownerId: payload,
      id: uuidv4(),
      date: moment().valueOf(),
      name: 'Untitled note',
      text: '',
    }

    yield call(updateNoteListInFirebaseDb, {
      collectionName: '/notebook',
      collectionRoot: 'notebook/',
      id: payload,
      itemName: 'noteList',
      data: [...noteList, newNote],
    })

    yield put(showSuccessSnackbar('Note created !'))
  } catch {}
}

export function* wactUpdateNoteRequest() {
  yield takeEvery(UPDATE_NOTE_REQUEST, workerUpdateNote)
}

function* workerUpdateNote({ payload }) {
  try {
    const state = yield select()
    const notebook = activeNotebook(
      state.notebook.notebookList,
      payload.ownerId
    )
    const filteredNotelist = updateItemFromNoteList(notebook.noteList, payload)

    yield call(updateNoteListInFirebaseDb, {
      collectionName: '/notebook',
      collectionRoot: 'notebook/',
      id: payload.ownerId,
      itemName: 'noteList',
      data: filteredNotelist,
    })
  } catch {}

  yield put(showSuccessSnackbar('Changes saved !'))
}

export function* watchDeleteNoteRequest() {
  yield takeEvery(DELETE_NOTE_REQUEST, workerDeleteNote)
}

function* workerDeleteNote({ payload }) {
  try {
    const state = yield select()
    const notebook = activeNotebook(
      state.notebook.notebookList,
      payload.ownerId
    )

    const filteredNotelist = deleteItemFromNoteList(notebook.noteList, payload)

    yield call(updateNoteListInFirebaseDb, {
      collectionName: '/notebook',
      collectionRoot: 'notebook/',
      id: payload.ownerId,
      itemName: 'noteList',
      data: filteredNotelist,
    })
    yield put(showSuccessSnackbar('Note deleted !'))
  } catch {}
}
