import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("authToken", response.data.token);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-inputs-container">
        <span>Login</span>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>

        <span>Senha</span>
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </div>

      <div className="form-button-container">
        <p className="link">Esqueceu a senha? Clique aqui</p>
        <button className="in" type="submit">
          Entrar
        </button>
      </div>
    </form>
  );
};

export default Form;
