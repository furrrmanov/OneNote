import { takeEvery, put, select, call } from 'redux-saga/effects'

import {
  USER_PROFILES_LIST_REQUEST,
  setUserProfile,
  usersProfileListRequest,
  CREATE_USER_PROFILE_REQUEST,
  createUserProfileRequest,
} from '@/actions'

import { transformDataList } from '@/utils/dataMappers'
import { getDataInFirebaseDb, sendDataInFirebaseDb } from '@/services'

export function* watchUsersProfileListRequest() {
  yield takeEvery(USER_PROFILES_LIST_REQUEST, workerUsersProfileList)
}

function* workerUsersProfileList() {
  const state = yield select()
  try {
    const usersProfileList = yield call(getDataInFirebaseDb, {
      root: '/userProfiles',
    })
    const userProfile = yield transformDataList(usersProfileList.data).find(
      (item) => item.owner === state.user.email
    )

    if (userProfile) {
      yield put(setUserProfile(userProfile))
    } else {
      yield put(createUserProfileRequest())
    }
  } catch {}
}

export function* watchCreateUserProfileRequest() {
  yield takeEvery(CREATE_USER_PROFILE_REQUEST, workerCreateUserProfile)
}

function* workerCreateUserProfile() {
  const state = yield select()

  const profile = {
    owner: state.user.email,
  }

  yield put(setUserProfile(profile))

  yield call(sendDataInFirebaseDb, { value: profile, root: '/userProfiles' })

  yield put(usersProfileListRequest())
}
