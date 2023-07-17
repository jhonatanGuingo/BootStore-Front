import styled from "styled-components"
import Header from "./../components/Header"
import { CiCircleRemove } from "react-icons/ci"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { StoreContext } from "../contexts/StoreContext"
import { useState, useContext, useEffect } from "react"
import axios from "axios"


const formatCurrentInBRL = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const handlerValidateCode = (code, setDiscount, setActived, setTextActived) => {
    const promisse = axios.post(`${import.meta.env.VITE_API_URL}/discount`, { code: code })
    promisse.then(res => {
        setDiscount(res.data.value)
        setActived(true)
        setTextActived("Código resgatado com sucesso")
    })
    promisse.catch(res => {
        setDiscount(0)
        setActived(false)
        setTextActived("Código inválido")
    })
}

function ProductsList({ product, button }) {
    return (
        <li>
            <CiCircleRemove
                onClick={button} 
                cursor="pointer" 
                fontSize={20} 
            />
            <img src={product.image} />
            <span className="title-product">{product.title}</span>
            <span className="price-product">{formatCurrentInBRL(product.price)}</span>
        </li>
    )
}

function Cart() {
    const [ actived, setActived ] = useState(false)
    const [ textActived, setTextActived ] = useState("Insira seu código de cumpom e depois clicke em 'submit'")
    const { cartItems, setCartItems } = useContext(StoreContext)
    const [subtotal, setSubtotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    const [code, setCode] = useState("")

    useEffect(() => {
        const prices = cartItems.map(item => item.price)
        let sum = 0
        for ( let i in prices) {
            sum += prices[i]
        }
        setSubtotal(sum)

        let discountInValue = sum - discount

        setTotal(discountInValue)

    }, [cartItems])

    const handlerRemoveItem = (id) => {
        const cartItemsNew = [...cartItems]
        const getindex = cartItemsNew.findIndex(item => item.title === id)
        
        cartItemsNew.splice(getindex, 1)
        setCartItems(cartItemsNew)
    }

    return (
        <>
            <Header />
            <Container >
                <Bar >
                    <h2>Carrinho</h2>
                </Bar>
                <Info>
                    <Products>

                        <h3>Produtos</h3>
                        <ul>
                            {cartItems? 
                            (cartItems.map((product, index) => 
                            <ProductsList
                                button={() => handlerRemoveItem(product.title)}
                                id={product.title}
                                product={product} 
                                key={index} />
                            )):
                            ("Nenhum produto adicionado")
                            } 
                        </ul>
                        <Discount >
                            <h3>Desconto</h3>
                            <p>{textActived}</p>

                            <div>
                                <input
                                    disabled={actived}
                                    type="text" 
                                    placeholder="Cupom"
                                    onChange={(e) => setCode(e.target.value)}
                                    value={code}
                                />
                                <button 
                                    className="discount-button"
                                    onClick={() => handlerValidateCode(code, setDiscount, setActived, setTextActived)}
                                >Enviar</button>
                            </div>
                        </Discount>
                    </Products>

                    <DeatailsInfo>
                        <div className="cart-info">

                            <span className="title-cart">Total do Carrinho</span>
                            <hr />
                            <span className="subtotal-cart">{formatCurrentInBRL(subtotal)}</span>
                            <hr />
                            <span className="title-cart">Adicional:</span>
                            <hr />
                            <span className="discount-cart">Desconto: {formatCurrentInBRL(discount)}</span>
                            <span className="total-cart">{formatCurrentInBRL(total)}</span>

                        </div>

                        <div className="button-info" >
                            <button className="checkout">
                                <Link to="/checkout">

                                    Finalizar a compra
                                </Link>
                            </button>
                            <button className="back">
                                <Link to="/categoria/perifericos">
                                    Continue Comprando

                                </Link>
                            </button>
                        </div>
                    </DeatailsInfo>

                </Info>
            </Container>
            <Footer />
        </>
    )
}

export default Cart

const Container = styled.main`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
`

const Discount = styled.section`
    margin-top: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    font-weight: 500;

    div {
        display: flex;
        gap: 20px;
    }

    input {
        width: 16rem;
        border: 1px solid red;
        border-radius: 4px;
        padding-left: 20px;

        &:focus {
            outline: 0;
        }
    }

    .discount-button {
        width: 4rem;
        height: 2rem;
        background-color: #989898;
        color: white;
        border: none;
        border-radius: 4px;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
            background-color: #252525;
        }
    }
`

const Bar = styled.section`
    display: flex;
    align-items: center;
    font-size: 4rem;
    font-family: Bebas Neue;
    padding-left: 15.7%;
    width: 100%;
    height: 12rem;
    background: linear-gradient(167deg, rgba(0,0,0,1) 30%, rgba(121,121,121,1) 100%);
    color: white;
    letter-spacing: 0.2rem;
`

const Info = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding-left: 15.7%;
    padding-top: 5rem;
    display: flex;
    width: 100%;
    gap: 3rem;
    font-family: Roboto;
    
    h3 {
        font-size: 2.18rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`

const Products = styled.article`
    margin-bottom: 12rem;
    .title-product {
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        width: 300px;
        word-break: break-all;
    }

    img {
        height: 50px;
    }

    ul {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        padding-left: 2rem;
        padding-top: 4rem;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 500px;
    }
`

const DeatailsInfo = styled.article`
    width: 23rem;
    height: 16rem;

    .cart-info {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        text-align: justify;
        padding: 2rem;
        margin-top: 4rem;

        background-color: #252525;

        .title-cart {
            font-size: 1.25rem;
            color: white;
            font-weight: 700;
            text-transform: uppercase;
            width: 300px;
            word-break: break-all;
            word-spacing: 0.7rem;
            
        }

        .subtotal-cart {
            font-weight: 700;
            color: white;
            
            &::before {
                content: "Subtotal:";
                margin-right: 13.5rem;
                color: gray;
            }
        }

        .discount-cart {
            font-weight: 700;
            color: gray;
        }

        .total-cart {
            color: white;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: auto;

            &::before {
                content: "Total:";
                font-size: 1.25rem;
                font-weight: 700;
                text-transform: uppercase;
                margin-right: 13.5rem;
            }
        }

        hr {
            width: 100%;
            border-color: #252525;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }
    }

    a {
        display: block;
        color: inherit; 
        text-decoration: none;
    }

    .button-info {
        margin-top: 1rem;
        width: 432px;
        display: flex;
        justify-content: space-between;
        button {
            font-family: Roboto;
            font-size: 0.9rem;
            font-weight: 700;
            width: 206px;
            height: 40px;
            border-radius: 4px;
            transition: all 0.4s;
        }

        .checkout {
            background-color: #989898;
            color: white;
            border: none;

            &:hover {
                background-color: #252525;
            }
        }

        .back {
            background-color: none;
            border: 1px solid red;

            &:hover {
                background-color: red;
                color: white;
            }
        }
    }
`