import React from "react";

const Perfil = () => {
  return (
    <div className="container py-5 w-50">
      <div className="min-h-screen flex items-center justify-center bg-[#2f4d6c]">
        <h1 className="">Editar Perfil</h1>
        <div className="container py-5 w-50">
          <form>
            
            <div className="mb-">
              <label className="form-label" htmlFor="frmNome">
                Nome
              </label>
              <input
                className="form-control"
                type="text"
                name="frmNome"
                id="frmNome"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="frmNome">
                Data de Nascimento
              </label>
              <input
                className="form-control"
                type="DataNascimento"
                name="frmDataNascimento"
                id="frmDataNascimento"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="frmEmail">
                Número de telefone
              </label>
              <input
                className="form-control"
                type="telefone"
                name="frmtelefone"
                id="frmtelefone"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="frmEmail">
                CPF
              </label>
              <input
                className="form-control"
                type="CPF"
                name="frmCPF"
                id="frmCPF"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="frmEmail">
                E-mail
              </label>
              <input
                className="form-control"
                type="email"
                name="frmEmail"
                id="frmEmail"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className=" btn btn-primary w-25">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
