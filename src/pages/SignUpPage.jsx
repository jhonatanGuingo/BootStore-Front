import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [load, setLoad] = useState("");
  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();
    setLoad(true);

    if (pass != confirmPass) {
      alert("As senhas devem ser iguais");
      setLoad(false);
      return;
    }

    const promise = axios.post("/signUp", {
      name: name,
      email: email,
      password: pass,
    });

    promise.then((res) => {
      alert("Conta criada com sucesso");
      setLoad(false);
    });

    promise.catch((err) => {
      alert(err.response.data);
      setLoad(false);
    });
  }
  return (
    <>
      <Header />
      <SignUpContainer>
        <form onSubmit={signUp}>
          <h1>Registre-se</h1>
          <input
            disabled={load}
            placeholder="Nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <input
            disabled={load}
            placeholder="E-mail"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            disabled={load}
            placeholder="Senha"
            required
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autocomplete="new-password"
          />
          <input
            disabled={load}
            placeholder="Confirme a senha"
            required
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            autocomplete="new-password"
          />
          <button disabled={load} data-test="sign-up-submit" type="submit">
            {load ? (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#FFFFFF"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>

        <Link to={`/signIn`}>Já tem uma conta? Entre agora!</Link>
      </SignUpContainer>
      <Footer />
    </>
  );
}

const SignUpContainer = styled.div`
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
    font-family: Bebas Neue;
    outline: none;
    border: none;
    width: calc(100% - 80%);
    border-radius: 5px;
    background-color: white;
    font-size: 25px;
    
    color: black;
    cursor: pointer;

    padding: 12px;
  }
  a {
    font-family: Bebas Neue;
    
    font-size: 20px;
    line-height: 18px;
    color: black;
    text-decoration: none;
    padding-top: 30px;
  }
`;
