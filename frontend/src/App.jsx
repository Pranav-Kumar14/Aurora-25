
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";


import "@fortawesome/fontawesome-free/css/all.min.css";

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Hackathon from './pages/Hackathonmain';
import Home from './pages/Home';
import Navbar from './components/navbar';
import TeamManagementPage from './pages/HackDemo';
import Developer from "./pages/Developer";
import Footer from "./components/Footer";
import WorkshopPage from './pages/WorkshopPage';
import Speaker from "./pages/Speaker";
import Ctf from "./pages/Ctf";
import ForgotPassword from "./pages/ForgotPassword";
import WorkshopPages from "./pages/workpage/WorkshopPages";

function TermsAndConditions() {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", width: "100vw", overflow: "hidden" }}>
      <iframe
        src="/website_tnc_877271.pdf" // Adjust the path if needed
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

function ContactUs() {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", width: "100vw", overflow: "hidden" }}>
      <iframe
        src="/website_contactUs_877271.pdf" // Adjust the path if needed
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
      <Router>
        <Navbar />
        <AuthProvider>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/workshop" element={<WorkshopPage />} />
         <Route path="/workshop/:id" element={<WorkshopPages />} />
            <Route path="/team" element={<TeamManagementPage />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/ctf" element={<Ctf />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/workshop" element={<WorkshopPage />} />
         <Route path="/workshop/:id" element={<WorkshopPages />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </AuthProvider>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
