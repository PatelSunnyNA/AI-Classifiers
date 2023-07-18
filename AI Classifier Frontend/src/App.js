import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageClassifier from "./pages/image classifier/ImageClassifier";
import NumberClassifier from "./pages/number classifier/NumberClassifier";
import Navbar from "./pages/global/Navbar";
import Home from "./pages/home/Home";
import Footer from "./pages/global/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/image" element={<ImageClassifier />} />
        <Route exact path="/number" element={<NumberClassifier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
