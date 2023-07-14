import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { peripherals } from "../data/products";

export default function Peripherals() {
    return(<>
            <Header/>
            <Products products={peripherals}/>
            <Footer/>
        </>
    )
}

