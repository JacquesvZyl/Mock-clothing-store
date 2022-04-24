import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/CategoriesPreview.page";
import Category from "../category/Category.page";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
