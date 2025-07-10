import React from "react";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singin from "./components/pages/Singin";
import Books from "./components/pages/Books";
import Addbook from "./components/pages/Addbook";
import Updatebook from "./components/pages/Updatebook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/singup" element={<Singin />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/Add" element={<Addbook />}></Route>
        <Route path="/update" element={<Updatebook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
