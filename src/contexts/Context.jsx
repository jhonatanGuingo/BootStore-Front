import { createContext, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [peripheral, setPeripheral] = useState([]);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        token,
        setToken,
        name,
        setName,
        peripheral,
        setPeripheral
      }}
    >
      {children}
    </Context.Provider>
  );
};