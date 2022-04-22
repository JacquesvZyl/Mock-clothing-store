import React, { useEffect, useState } from "react";
import {
  createUserDocumenFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";

const UserContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);

  const authValue = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumenFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={authValue}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
