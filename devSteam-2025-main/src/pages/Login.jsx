import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderSimples from "../components/HeaderSimples";
import "../App.css";
const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devlogin", JSON.stringify({ nome, email }));

      navigate("/");
    }
  };

  return (
    <>
    <HeaderSimples />
    <div className=" card LoginCard d-flex border-3 border-black w-25 col-lg-6 col-md-8 col-sm-12 " >
      
    <div className="container py-5 w-50">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <h1 className="text-center text">Login</h1>
          <label className="form-label py-2 " htmlFor="frmNome">
            Nome:
          </label>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control bg-transparent border-black"
            type="text"
            name="frmNome"
            id="frmNome"
            />
        </div>

        <div className="mb-3">
          <label className="form-label " htmlFor="frmEmail">
            E-mail:
          </label>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control bg-transparent border-black"
            type="email"
            name="frmEmail"
            id="frmEmail"
            />
        </div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary w-50 m-2 ">Entrar</button>
        </div>
      </form>
    </div>
    </div>
  
  </>
  );
};

export default Login;
