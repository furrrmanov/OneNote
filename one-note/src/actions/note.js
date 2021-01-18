export const CREATE_NOTE = 'CREATE_NOTE'

export const createNote = (value) => ({
  type: CREATE_NOTE,
  payload: value,
})
