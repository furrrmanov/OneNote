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
} from './notebook'

import { watchCreateNote } from './note'

export default function* rootSaga() {
  yield all([
    watchUserSingInforEmailRequest(),
    watchUserSingInforGoogleAccountRequest(),
    watchUsersProfileListRequest(),
    watchCreateUserProfileRequest(),
    watchNotebookListRequest(),
    watchCreateNotebookRequest(),
    watchCreateNote(),
  ])
}
