import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyBkVJHhtIXb6k5QFPecTIMj4AvgQm7qktA',
    authDomain: 'simple-communicator-e48c0.firebaseapp.com',
    projectId: 'simple-communicator-e48c0',
    storageBucket: 'simple-communicator-e48c0.appspot.com',
    messagingSenderId: '371032461329',
    appId: '1:371032461329:web:6847cd59c3fb08e53221b0',
    measurementId: 'G-E8L9R0RJ27',
}

Firebase.initializeApp(config)

export { Firebase as firebase }
