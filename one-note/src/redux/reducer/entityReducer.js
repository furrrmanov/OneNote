import { ENTITY_LIST_REQUEST, SET_ENTITY_LIST } from '@/actions'

const initialState = {
  notebook: [],
  catalog: [],
}

export default function entities(state = initialState, { type, payload }) {
  switch (type) {
    case ENTITY_LIST_REQUEST: {
      return {
        ...state,
      }
    }
    case SET_ENTITY_LIST: {
      return {
        ...state,
        [payload.entityName]: payload.data,
      }
    }
    default:
      return state
  }
}
