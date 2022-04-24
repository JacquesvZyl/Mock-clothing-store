import React, { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export function CategoriesContextProvider(props) {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    async function getCatergoriesMap() {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    getCatergoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {props.children}
    </CategoriesContext.Provider>
  );
}
