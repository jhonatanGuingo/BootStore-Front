import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { hardware } from "../data/products";

export default function Hardware() {
    console.log("a")
    return(<>
            <Header/>
            <Products products={hardware}/>
            <Footer/>
        </>
    )
}