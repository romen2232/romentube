import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Index } from "../../pages/Index/Index";
import { Login } from "../../pages/Login/Login";
import { Error404 } from "../../pages/Error/Error404";
import { Register } from "../../pages/Register/Register";
import { Header } from "../../components/ui/Header";

/**
 * AppRouter component is the main router of the application
 */
export function AppRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index/> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}