import { takeEvery, put, call } from 'redux-saga/effects'

import { singIn } from '@/services'

import {
  SET_USER_REQUEST_FOR_EMAIL,
  SET_USER_REQUEST_FOR_GOOGLE_ACCOUNT,
  setUserInfo,
  showSnackbar,
} from '@/actions'
import { tarnsformUserInfoData } from '@/utils/dataMappers'

export function* watchUserSingInforEmailRequest() {
  yield takeEvery(SET_USER_REQUEST_FOR_EMAIL, workerUserSigninForEmail)
}

function* workerUserSigninForEmail({ payload }) {
  try {
    const response = yield call(singIn, {
      email: payload.userEmail,
      password: payload.userPassword,
    })

    yield put(setUserInfo(tarnsformUserInfoData(response.data)))
  } catch {
    yield put(showSnackbar({ messageText: `Login error !`, severity: 'error' }))
  }
}

export function* watchUserSingInforGoogleAccountRequest() {
  yield takeEvery(
    SET_USER_REQUEST_FOR_GOOGLE_ACCOUNT,
    workerUserSigninForGoogleAccount
  )
}

function* workerUserSigninForGoogleAccount() {
  // const data = yield call(singInWithGoogleAccountUsingFirebase)
  // yield put(setUserInfo(tarnsformUserInfoData(data)))
}
