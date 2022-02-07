// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxQIAi9z8h7PCmj74tIVCjU3RfMpmunlg',
  authDomain: 'insta-2-76cb1.firebaseapp.com',
  projectId: 'insta-2-76cb1',
  storageBucket: 'insta-2-76cb1.appspot.com',
  messagingSenderId: '306306531140',
  appId: '1:306306531140:web:a36ffc9f2f638437bae111',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
