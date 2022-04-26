import React, { useEffect, useReducer, useState } from "react";
import {
  createUserDocumenFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";

const UserContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

function authReducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case "SET_CURRENT_USER": {
      return {
        ...state,
        currentUser: payload,
      };
    }
    default:
      throw new Error(`Unhandled type of ${type} in Auth Reducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null,
};

export function UserContextProvider(props) {
  //const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  function setCurrentUser(user) {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  }

  const authValue = {
    currentUser: state.currentUser,
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
