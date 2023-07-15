import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

export default function Header() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    setSelectedItem(currentPath || "perifericos");
  
    if (location.pathname === "/cart") {
      setSelectedItem("cart");
    }
  }, [location]);
  

  const navigate = useNavigate();
  const handleItemClick = (item) => {
    if (item === selectedItem) {
      setSelectedItem(null); // Deselecionar o item se já estiver selecionado
    } else {
      setSelectedItem(item); // Selecionar o novo item
      // Deselecionar outros itens se houver algum selecionado
      // Isso pode ser feito definindo o valor do estado `selectedItem` como `null`
      // para todos os outros itens desejados. Por exemplo:
      if (selectedItem === "perifericos" || selectedItem === "games") {
        setSelectedItem(null);
      }
    }
    if( item=== "cart"){
      return navigate(`/cart`);
    }
    navigate(`/categoria/${item}`);
  };

  return (
    <>
      <HeaderSC>
        <h1>KATCHAU</h1>
        <span>
          <h3
            className={selectedItem === "perifericos" ? "selected" : ""}
            onClick={() => handleItemClick("perifericos")}
          >
            PERIFÉRICOS <p><BsChevronDown /></p>
          </h3>
          <h3
            className={selectedItem === "games" ? "selected" : ""}
            onClick={() => handleItemClick("games")}
          >
            GAMES <p><BsChevronDown /></p>
          </h3>
          <h3
            className={selectedItem === "hardware" ? "selected" : ""}
            onClick={() => handleItemClick("hardware")}
          >
            HARDWARE <p><BsChevronDown /></p>
          </h3>
          <h3
            className={selectedItem === "computadores" ? "selected" : ""}
            onClick={() => handleItemClick("computadores")}
          >
            COMPUTADORES <p><BsChevronDown /></p>
          </h3>
          <h3
            className={selectedItem === "celulares" ? "selected" : ""}
            onClick={() => handleItemClick("celulares")}
          >
            CELULAR & SMARTPHONE <p><BsChevronDown /></p>
          </h3>
        </span>
        <div>
          <p
            className={selectedItem === "cart" ? "selected" : ""}
            onClick={() => handleItemClick("cart")}
          >
            <FiShoppingCart />
            <span>1</span>
          </p>
          <p><BsSearch /></p>
          <p><BiExit /></p>
        </div>
      </HeaderSC>
    </>
  );
}

const HeaderSC = styled.header`
  position: fixed;
  background-color: white;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 39px;
  font-family: Bebas Neue;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgrey;
  h1 {
    margin-left: 300px;
  }
  span {
    display: flex;
    font-family: Roboto;
    font-weight: 700;
    h3 {
      display: flex;
      font-size: 14px;
      margin: 0px 30px;
      cursor: pointer;
      &:hover {
        color: #a5a5a5;
      }
      p {
        font-size: 13px;
        margin-left: 7px;
        margin-top: 1px;
      }
      &.selected {
        color: #ff274b;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 150px;
    font-size: 25px;
    margin-right: 300px;
    p {
      cursor: pointer;
      &:hover {
        color: #a5a5a5;
      }
      position: relative;
      span{
        background-color: #000000;
        width: 15px;
        height: 15px;
        position: absolute;
        top: -5px;
        right: -5px;
        color: white;
        font-family: Roboto;
        font-size: 11px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;