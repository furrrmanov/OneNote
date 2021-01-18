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

export default function* rootSaga() {
  yield all([
    watchUserSingInforEmailRequest(),
    watchUserSingInforGoogleAccountRequest(),
    watchUsersProfileListRequest(),
    watchCreateUserProfileRequest(),
    watchNotebookListRequest(),
    watchCreateNotebookRequest(),
  ])
}
