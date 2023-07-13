import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"
import { BsChevronDown } from "react-icons/bs"

export default function Header() {
    return(
        <HeaderSC>
        <h1>KATCHAU</h1>
        <span>
            <p>HOME <h3><BsChevronDown/></h3></p>
            <p>SHOP <h3><BsChevronDown/></h3></p>
            <p>PRODUCT <h3><BsChevronDown/></h3></p>
            <p>BLOG <h3><BsChevronDown/></h3></p>
            <p>PAGE</p>
        </span>
        <div>
            <p><FiShoppingCart/></p>
            <p><BsSearch/></p>
            <p><BiExit/></p>
        </div>
      </HeaderSC>
    )
}

const HeaderSC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
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
        font-size: 18px;
        margin: 0px 40px;
        cursor: pointer;
        &:hover{
            color: #e6586f;
        }
        h3{
            font-size: 13px;
            margin-left: 7px;
            margin-top: 1px;
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
            color: #e6586f;
        }
    }
  }
`