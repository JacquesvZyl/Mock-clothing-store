import React, { useEffect } from "react";
import {
  auth,
  createUserDocumenFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";

function Signin() {
  useEffect(() => {
    async function fetchResult() {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumenFromAuth(response.user);
      }
    }

    fetchResult();
  }, []);

  async function logGoogleUser() {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumenFromAuth(response.user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
      <SignUpForm />
    </div>
  );
}

export default Signin;
