import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
}

export async function getCategoriesAndDocuments() {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

export async function createUserDocumenFromAuth(userAuth, additionalInfo = {}) {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userDocRef;
}

export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInWithEmailAndPw(email, password) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutUser() {
  await signOut(auth);
}

export function onAuthStateChangeListener(callback) {
  onAuthStateChanged(auth, callback);
}
