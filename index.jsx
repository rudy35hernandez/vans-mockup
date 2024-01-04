import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import About from "./pages/About"
import VanDetail from "./pages/VanDetail"
import Dashboard from "./pages/Host/Dashboard"

import Layout from "./components/Layout"

import "./server.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);