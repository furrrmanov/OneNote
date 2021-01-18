import { SET_USER_PROFILE } from '@/actions'

const initialState = {
  userProfile: {
    owner: '',
  },
}

export default function profiles(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: payload,
      }
    }
    default:
      return state
  }
}
