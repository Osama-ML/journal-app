import {firebase, googleAuthProvider} from "../firebase/firebase-config"
import { types } from "../types/types";

export const startLoginEmailPassword = (email,password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName))
      })
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => { // como esta tarea va a ser asincrona, necesito retorna un callback
                          //y gracias al thunk tenemos acceso al dispatch de redux
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async({user}) => {
        await user.updateProfile({displayName: name})
        dispatch(login(user.uid, user.displayName))
      })
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName))
      })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
});
