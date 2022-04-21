import React from "react";
import {
  createUserDocumenFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

function Signin() {
  async function logGoogleUser() {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumenFromAuth(response.user);
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
    </div>
  );
}

export default Signin;
