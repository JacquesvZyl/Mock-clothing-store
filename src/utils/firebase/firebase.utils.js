import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPRGKCdHMc2RZr_m2pMB5KyOv_Shj8y10",
  authDomain: "crwn-clothing-db-76770.firebaseapp.com",
  projectId: "crwn-clothing-db-76770",
  storageBucket: "crwn-clothing-db-76770.appspot.com",
  messagingSenderId: "310499142208",
  appId: "1:310499142208:web:774dfbd89a3a09539bcda5",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export async function createUserDocumenFromAuth(userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userDocRef;
}
