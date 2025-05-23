import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import { formatarMoeda } from "./utils/formatters.js";
import Cartoes from "./pages/Cartoes.jsx";
import Detalhes from "./pages/Detalhes.jsx";

// Contexto global acessível a todas as rotas
export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cartoes" element={<Cartoes />} />
          <Route path="/detalhes" element={<Detalhes />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>
);
