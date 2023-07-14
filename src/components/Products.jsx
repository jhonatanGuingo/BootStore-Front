import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function Products() {
    return(
        <ProductsContainer>
            <ProductCard/>
        </ProductsContainer>
    )
}

const ProductsContainer = styled.div`
    
    padding: 36px 250px 36px 250px;
    background-color: rgba(0, 0, 0, 0.02);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`