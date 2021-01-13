import firebase from 'firebase'
import 'firebase/storage'

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
