
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserProvider from "./contexts/userContext";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

