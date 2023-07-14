import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { cellphones } from "../data/products";

export default function Cellphones() {
    console.log("a")
    return(<>
            <Header/>
            <Products products={cellphones}/>
            <Footer/>
        </>
    )
}