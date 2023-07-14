import styled from "styled-components"
import { CgFacebook } from "react-icons/cg"
import { BsInstagram } from "react-icons/bs"    
import { HiOutlineLocationMarker } from "react-icons/hi"  
import { BsTelephone } from "react-icons/bs"  
import { TfiEmail } from "react-icons/tfi"  

export default function Footer(){
    return(
        <FooterSC>
            <div>
                <span>
                    <h1>KATCHAU</h1>
                    <h2>Uma mistura de Kabum e Pichau, Katchau!</h2>
                    <p>
                        <CgFacebook/>
                        <BsInstagram/>
                    </p>
                </span>
                <ul>
                    <p>INFORMAÇÕES</p>
                    <li>Sobre a Katchau</li>
                    <li>FAQ</li>
                    <li>Fale conosco</li>
                </ul>
                <ul>
                    <p>LINKS RÁPIDOS</p>
                    <li>Periféricos</li>
                    <li>Hardware</li>
                    <li>Celular & Smartphone</li>
                </ul><ul>
                    <p>FALE CONOSCO</p>
                    <li><h1><HiOutlineLocationMarker/></h1>Rua Carlos Augusto Cornelsen, 1459, SP - SP</li>
                    <li><h1><BsTelephone/></h1>(00) 0000-0000</li>
                    <li><h1><TfiEmail/></h1>katchau@gmail.com</li>
                </ul>
            </div>
            <h3>
                <p>COPYRIGHT © 2023 KATCHAU</p>
                <p>TODOS OS DIREITOS RESERVADOS</p>
            </h3>
        </FooterSC>
    )
}

const FooterSC = styled.div`
    background-color: #303030;
    div{
        display: flex;
        height: 350px;
        padding: 0px 280px;
        span{
            width: 300px;
            h1{
                margin-top: 70px;
                font-size: 39px;
                font-family: Bebas Neue;
                color: white;
            }
            h2{
                margin-top: 50px;
                font-size: 15px;
                font-family: Roboto;
                color: white;
            }
            p{
                margin-top: 60px;
                font-size: 40px;
                color: white;
            }
        }
        ul{
            margin-left: 40px;
            width: 340px;
            p{
                margin-top: 70px;
                font-size: 22px;
                font-family: Bebas Neue;
                color: #ff274b;
            }
            li{
                display: flex;
                align-items: center;
                margin-top: 32px;
                font-size: 18px;
                font-family: Roboto;
                color: white;
                cursor: pointer;
                &:hover{
                    color: #a5a5a5;
                }
                h1{
                    margin-right: 10px;
                    font-size: 30px;
                    color: #ff274b;
                }
            }
        }
    }
    h3{
        margin-left: 280px;
        width: 1345px;
        display: flex;
        height: 60px; 
        justify-content: space-between;
        align-items: center;
        font-family: Roboto;
        font-weight: 700;
        color: white;
        border-top: 2px solid    #ff274b;;
    }
`