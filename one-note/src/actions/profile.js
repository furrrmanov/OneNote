export const USER_PROFILES_LIST_REQUEST = 'USER_PROFILES_LIST_REQUEST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST'
export const CREATE_USER_PROFILE_REQUEST = 'CREATE_USER_PROFILE_REQUEST'

export const usersProfileListRequest = () => ({
  type: USER_PROFILES_LIST_REQUEST,
})

export const createUserProfileRequest = () => ({
  type: CREATE_USER_PROFILE_REQUEST,
})

export const updateUserProfileRequest = (value) => ({
  type: UPDATE_USER_PROFILE_REQUEST,
  value,
})

export const setUserProfile = (value) => ({
  type: SET_USER_PROFILE,
  payload: value,
})
