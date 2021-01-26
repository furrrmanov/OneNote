export const ENTITY_LIST_REQUEST = 'ENTITY_LIST_REQUEST'
export const SET_ENTITY_LIST = 'SET_ENTITY_LIST'
export const CREATE_ENTITY_REQUEST = 'CREATE_ENTITY_REQUEST'
export const DELETE_ENTITY_REQUEST = 'DELETE_ENTITY_REQUEST'

export const entityListRequest = (value) => ({
  type: ENTITY_LIST_REQUEST,
  payload: value,
})

export const createEntity = (value) => ({
  type: CREATE_ENTITY_REQUEST,
  payload: value,
})

export const setEntityList = (value) => ({
  type: SET_ENTITY_LIST,
  payload: value,
})

export const deleteEntity = (value) => ({
  type: DELETE_ENTITY_REQUEST,
  payload: value,
})
