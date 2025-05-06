import React from "react";
import "../App.css";

const Perfil = () => {
  return (
    <>
      <div className=" card CardCartao d-flex  border-3  border-black col-lg-5 col-md-8 col-sm-12 w-50 my-5 ">
        <div className="container py-5 w-50">
          <form>
            <div className="mb-3">
              <h1 className="text-center text">Editar Perfil</h1>
              <label className="form-label py-2 " htmlFor="frmNome">
                Nome
              </label>
              <label htmlFor="form-label"></label>
              <input
                className="form-control bg-transparent border-black"
                type="text"
                name="frmNome"
                id="frmNome"
              />
            </div>

            <div className="mb-3">
              <label className="form-label " htmlFor="frmEmail">
                Número de Telefone
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
                E-mail
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
                Data de Nascimento
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
                CPF
              </label>
              <input
                className="form-control bg-transparent border-black"
                type="email"
                name="frmEmail"
                id="frmEmail"
              />
            </div>
            <p>Gênero</p>

            <div className="mb-3 w-50 d-flex flex-row">
              <div className="d-flex flex-row rounded-4 gap-2">
                <label className="form-label text-dark " htmlFor="frmEmail">
                  Masculo
                </label>
                <div className="d-flex flex-row gap-3">
                  <input className="form-check-input" type="radio" />

                  <div className="mb-3 w-50 d-flex flex-row">
                    <div className="d-flex flex-row rounded-4 gap-2">
                      <label
                        className="form-label text-dark "
                        htmlFor="frmEmail"
                      >
                        Feminino
                      </label>
                      <div className="d-flex flex-row gap-3">
                        <input className="form-check-input" type="radio" />

                        <div className="mb-3 w-50 d-flex flex-row">
                          <div className="d-flex flex-row rounded-4 gap-2">
                            <label
                              className="form-label text-dark "
                              htmlFor="frmEmail"
                            >
                              Outros
                            </label>
                            <div className="d-flex flex-row gap-3">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary w-50 m-2 ">
                Salvar Alterações
              </button>
              <button className="btn btn-danger w-50 m-2 ">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Perfil;
