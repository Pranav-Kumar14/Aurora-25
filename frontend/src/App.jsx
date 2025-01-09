import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Hackathon from "./pages/hackathoncomponents";
import Navbar from "./components/navbar";
import Home from "./pages/HackathonHome";
import Workpage from "./pages/workpage"

const App = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
    
      <Route path="/" element={<Home/> } />
      <Route path="/hackathon" element={<Hackathon />} />
      <Route path="/workpage" element={<Workpage/>}/>      

      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </>
  );
};

export default App;
