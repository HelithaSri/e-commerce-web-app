import React from "react";
import all_product from "./../assets/data/all_product";

export const ShopContext = React.createContext(null);

const ShopContextProvider = (props) => {
  const ContextValue = { all_product };

  return(
  <ShopContext.Provider value={ContextValue}>
    {props.children}
  </ShopContext.Provider>
  )
};

export default ShopContextProvider;
