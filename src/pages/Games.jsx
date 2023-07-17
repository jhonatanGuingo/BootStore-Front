import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
//import { games } from "../data/products";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Loading from "../components/Loading";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function Peripherals() {
    const [loading, setLoading] = useState(true)
    const {games, setGames} = useContext(StoreContext)
    
    useEffect(() => {
        const promise = axios.get("/games")
        promise.then((answer) => {
        console.log(answer.data)
         setGames(answer.data);
         console.log(games);
         setLoading(false);
    })
    }, [])

    return(
        (loading ? <Loading/> : <>
        <Header/>
        <Products products={games}/>
        <Footer/>
    </>)
    )
}