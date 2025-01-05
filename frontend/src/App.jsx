import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Hackathon from "./pages/hackathon";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hackathon />} />

      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default App;
