import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
//import { computers } from "../data/products";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Loading from "../components/Loading";

export default function Peripherals() {
    const [loading, setLoading] = useState(true)
    const {computers, setComputers} = useContext(StoreContext)
    
    useEffect(() => {
        const promise = axios.get("/computers")
        promise.then((answer) => {
        console.log(answer.data)
         setComputers(answer.data);
         console.log(computers);
         setLoading(false);
    })
    }, [])

    return(
        (loading ? <Loading/> : <>
        <Header/>
        <Products products={computers}/>
        <Footer/>
    </>)
    )
}