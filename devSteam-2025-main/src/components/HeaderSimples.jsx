import React from "react";
import { useNavigate } from "react-router";
const HeaderSimples = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Redireciona para a página principal
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark py-3"
      onClick={handleClick} 
      style={{ cursor: "pointer" }}
    >
      <i className="bi bi-controller fs-1 text-light me-3"></i>
      <span className="navbar-brand fw-bold fs-3">DevSteam</span>
    </div>
  );
};

export default HeaderSimples;
