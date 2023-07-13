import styled from "styled-components"
import Header from "./../components/Header"

function Cart() {
    return (
        <>
            <Header />
            <Container >
                <Bar >
                    <h2>Shopping Cart</h2>
                </Bar>
            </Container>
        </>
    )
}

export default Cart

const Container = styled.main`


`

const Bar = styled.section`
    display: flex;
    align-items: center;
    font-size: 4rem;
    font-family: Bebas Neue;
    padding-left: 20%;
    min-width: 100%;
    height: 15rem;
    background: linear-gradient(167deg, rgba(0,0,0,1) 30%, rgba(121,121,121,1) 100%);
    color: white;
    letter-spacing: 0.2rem;

`