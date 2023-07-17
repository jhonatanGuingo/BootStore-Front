import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
//import { cellphones } from "../data/products";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Loading from "../components/Loading";

export default function Peripherals() {
    const [loading, setLoading] = useState(true)
    const {cellphones, setCellphones} = useContext(StoreContext)
    
    useEffect(() => {
        const promise = axios.get("/cellphones")
        promise.then((answer) => {
        console.log(answer.data)
         setCellphones(answer.data);
         console.log(cellphones);
         setLoading(false);
    })
    }, [])

    return(
        (loading ? <Loading/> : <>
        <Header/>
        <Products products={cellphones}/>
        <Footer/>
    </>)
    )
}