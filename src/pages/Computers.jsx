import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { computers } from "../data/products";

export default function Computers() {
    console.log("a")
    return(<>
            <Header/>
            <Products products={computers}/>
            <Footer/>
        </>
    )
}