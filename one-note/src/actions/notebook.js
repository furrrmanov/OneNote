export const NOTEBOOK_LIST_REQUEST = 'SET_NOTEBOOK_LIST_REQUEST'
export const SET_NOTEBOOK_LIST = 'SET_NOTEBOOK_LIST'
export const CREATE_NOTEBOOK_REQUEST = 'CREATE_NOTEBOOK_REQUEST'

export const notebookListRequest = () => ({
  type: NOTEBOOK_LIST_REQUEST,
})

export const createNotebook = (value) => ({
  type: CREATE_NOTEBOOK_REQUEST,
  payload: value,
})

export const setNotebookList = (value) => ({
  type: SET_NOTEBOOK_LIST,
  payload: value,
})
