import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBaU6EPAfyFQM89q7y8wtiTpAeo-_VmREE",
  authDomain: "messedup-21ada.firebaseapp.com",
  databaseURL: "https://messedup-21ada.firebaseio.com",
  projectId: "messedup-21ada",
  storageBucket: "messedup-21ada.appspot.com",
  messagingSenderId: "23869905919"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();
export const fb = firebase;

export const isAuthenticated = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      return true;
    } else {
      return false;
    }
  });
};
