import React from "react";
import "../App.css";
import HeaderSimples from "../components/HeaderSimples";

const Cartoes = () => {
  return (
    <>
      <HeaderSimples />
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="card w-75 CardCartao d-flex border-3 border-black rounded-5">
          <div className="p-5">
            <h1 className="text-center text">Cadastrar Cartão</h1>
            <form>
              <div className="row">
                <div className="mb-3 col-6">
                  <label className="form-label" htmlFor="frmNome">
                    Numero Cartão:
                  </label>
                  <input
                    className="form-control bg-transparent border-black"
                    type="text"
                    name="frmNome"
                    id="frmNome"
                  />
                </div>

                <div className="mb-3 col-6">
                  <label className="form-label" htmlFor="frmEmail">
                    Nome do Titular:
                  </label>
                  <input
                    className="form-control bg-transparent border-black"
                    type="email"
                    name="frmEmail"
                    id="frmEmail"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <div className="mb-3 col-6">
                      <label className="form-label" htmlFor="frmValidade">
                        Validade:
                      </label>
                      <input
                        className="form-control bg-transparent border-black"
                        type="text"
                        name="frmValidade"
                        id="frmValidade"
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label className="form-label" htmlFor="frmCVV">
                        CVV:
                      </label>
                      <input
                        className="form-control bg-transparent border-black"
                        type="text"
                        name="frmCVV"
                        id="frmCVV"
                      />
                    </div>
                    <div className="mb-3 col-12">
                      <label className="form-label" htmlFor="frmCPF">
                        CPF:
                      </label>
                      <input
                        className="form-control bg-transparent border-black"
                        type="text"
                        name="frmCPF"
                        id="frmCPF"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button className="btn btn-primary w-50 my-2">
                      Cadastrar Cartão
                    </button>
                    <button className="btn btn-danger w-50 my-2">
                      Cancelar
                    </button>
                  </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                  <img
                    className="img-fluid"
                    src="https://placehold.co/300x180"
                    alt=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartoes;
