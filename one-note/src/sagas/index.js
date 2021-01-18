import { all } from 'redux-saga/effects'

import {
  watchUserSingInforEmailRequest,
  watchUserSingInforGoogleAccountRequest,
} from './user'

import {
  watchUsersProfileListRequest,
  watchCreateUserProfileRequest,
} from './profile'

export default function* rootSaga() {
  yield all([
    watchUserSingInforEmailRequest(),
    watchUserSingInforGoogleAccountRequest(),
    watchUsersProfileListRequest(),
    watchCreateUserProfileRequest(),
  ])
}
