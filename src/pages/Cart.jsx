import styled from "styled-components"
import Header from "./../components/Header"
import { CiCircleRemove } from "react-icons/ci"
import { Link } from "react-router-dom"

function Cart() {



    return (
        <>
            <Header />
            <Container >
                <Bar >
                    <h2>Carrinho</h2>
                </Bar>
                <Info>
                    <Products>
                        <h3>Produto</h3>
                        <ul>
                            <li>
                                <CiCircleRemove cursor="pointer" fontSize={20} />
                                <img src="https://s2-techtudo.glbimg.com/b3v-mCTmam09F1C0Wjsau93UiyY=/0x0:695x444/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/3/f/fjBhJkS0WABWAvB4MHzw/2015-10-23-video.png" />
                                <span className="title-product">pc gamer nã é por</span>
                                <span className="price-product">R$24</span>
                            </li>
                        </ul>
                        <Discount >
                            <h3>Cupom</h3>
                            <p>Apos terminar clicke em submit button</p>
                            <div>
                                <input type="text" placeholder="Cupom"/>
                                <button className="discount-button">Submit</button>
                            </div>
                        </Discount>
                    </Products>
                
                    <DeatailsInfo>
                        <div className="cart-info">
                            <span className="title-cart">Resumo da Compra</span>
                            <hr />
                            <span className="subtotal-cart">R$500</span>
                            <hr />
                            <span className="title-cart">Cupom:</span>
                            <hr />
                            <span className="discount-cart">Discount: R$0</span>
                            <span className="total-cart">R$500</span>
                        </div>

                        <div className="button-info" >
                            <button className="checkout">
                                <Link to="/checkout">
                                    Finalizar compra
                                </Link>
                            </button>
                            <button className="back">
                                <Link to="/">
                                    Continue comprando
                                </Link>
                            </button>
                        </div>
                    </DeatailsInfo>

                </Info>
            </Container>
        </>
    )
}

export default Cart

const Container = styled.main`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
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
                margin-right: 16.5rem;
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
                margin-right: 16.5rem;
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