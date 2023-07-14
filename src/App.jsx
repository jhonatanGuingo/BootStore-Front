import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserProvider from "./contexts/UserContext";
import Peripherals from "./pages/Peripherals"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/perifericos" element={<Peripherals />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

