import axios from 'axios'

export const signOut = () => {
  return axios.delete('http://localhost:3001/api/auth/sign-out')
}

export const singIn = (value) => {
  return axios.put('http://localhost:3001/api/auth/sign-in', value)
}

export const getDataInFirebaseDb = (value) => {
  return axios.post('http://localhost:3001/api/entity/entity-list', value)
}

export const sendDataInFirebaseDb = (value) => {
  return axios.post('http://localhost:3001/api/entity/create-entity', value)
}

export const deleteEntityinFirebaseDb = (value) => {
  return axios.delete('http://localhost:3001/api/entity/delete-entity', {
    data: { value },
  })
}

export const updateEntityInFirebaseDb = (value) => {
  return axios.post('http://localhost:3001/api/entity/update-entity', value)
}

export const uploadFileInStorage = (file) => {
  return axios.post('http://localhost:3001/api/storage/upload', file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const deleteFileInStorage = (fileName) => {
  return axios.delete('http://localhost:3001/api/storage/delete', {
    data: { fileName },
  })
}
