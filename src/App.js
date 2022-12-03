import React from "react";
import "./App.scss";
import "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import SignupPage from "./components/sign-up/signup-page";
import Index from "./components/holdform";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup-page" element={<SignupPage />} />
          <Route path="/information" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
