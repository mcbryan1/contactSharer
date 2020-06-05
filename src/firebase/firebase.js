import * as firebase from "firebase";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJZwOzk5lw6PxOZna_hWAZXaV2XsEqZMg",
  authDomain: "contactsharer-af322.firebaseapp.com",
  databaseURL: "https://contactsharer-af322.firebaseio.com",
  projectId: "contactsharer-af322",
  storageBucket: "contactsharer-af322.appspot.com",
  messagingSenderId: "749673545030",
  appId: "1:749673545030:web:2a417a4d72d51519333947",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
