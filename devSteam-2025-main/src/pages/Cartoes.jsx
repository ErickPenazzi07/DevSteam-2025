import React from "react";
import "../App.css";
import HeaderSimples from "../components/HeaderSimples";


const Cartoes = () => {
  return (
    <>
    <HeaderSimples />
    <div className=" card CardCartao d-flex border-3 border-black col-lg-6 col-md-8 col-sm-12 w-75    ">
      <div className="container py-5 w-50">
        <form>
          <div className="mb-3">
            <h1 className="text-center text">Cadastrar Cartão</h1>
            <label className="form-label py-2 " htmlFor="frmNome">
              Numero Cartão:
            </label>
            <input
              className="form-control bg-transparent border-black"
              type="text"
              name="frmNome"
              id="frmNome"
            />
          </div>

          <div className="mb-3">
            <label className="form-label " htmlFor="frmEmail">
              Nome do Titular:
            </label>
            <input
              className="form-control bg-transparent border-black"
              type="email"
              name="frmEmail"
              id="frmEmail"
            />
          </div>
            <div className="mb-3">
                <label className="form-label " htmlFor="frmEmail">
                Validade:
                </label>
                <input
                className="form-control bg-transparent border-black"
                type="email"
                name="frmEmail"
                id="frmEmail"
                />
            </div>
            <div className="mb-3">
                <label className="form-label " htmlFor="frmEmail">
                CVV:
                </label>
                <input
                className="form-control bg-transparent border-black"
                type="email"
                name="frmEmail"
                id="frmEmail"
                />
            </div>
            <div className="mb-3">
                <label className="form-label " htmlFor="frmEmail">
                CPF:
                </label>
                <input
                className="form-control bg-transparent border-black"
                type="email"
                name="frmEmail"
                id="frmEmail"
                />
            </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-primary w-50 m-2 ">Cadastrar Cartão</button>
            <button className="btn btn-danger w-50 m-2 ">Cancelar</button>
          </div>
          
        </form>
      </div>
    </div>
    </>
  );
};

export default Cartoes;
