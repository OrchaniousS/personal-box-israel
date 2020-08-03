import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBvJy0n21xjxodduh9GBNhelH2xWe-3XIA",
  authDomain: "box-demo-ccc0f.firebaseapp.com",
  databaseURL: "https://box-demo-ccc0f.firebaseio.com",
  projectId: "box-demo-ccc0f",
  storageBucket: "box-demo-ccc0f.appspot.com",
  messagingSenderId: "490802250076",
  appId: "1:490802250076:web:28932ac23294b2731e8199",
  measurementId: "G-DHMPMWJ06N",
};

firebase.initializeApp(config);

const auth = firebase.auth();

const firestore = firebase.firestore();

// const firebaseDB = firebase.database();

export { firebase, auth, firestore };
// firebaseDB
//   .ref("users")
//   .push({ username: "tair", password: "ra2d", testChange: "testFailed2" });

// firebaseDB
//   .ref("testChange")
//   .set("changed")
//   .then(() => console.log("data has collected"))
//   .catch((e) => console.log(e));

// firebaseDB.ref().set({ test: "tes" });

// export default firebaseDB;
