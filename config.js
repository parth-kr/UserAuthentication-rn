import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig={
  apiKey: "AIzaSyD1rTddz7uKHCa-gId9L3wVdmdZbt3cca8",
  authDomain: "userauth-rn-4e38f.firebaseapp.com",
  projectId: "userauth-rn-4e38f",
  storageBucket: "userauth-rn-4e38f.appspot.com",
  messagingSenderId: "694436272761",
  appId: "1:694436272761:web:fb098cf6819fcec55492a8"

}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}