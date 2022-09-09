import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/register";
import LandingPage from "./pages/landingPage";
import ComfirmationPage from "./pages/comfirmationPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/confirm/:phoneNumber" element={<ComfirmationPage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
