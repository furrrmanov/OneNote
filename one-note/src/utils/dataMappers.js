import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

export const createSubEntity = (entityName, id) => {
  switch (entityName) {
    case 'note':
      return {
        ownerId: id,
        id: uuidv4(),
        date: moment().valueOf(),
        name: 'Untitled note',
        text: '',
      }
    case 'article':
      return {
        ownerId: id,
        id: uuidv4(),
        date: moment().valueOf(),
        name: 'Untitled article',
        imgList: [],
        description: '',
        characteristicList: [{ characteristic: '', value: '' }],
      }
    default:
      return {}
  }
}

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

export const filteredEntityList = (data, id = '', listName) => {
  const filteredData = data.find((item) => item.id === id)
  return filteredData && filteredData[`${listName}List`]
    ? filteredData[`${listName}List`]
    : []
}

export const activeEntity = (data, entityId = '') => {
  return data.find((item) => item.id === entityId)
}

export const activeNote = (data, noteId = '', listName) => {
  return data && data.noteList && noteId
    ? data.noteList.find((item) => item.id === noteId)
    : {}
}

export const activeArticle = (data, articleId = '', listName) => {
  return data && data.articleList && articleId
    ? data.articleList.find((item) => item.id === articleId)
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

export const checkingArrayForUniquenessElements = (value, list) => {
  const repetitionArray = list.characteristicList.filter(
    (item) =>
      item !== undefined &&
      value !== undefined &&
      item.characteristic &&
      item.characteristic.trim() === value.trim()
  )

  return repetitionArray.length > 1 ? true : false
}
