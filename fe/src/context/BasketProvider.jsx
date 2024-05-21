import React, { createContext, useState } from "react";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);

    if (index !== -1) {
      basket[index].count++;
      return setBasket([...basket]);
    } else {
      return setBasket([...basket, { ...item, count: 1 }]);
    }
  }

  function decBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);

    if (basket[index].count > 1) {
      basket[index].count--;
      return setBasket([...basket]);
    }
  }

  function removeBasket(item) {
    setBasket([...basket.filter((x) => x._id !== item._id)]);
  }

  function getTotal() {
    return basket.reduce(
      (prev, initial) => prev + initial.count * initial.price,
      0
    );
  }
  return (
    <BasketContext.Provider
      value={{ basket, addBasket, decBasket, removeBasket, getTotal }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
