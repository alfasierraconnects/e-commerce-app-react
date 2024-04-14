import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumb from "../components/Breadcrumb";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((el) => el.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct category={product.category} />
    </div>
  );
};

export default Product;
