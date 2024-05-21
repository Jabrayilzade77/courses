import React, { createContext, useState } from "react";

export const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setwishList] = useState([]);

  function addwishList(item) {
    const index = wishList.findIndex((x) => x._id === item._id);

    if (index !== -1) {
      return setwishList([...wishList.filter(x=>x._id !== item._id)])
    } else {
      return setwishList([...wishList, { ...item}]);
    }
  }

  function isExitsWishList(item) {

    return wishList.find(x=>x._id === item._id)
    
  }

 

 

  return (
    <WishListContext.Provider
      value={{ wishList, addwishList,isExitsWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;
