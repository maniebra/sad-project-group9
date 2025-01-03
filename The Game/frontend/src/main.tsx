import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.tsx";

import LoginPage from "./components/Login.tsx";
import RegisterPage from "./components/Register.tsx";
import Game from "./components/Game.tsx";
import Leaderboard from "./components/Leaderboard.tsx";
import ForgetPass from "./components/ForgetPass.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-pass" element={<ForgetPass />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
