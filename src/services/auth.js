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

export default {
  getCurrentUser,
  requireUser
}
