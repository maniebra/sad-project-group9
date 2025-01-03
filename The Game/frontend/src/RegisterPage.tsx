import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import RegisterPage from "./components/Register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RegisterPage />
  </StrictMode>
);
