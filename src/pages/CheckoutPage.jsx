import styled from 'styled-components';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [payment, setPayment] = useState('');
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        const selectedPayment = event.target.value;
        setPayment(selectedPayment);
    };

    const handleCheckboxClick = (event) => {
        const selectedPayment = event.target.value;
        if (selectedPayment === payment) {
            setPayment(null);
        }
    };

    function checkoutItem(e) {
        e.preventDefault();

        const item = {
            firstname: firstname,
            surname: surname,
            company: company,
            country: country,
            city: city,
            address: address,
            phone: phone,
            email: email,
            zipcode: zipcode,
            payment: payment,
        };

        axios
            .post('/checkout', item)
            .then(checkoutSuccessful)
            .catch(() => {
                alert('Invalid information, please fill out the fields correctly');
            });
    }

    function checkoutSuccessful() {
        navigate('/checkoutsuccess');
    }

    return (
        <>
            <Header />
            <ContentContainer>
                <TitleSection>
                    <Title>Dados pessoais</Title>
                </TitleSection>
                <BillingContainer onSubmit={checkoutItem}>
                    <InputContainer>
                        <InputSection>
                            <InputHalf
                                placeholder="Nome"
                                type="text"
                                required
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}></InputHalf>
                            <InputHalf
                                placeholder="Sobrenome"
                                type="text"
                                required
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}></InputHalf>
                        </InputSection>
                        <InputSection>
                            <InputHalf
                                placeholder="Company Name"
                                type="text"
                                required
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}></InputHalf>
                            <InputHalf
                                placeholder="País"
                                type="text"
                                required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}></InputHalf>
                        </InputSection>
                        <InputSection>
                            <InputFull
                                placeholder="Cidade"
                                type="text"
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}></InputFull>
                        </InputSection>
                        <InputSection>
                            <InputFull
                                placeholder="Endereço"
                                type="text"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}></InputFull>
                        </InputSection>
                        <InputSection>
                            <InputFull
                                placeholder="Telefone"
                                type="number"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}></InputFull>
                        </InputSection>
                        <InputSection>
                            <InputFull
                                placeholder="Email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}></InputFull>
                        </InputSection>
                        <InputSection>
                            <InputHalf
                                placeholder="CEP"
                                type="number"
                                required
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}></InputHalf>
                        </InputSection>
                    </InputContainer>
                    <OrderReview>
                        <ReviewSection>
                            <DeatailsInfo>
                                <div className="cart-info">
                                    <span className="title-cart">Resumo da compra</span>
                                    <hr />
                                    <span className="subtotal-cart">R$500</span>
                                    <hr />
                                    <span className="title-cart">Cupom:</span>
                                    <hr />
                                    <span className="discount-cart">Desconto: R$0</span>
                                    <span className="total-cart">R$500</span>
                                </div>
                            </DeatailsInfo>
                        </ReviewSection>
                        <ReviewSection>
                            <ShipmentContainer>
                                <ShipmentInput
                                    type="checkbox"
                                    value="cash"
                                    checked={payment === 'cash'}
                                    onChange={handleCheckboxChange}
                                    onClick={handleCheckboxClick}></ShipmentInput>
                                <ShipmentInfo>CARTÃO</ShipmentInfo>
                            </ShipmentContainer>
                            <ShipmentContainer>
                                <ShipmentInput
                                    type="checkbox"
                                    value="check"
                                    checked={payment === 'check'}
                                    onChange={handleCheckboxChange}
                                    onClick={handleCheckboxClick}></ShipmentInput>
                                <ShipmentInfo>BOLETO</ShipmentInfo>
                            </ShipmentContainer>
                            <ShipmentContainer>
                                <ShipmentInput
                                    type="checkbox"
                                    value="transfer"
                                    checked={payment === 'transfer'}
                                    onChange={handleCheckboxChange}
                                    onClick={handleCheckboxClick}></ShipmentInput>
                                <ShipmentInfo>PIX</ShipmentInfo>
                            </ShipmentContainer>
                        </ReviewSection>
                        <SubmitButton
                            type="submit"
                            placeholder="Submit">
                            Finalizar Pedido
                        </SubmitButton>
                    </OrderReview>
                </BillingContainer>
            </ContentContainer>
            <HorizontalSeparator></HorizontalSeparator>
            <Footer />
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
    background-color: #ffffff;
`;

const TitleSection = styled.div`
    height: 200px;
    width: 1400px;
    display: flex;
    align-items: end;
`;

const Title = styled.h2`
    font-family: 'Bebas Neue';
    font-size: 40px;
    color: black;
    margin-bottom: 20px;
    margin-left: 78px;
`;

const BillingContainer = styled.form`
    display: flex;
    justify-content: center;
`;

const InputContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputSection = styled.div`
    height: 60px;
    width: 800px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputFull = styled.input`
    box-sizing: border-box;
    width: 800px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #e46612;
    border-radius: 5px;
    margin-top: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: #666666;
    padding: 10px;
    ::placeholder {
        color: #d5d5d5;
    }
    :focus {
        outline: 2px solid #d5d5d5;
    }
`;

const InputHalf = styled.input`
    box-sizing: border-box;
    width: 380px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #e46612;
    border-radius: 5px;
    margin-top: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: #666666;
    padding: 10px;
    ::placeholder {
        color: #d5d5d5;
    }
    :focus {
        outline: 2px solid #d5d5d5;
    }
`;

const ShipmentInput = styled.input`
    margin-right: 20px;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    outline: none;
    transition: border-color 0.2s ease-in-out;

    &:checked {
        background-color: #222222;
    }

    &:checked::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
        margin: 4px; /* Adjust the margin to center the dot */
    }
`;

const ShipmentInfo = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: white;
`;

const ShipmentContainer = styled.div`
    display: flex;
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
    margin-left: -140px;
`;

const OrderReview = styled.div`
    height: 100%;
    width: 500px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ReviewSection = styled.div`
    height: 250px;
    width: 300px;
    background-color: #222222;
    margin-bottom: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 3px 3px 5px grey;
`;

const HorizontalSeparator = styled.div`
    height: 100px;
    width: 100%;
`;

const DeatailsInfo = styled.article`
    .cart-info {
        font-family: 'Roboto';
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        text-align: justify;
        background-color: #252525;

        .title-cart {
            font-family: 'Roboto';
            font-size: 1.25rem;
            color: white;
            font-weight: 700;
            text-transform: uppercase;
            width: 300px;
            word-break: break-all;
            word-spacing: 0.7rem;
        }

        .subtotal-cart {
            font-family: 'Roboto';
            font-weight: 700;
            color: white;

            &::before {
                content: 'Subtotal:';
                margin-right: 11.5rem;
                color: gray;
            }
        }

        .discount-cart {
            font-family: 'Roboto';
            font-weight: 700;
            color: gray;
        }

        .total-cart {
            font-family: 'Roboto';
            color: white;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 60px;

            &::before {
                font-family: 'Roboto';
                content: 'Total:';
                font-size: 1.25rem;
                font-weight: 700;
                text-transform: uppercase;
                margin-right: 11.4rem;
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
`;
