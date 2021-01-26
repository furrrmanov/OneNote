import { ENTITY_LIST_REQUEST, SET_ENTITY_LIST } from '@/actions'

const initialState = {
  entityList: [],
}

export default function entity(state = initialState, { type, payload }) {
  switch (type) {
    case ENTITY_LIST_REQUEST: {
      return {
        ...state,
      }
    }
    case SET_ENTITY_LIST: {
      return {
        ...state,
        entityList: payload,
      }
    }
    default:
      return state
  }
}
