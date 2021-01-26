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
  watchEntityListRequest,
  watchCreateEntityRequest,
  watchDeleteEntityRequest,
} from './entity'

import {
  watchCreateSubEntityRequest,
  wactUpdateSubEntityRequest,
  watchDeleteSubEntityRequest,
} from './subEntity'

export default function* rootSaga() {
  yield all([
    watchUserSingInforEmailRequest(),
    watchUserSingInforGoogleAccountRequest(),
    watchUsersProfileListRequest(),
    watchCreateUserProfileRequest(),
    watchEntityListRequest(),
    watchCreateEntityRequest(),
    watchCreateSubEntityRequest(),
    wactUpdateSubEntityRequest(),
    watchDeleteSubEntityRequest(),
    watchDeleteEntityRequest(),
  ])
}
