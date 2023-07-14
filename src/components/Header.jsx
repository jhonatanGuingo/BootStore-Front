import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import img from "../../public/header.jpg";

export default function Header() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    setSelectedItem(currentPath || "perifericos");
  }, [location]);

  const navigate = useNavigate();
  const handleItemClick = (item) => {
    if (item === selectedItem) {
      return;
    }
    setSelectedItem(item);
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
          <p><FiShoppingCart /></p>
          <p><BsSearch /></p>
          <p><BiExit /></p>
        </div>
      </HeaderSC>
      <SCimg>
        <img src={img} alt="header" />
      </SCimg>
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
    }
  }
`;

const SCimg = styled.div`
  img {
    margin-top: 101px;
    width: 100%;
    height: 220px;
    object-fit: cover;
    image-rendering: crisp-edges;
  }
`;
