import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from "./contexts/Context";
import styled from "styled-components"
import HomePage from "./pages/HomePage"

export default function App() {
  
  return (
    <ContextProvider>
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
    </ContextProvider>
  )
}

const PagesContainer = styled.main`
  background-color: #ffffff;
  width: 100%;
  max-height: 100vh;
`
