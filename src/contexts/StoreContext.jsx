import { createContext, useState } from "react";
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setCartItems,
        token,
        setToken,
        name,
        setName
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};