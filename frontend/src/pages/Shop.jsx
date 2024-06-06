import React from "react";
import Hero from "./../components/hero/Hero";
import Populer from "./../components/populer/Populer";
import Offers from "../components/offers/Offers";
import NewCollections from "../components/newCollections/NewCollections";

function Shop() {
  return (
    <div>
      <Hero />
      <Populer />
      <Offers />
      <NewCollections />
    </div>
  );
}

export default Shop;
