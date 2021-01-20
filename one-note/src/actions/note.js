export const CREATE_NOTE_REQUEST = 'CREATE_NOTE_REQUEST'
export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST'
export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST'

export const createNote = (value) => ({
  type: CREATE_NOTE_REQUEST,
  payload: value,
})

export const updateNote = (value) => ({
  type: UPDATE_NOTE_REQUEST,
  payload: value,
})

export const deleteNote = (value) => ({
  type: DELETE_NOTE_REQUEST,
  payload: value,
})
