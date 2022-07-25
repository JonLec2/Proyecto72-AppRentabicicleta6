import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDnEP6Et0cXqiTXRhNswCYrhkpBUjgUBSM",
  authDomain: "reantadebicicleapp.firebaseapp.com",
  projectId: "reantadebicicleapp",
  storageBucket: "reantadebicicleapp.appspot.com",
  messagingSenderId: "662938844301",
  appId: "1:662938844301:web:28640cf39ce594a762f6c4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
