import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { functions } from "firebase";

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

const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { phone, lastName, firstName, email } = user;
    try {
      await userRef.set({
        phone,
        lastName,
        firstName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await db.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export { firebase, auth };

// const firebaseDB = firebase.database();
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
