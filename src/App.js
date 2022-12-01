import React from "react";
import "./App.scss";
import "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import SignupPage from "./components/sign-up/signup-page";
import DataList from "./components/data-list/dataList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup-page" element={<SignupPage />} />
          <Route path="/information" element={<DataList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
