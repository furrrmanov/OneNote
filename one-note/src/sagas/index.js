import { all } from 'redux-saga/effects'

import {
  watchUserSingInforEmailRequest,
  watchUserSingInforGoogleAccountRequest,
} from './user'

import {
  watchUsersProfileListRequest,
  watchCreateUserProfileRequest,
} from './profile'

import {
  watchNotebookListRequest,
  watchCreateNotebookRequest,
  watchDeleteNotebookRequest,
} from './notebook'

import {
  watchCreateNoteRequest,
  wactUpdateNoteRequest,
  watchDeleteNoteRequest,
} from './note'

export default function* rootSaga() {
  yield all([
    watchUserSingInforEmailRequest(),
    watchUserSingInforGoogleAccountRequest(),
    watchUsersProfileListRequest(),
    watchCreateUserProfileRequest(),
    watchNotebookListRequest(),
    watchCreateNotebookRequest(),
    watchCreateNoteRequest(),
    wactUpdateNoteRequest(),
    watchDeleteNoteRequest(),
    watchDeleteNotebookRequest(),
  ])
}
