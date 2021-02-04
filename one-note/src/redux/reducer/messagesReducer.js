import { SHOW_MESSAGE, CLEAR_MESSAGE } from '@/actions'

const initialState = {
  isOpen: false,
  successMessage: '',
  severity: '',
}

export default function messages(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        isOpen: true,
        successMessage: payload.messageText,
        severity: payload.severity,
      }
    case CLEAR_MESSAGE:
      return {
        ...state,
        isOpen: false,
        successMessage: '',
      }

    default:
      return state
  }
}
