import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
//import { hardware } from "../data/products";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Loading from "../components/Loading";

export default function Peripherals() {
    const [loading, setLoading] = useState(true)
    const {hardware, setHardware} = useContext(StoreContext)
    
    useEffect(() => {
        const promise = axios.get("/hardware")
        promise.then((answer) => {
        console.log(answer.data)
         setHardware(answer.data);
         console.log(hardware);
         setLoading(false);
    })
    }, [])

    return(
        (loading ? <Loading/> : <>
        <Header/>
        <Products products={hardware}/>
        <Footer/>
    </>)
    )
}