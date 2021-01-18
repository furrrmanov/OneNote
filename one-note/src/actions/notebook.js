export const NOTEBOOK_LIST_REQUEST = 'SET_NOTEBOOK_LIST_REQUEST'
export const SET_NOTEBOOK_LIST = 'SET_NOTEBOOK_LIST'

export const setNotebookListRequest = () => ({
  type: NOTEBOOK_LIST_REQUEST,
})

export const setNotebookList = (value) => ({
  type: SET_NOTEBOOK_LIST,
  payload: value,
})
