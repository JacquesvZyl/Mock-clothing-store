import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../store/CategoriesContext.component";
import { Link } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/CategoryPreview.component";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          data={categoriesMap[title]}
          title={title}
        />
      ))}
    </>
  );
}

export default CategoriesPreview;
