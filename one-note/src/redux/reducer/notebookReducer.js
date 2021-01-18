import { NOTEBOOK_LIST_REQUEST, SET_NOTEBOOK_LIST } from '@/actions'

const initialState = {
  notebookList: [],
}

export default function notebook(state = initialState, { type, payload }) {
  switch (type) {
    case NOTEBOOK_LIST_REQUEST: {
      return {
        ...state,
      }
    }
    case SET_NOTEBOOK_LIST: {
      return {
        ...state,
        notebookList: payload,
      }
    }
    default:
      return state
  }
}
