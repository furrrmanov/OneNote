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
