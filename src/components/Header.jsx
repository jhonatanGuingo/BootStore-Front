import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { UserContext } from "../contexts/UserContext";
import { StoreContext } from "../contexts/StoreContext";

export default function Header() {
  const {cartItems} = useContext(StoreContext);
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    //login
    console.log(user);
    if (user && user.token && user.name && user.userId) {
    
   
      setIsLogged(true);
        } else {
          setIsLogged(false);
        }
    //
    const currentPath = location.pathname.split("/")[2];
    setSelectedItem(currentPath || "perifericos");
  
    if (location.pathname === "/cart") {
      setSelectedItem("cart");
    }
  }, [location]);
  

  const navigate = useNavigate();
  const handleItemClick = (item) => {
    if (item === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
      if (selectedItem === "perifericos" || selectedItem === "games") {
        setSelectedItem(null);
      }
    }
    if (item === "cart") {
      return navigate(`/cart`);
    }
    navigate(`/categoria/${item}`);
  };
  
  const login = () => {
    navigate("/signIn")
  }

  function Logout() {
    localStorage.removeItem("user");
    setUser({})
    setIsLogged(false)
    navigate("/");
  }
 console.log(isLogged, "final")
 console.log(user, "user")
  return (
    <>
      <HeaderSC logged={isLogged} cont={cartItems.length}>
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
          <span
            className={selectedItem === "cart" ? "selected" : ""}
            onClick={() => handleItemClick("cart")}
          >
            <FiShoppingCart />
            <h1>{cartItems.length}</h1>
          </span>
          <h2><BiSolidUserCircle/></h2>
          <ul>
            <li>
              MINHA CONTA
            </li>
            <b onClick={login}>ENTRAR/CADASTRO</b>
          </ul>
          <h3>{user.name}</h3>
          <p onClick={Logout}><BiExit /></p>
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
    align-items: center;
    width: 230px;
    font-size: 25px;
    margin-right: 300px;
    h2 {
      display: ${(props) => (props.logged ? "none" : "inline")};
      margin-top: 7px;
      margin-left: 40px;
      font-size: 35px;
    }
    ul {
      display: ${(props) => (props.logged ? "none" : "inline")};
      font-family: roboto;
      li {
        position: relative;
        top: 4px;
        font-size: 10px;
      }
      b {
        position: relative;
        bottom: 3px;
        font-size: 15px;
        font-weight: 700;
        &:hover {
          color: #ff274b;
          cursor: pointer;
        }
      }
    }
    p {
      display: ${(props) => (props.logged ? "inline" : "none")};
      cursor: pointer;
      &:hover {
        color: #ff274b;
      }
    }
    h3 {
      display: ${(props) => (props.logged ? "inline" : "none")};
      margin-left: 90px;
      margin-bottom: 2px;
      font-size: 30px;
    }
    span {
      cursor: pointer;
      &:hover {
        color: #ff274b;
      }
      position: relative;
      h1 {
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
        display: ${(props) => (props.cont==0 ? "none" : "flex")};
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
