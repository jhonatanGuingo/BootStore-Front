import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
//import { peripherals } from "../data/products";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Loading from "../components/Loading";

export default function Peripherals() {
    const [loading, setLoading] = useState(true)
    const {peripherals, setPeripherals} = useContext(StoreContext)
    
    useEffect(() => {
        const promise = axios.get("/peripherals")
        promise.then((answer) => {
        console.log(answer.data)
         setPeripherals(answer.data);
         console.log(peripherals);
         setLoading(false);
    })
    }, [])
    return(
        (loading ? <Loading/> : <>
        <Header/>
        <Products products={peripherals}/>
        <Footer/>
    </>)
    )
}

