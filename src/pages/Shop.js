import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import NewCollections from "../components/NewCollections";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
