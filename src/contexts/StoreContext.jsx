import { createContext, useState } from "react";
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [peripherals, setPeripherals] = useState({});
  const [games, setGames] = useState({});
  const [hardware, setHardware] = useState({});
  const [computers, setComputers] = useState({});
  const [cellphones, setCellphones] = useState({});

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setCartItems,
        token,
        setToken,
        name,
        setName,
        peripherals,
        setPeripherals,
        games,
        setGames,
        hardware,
        setHardware,
        computers,
        setComputers,
        cellphones,
        setCellphones
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};