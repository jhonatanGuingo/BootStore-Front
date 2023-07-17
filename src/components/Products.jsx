import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import img from "../../public/header.jpg";

export default function Products({products}) {
    return(
    <>
        <SCimg>
             <img src={img} alt="header" />
        </SCimg>
        <ProductsContainer>
            <ProductCard products={products}/>
        </ProductsContainer>
    </>
    )
}

const ProductsContainer = styled.div`
    
    padding: 36px 250px 36px 250px;
    background-color: rgba(0, 0, 0, 0.02);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const SCimg = styled.div`
  img {
    margin-top: 65px;
    width: 100%;
    height: 220px;
    object-fit: cover;
    image-rendering: crisp-edges;
  }
`;