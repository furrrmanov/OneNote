export const tarnsformUserInfoData = (data) => {
  return {
    isLogged: true,
    email: data.email,
    name: data.displayName,
    photoUrl: data.providerData[0].photoURL,
  }
}

export const transformDataList = (data) => {
  return data.reduce((acc, item) => {
    acc.push({ ...item[1], id: item[0] })
    return acc
  }, [])
}

export const filteredNotebookList = (data, id = '') => {
  const filteredData = data.find((item) => item.id === id)
  return filteredData && filteredData.noteList ? filteredData.noteList : []
}

export const activeNotebook = (data, notebookId = '') => {
  return data.find((item) => item.id === notebookId)
}

export const activeNote = (data, noteId = '') => {
  return data && data.noteList && noteId
    ? data.noteList.find((item) => item.id === noteId)
    : {}
}

export const updateItemFromNoteList = (data, newItem) => {
  const index = data.findIndex((note) => note.id === newItem.id)
  data.splice(index, 1, newItem)
  return data
}

export const deleteItemFromNoteList = (data, item) => {
  return data.filter((note) => note.id !== item.id)
}

export const deleteItemFromNotebookList = (data, item) => {
  return data.filter((notebook) => notebook.id !== item.id)
}
