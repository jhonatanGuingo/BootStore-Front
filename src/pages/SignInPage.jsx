import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import React from "react";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { user, setUser } = useContext(UserContext);
  function signIn(e) {
    e.preventDefault();
    const promise = axios.post("/signIn", {
      email: email,
      password: pass,
    });

    promise.then((res) => {
      const { userId, name, token } = res.data;
      setUser({ userId, name, token });
      localStorage.setItem("user", JSON.stringify({ userId, name, token }));
      alert("logado com sucesso");
      navigate("/");
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <>
      <Header />
      <SignInContainer>
        <form onSubmit={signIn}>
          <h1>Katchau Store</h1>
          <input
            placeholder="E-mail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>

        <Link to={`/signUp`}>Primeira vez? Cadastre-se!</Link>
      </SignInContainer>
      <Footer/>
    </>
  );
}

const SignInContainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: Bebas Neue;
    color: black;
    font-size: xx-large;
  }
  input {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 50%);
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
      border: 2px solid #ffb6b6;
      margin: 0px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
  }
  button {
    
    outline: none;
    border: none;
    width: calc(100% - 80%);
    border-radius: 5px;
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    color: black;
    cursor: pointer;

    padding: 12px;
  }
  a {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: black;
    text-decoration: none;
    padding-top: 30px;
  }
`;
