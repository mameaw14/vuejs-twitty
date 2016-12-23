import firebase from 'firebase'

const get = (id, callback) => {
  return firebase.database()
    .ref(`user/${id}`)
    .once('value', (snapshot) => {
      callback(snapshot.val())
    })
}

export default {
  get
}
