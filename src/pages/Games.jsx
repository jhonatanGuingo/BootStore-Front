import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { games } from "../data/products";

export default function Games() {
    console.log("a")
    return(<>
            <Header/>
            <Products products={games}/>
            <Footer/>
        </>
    )
}