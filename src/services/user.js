import firebase from 'firebase'

const get = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .once('value', callback)
}

export default {
  get
}
