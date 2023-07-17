import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserProvider from "./contexts/UserContext";
import Cart from "./pages/Cart"
import Peripherals from "./pages/Peripherals"
import Games from "./pages/Games";
import Hardware from "./pages/Hardware";
import Computers from "./pages/Computers";
import Cellphones from "./pages/Cellphones";
import { StoreProvider } from "./contexts/StoreContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <StoreProvider>
          <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categoria/perifericos" element={<Peripherals />} />
            <Route path="/categoria/games" element={<Games />} />
            <Route path="/categoria/hardware" element={<Hardware />} />
            <Route path="/categoria/computadores" element={<Computers />} />
            <Route path="/categoria/celulares" element={<Cellphones />} />
            <Route
              path="/"
              element={<Navigate to="/categoria/perifericos" replace />}
            />
          </Routes>
        </StoreProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
