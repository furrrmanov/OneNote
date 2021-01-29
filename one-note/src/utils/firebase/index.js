import firebase from 'firebase'
import 'firebase/storage'

import { transformDataList } from '@/utils/dataMappers'
import { store } from '@/redux/store'
import { setEntityList } from '@/actions'

const firebaseConfig = {
  apiKey: 'AIzaSyDTpiyd9g8P0c4T9x3J7oJ2OxpliP2op1k',
  authDomain: 'onenote-5dd9c.firebaseapp.com',
  projectId: 'onenote-5dd9c',
  storageBucket: 'onenote-5dd9c.appspot.com',
  messagingSenderId: '504385664300',
  appId: '1:504385664300:web:f290370f648f91b50d6889',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export const database = firebase.database()
export const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()
export default firebase

export const singInWithEmailUsingFirebase = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      const { user } = result
      return user
    })
    .catch((error) => {})
}

export const singInWithGoogleAccountUsingFirebase = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const { user } = result
      return user
    })
}

export const checkUserAuth = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

export const singOutUsingFirebase = () => {
  return firebase.auth().signOut()
}

export const sendDataInFirebaseDb = (data) => {
  return database.ref(`${data.root}`).push(data.value)
}

export const getDataInFirebaseDb = (root) => {
  return database
    .ref(`${root}`)
    .once('value')
    .then((snapshot) => Object.entries(snapshot.val()))
}

export const getEntityListInFirebaseDb = (root) => {
  return database.ref(`/${root}`).on('value', (snapshot) => {
    try {
      const response = snapshot.val()
      const state = store.getState()
      const userEntityList = transformDataList(Object.entries(response)).filter(
        (item) => item.owner === state.user.email
      )

      store.dispatch(setEntityList({ data: userEntityList, entityName: root }))
    } catch {}
  })
}

export const updateSubEntityList = (value) => {
  const databaseRef = database.ref(value.collectionName)

  return databaseRef.once('value', (snpsht) => {
    snpsht.forEach((dp) => {
      database
        .ref(`${value.collectionRoot}${value.id}`)
        .update({ [value.itemName]: value.data })
    })
  })
}

export const deleteEntityInCollection = (value) => {
  const databaseRef = database.ref(value.collectionName)

  return databaseRef.once('value', (snpsht) => {
    snpsht.forEach((dp) => {
      database.ref(`${value.collectionRoot}${value.id}`).remove()
    })
  })
}

export const uploadFileToFirebaseStorage = async (profile, userEmail) => {
  const file = profile
  const storageRef = storage.ref()
  const fileRef = storageRef.child(file.name)

  await fileRef.put(file)
  const url = await fileRef.getDownloadURL()

  return { imgUrl: url, imgName: file.name }
}

export const deleteItemFromFirebaseStorage = (fileName) => {
  const storageRef = storage.ref()
  const fileRef = storageRef.child(fileName)
  fileRef.delete()
}
