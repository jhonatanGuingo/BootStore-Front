import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function CheckoutSuccessPage() {
    const navigate = useNavigate();

    function exitPage() {
        navigate('/categoria/perifericos');
    }

    return (
        <>
            <Header></Header>
            <ContentContainer>
                <MessageContainer>
                    <PurchaseMessage>OBRIGADO PELA PREFERÊNCIA</PurchaseMessage>
                    <PurchaseMessageSmall>Seu pedido foi aceito. Iremos lhe contatar em breve.</PurchaseMessageSmall>
                    <SubmitButton onClick={exitPage}>Ir a compras</SubmitButton>
                </MessageContainer>
            </ContentContainer>
            <Footer></Footer>
        </>
    );
}

const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222222;
`;

const MessageContainer = styled.div`
    height: 600px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PurchaseMessage = styled.h2`
    font-family: 'Bebas Neue';
    font-size: 80px;
    color: #d8331d;
    text-align: center;
`;

const PurchaseMessageSmall = styled.h3`
    font-family: 'Roboto';
    font-size: 18px;
    color: #dadada;
    text-align: center;
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    width: 200px;
    height: 45px;
    background: #a1a1a1;
    border-color: #a1a1a1;
    border-style: solid;
    border-radius: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;
