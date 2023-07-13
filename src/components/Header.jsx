import React, { useState } from "react";
import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import img from "../../public/header.jpg"

export default function Header() {
  const [selectedItem, setSelectedItem] = useState("peripherals");

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
  <>
    <HeaderSC>
      <h1>KATCHAU</h1>
      <span>
        <p
          className={selectedItem === "peripherals" ? "selected" : ""}
          onClick={() => handleItemClick("peripherals")}
        >
          PERIFÉRICOS <h3><BsChevronDown /></h3>
        </p>
        <p
          className={selectedItem === "games" ? "selected" : ""}
          onClick={() => handleItemClick("games")}
        >
          GAMES <h3><BsChevronDown /></h3>
        </p>
        <p
          className={selectedItem === "hardware" ? "selected" : ""}
          onClick={() => handleItemClick("hardware")}
        >
          HARDWARE <h3><BsChevronDown /></h3>
        </p>
        <p
          className={selectedItem === "computers" ? "selected" : ""}
          onClick={() => handleItemClick("computers")}
        >
          COMPUTADORES <h3><BsChevronDown /></h3>
        </p>
        <p
          className={selectedItem === "cellphones" ? "selected" : ""}
          onClick={() => handleItemClick("cellphones")}
        >
          CELULAR & SMARTPHONE <h3><BsChevronDown /></h3>
        </p>
      </span>
      <div>
        <p><FiShoppingCart /></p>
        <p><BsSearch /></p>
        <p><BiExit /></p>
      </div>
    </HeaderSC>
    <SCimg>
        <img src={img}></img>
    </SCimg>
    </>
  );
}

const HeaderSC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 39px;
  font-family: Bebas Neue;
  padding: 36px 250px 36px 250px;
  border-bottom: 1px solid lightgrey;
  span{
    display: flex;
    font-family: Roboto;
    font-weight: 700;
    p{
        display: flex;
        font-size: 14px;
        margin: 0px 40px;
        cursor: pointer;
        &:hover{
            color: #a5a5a5;
        }
        h3{
            font-size: 13px;
            margin-left: 7px;
            margin-top: 1px;
        }
        &.selected {
        color: #ff002b;
    }
  }
}
  div{
    display: flex;
    justify-content: space-between;
    width: 150px;
    font-size: 25px;
    p{
        cursor: pointer;
        &:hover{
            color: #a5a5a5;
        }
    }
  }
`

const SCimg = styled.div`
    img{
        width: 100%;
        height: 220px;
        object-fit: cover;
        image-rendering: crisp-edges;
    }
`