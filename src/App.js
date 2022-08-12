import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Users from "./Users";
import { Animation } from "./Animation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/users" element={<Users />} />
        <Route path="/welcome" element={<Animation />} />
      </Routes>
    </BrowserRouter>
  );
}
