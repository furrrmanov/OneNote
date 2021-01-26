export const CREATE_SUB_ENTITY_REQUEST = 'CREATE_SUB_ENTITY_REQUEST'
export const UPDATE_SUB_ENTITY_REQUEST = 'UPDATE_SUB_ENTITY_REQUEST'
export const DELETE_SUB_ENTITY_REQUEST = 'DELETE_SUB_ENTITY_REQUEST'

export const createSubEntity = (value) => ({
  type: CREATE_SUB_ENTITY_REQUEST,
  payload: value,
})

export const updateNote = (value) => ({
  type: UPDATE_SUB_ENTITY_REQUEST,
  payload: value,
})

export const deleteNote = (value) => ({
  type: DELETE_SUB_ENTITY_REQUEST,
  payload: value,
})
