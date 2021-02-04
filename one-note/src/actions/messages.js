export const SHOW_MESSAGE = 'SUCCESS_MESSAGE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export const showSnackbar = (message) => ({
  type: SHOW_MESSAGE,
  payload: message,
})

export const clearSnackbar = () => ({
  type: CLEAR_MESSAGE,
})
