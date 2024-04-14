import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ product }) => {
  return (
    <div className="flex items-center">
      <Link to="/">Home</Link>
      <ion-icon name="chevron-forward-outline"></ion-icon>
      <Link to="/">Shop</Link>
      <ion-icon name="chevron-forward-outline"></ion-icon>
      <Link to={`/${product.category}`}>{product.category}</Link>
      <ion-icon name="chevron-forward-outline"></ion-icon>
      {product.name}
    </div>
  );
};

export default Breadcrumb;
