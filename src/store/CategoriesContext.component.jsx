import React, { createContext, useEffect, useReducer, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

function categoriesReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_CATEGORIES_MAP": {
      return {
        ...state,
        categoriesMap: payload,
      };
    }
  }
}

const INITIAL_STATE = {
  categoriesMap: {},
};
export function CategoriesContextProvider(props) {
  const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);

  function setCategoriesMap(value) {
    dispatch({ type: "SET_CATEGORIES_MAP", payload: value });
  }

  useEffect(() => {
    async function getCatergoriesMap() {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    getCatergoriesMap();
  }, []);

  const contextValue = {
    categoriesMap: state.categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {props.children}
    </CategoriesContext.Provider>
  );
}
