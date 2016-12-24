import firebase from 'firebase'

const getCurrentUser = () => firebase.auth().currentUser
const requireUser = () => {
  return new Promise((resolve, reject) => {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()
      if (user) {
        resolve(user)
        return
      }
      reject()
    })
  })
}
const signIn = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

export default {
  getCurrentUser,
  requireUser,
  signIn
}
