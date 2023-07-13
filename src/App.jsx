import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/signUp" element={<SignUpPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
