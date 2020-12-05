import firebase from 'firebase'
import apiKey from './apiKey'

firebase.initializeApp(apiKey.firebaseConfig)

export const db = firebase.firestore()
export const mylistsCollection = db.collection('mylists')