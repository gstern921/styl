import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmRfWJEXrRcaMV7b5G8F7gmea1XTsTw4s",
  authDomain: "styl-clothing.firebaseapp.com",
  databaseURL: "https://styl-clothing.firebaseio.com",
  projectId: "styl-clothing",
  storageBucket: "styl-clothing.appspot.com",
  messagingSenderId: "606056695698",
  appId: "1:606056695698:web:d965d8167be56588bc234b",
  measurementId: "G-74L3WQCGEM",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const result = {
    id: userAuth.uid,
    email: userAuth.email,
    displayName: userAuth.displayName,
  };

  // return result;
  console.log(userAuth);

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
