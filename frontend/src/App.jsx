
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
import Teamlogin from './components/teamlogin';
import TeamManagement from './components/teamlogin2';
import TeamManagementPage from './pages/HackDemo';
import CreateTeam from './components/Createteam';
import Developer from "./pages/Developer";
import Footer from "./components/Footer";
import WorkshopPage from './pages/WorkshopPage';
import Speaker from "./pages/Speaker";
import Carousel from "./components/Carousel";
import Ctf from "./pages/Ctf";
import ForgotPassword from "./pages/ForgotPassword";
import Workshop1 from "./pages/workpage/Workshop1";
import Workshop2 from "./pages/workpage/Workshop2";
import Workshop3 from "./pages/workpage/Workshop3";
import Workshop4 from "./pages/workpage/Workshop4";
import Workshop5 from "./pages/workpage/Workshop5";
import Workshop6 from "./pages/workpage/Workshop6";
import Workshop7 from "./pages/workpage/Workshop7";
import Workshop8 from "./pages/workpage/Workshop8";
import Workshop9 from "./pages/workpage/Workshop9";
import Workshop10 from "./pages/workpage/Workshop10";
import Workshop11 from "./pages/workpage/Workshop11";

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
            <Route path="/fetch" element={<Teamlogin />} />
            <Route path="/fetchteam" element={<TeamManagement />} />
            <Route path="/fetchnew" element={<TeamManagementPage />} />
            <Route path="/createteam" element={<CreateTeam />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="testing" element={<Carousel />} />
            <Route path="/ctf" element={<Ctf />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/Workshop1" element={<Workshop1 />} />
            <Route path="/Workshop2" element={<Workshop2 />} />
            <Route path="/Workshop3" element={<Workshop3 />} />
            <Route path="/Workshop4" element={<Workshop4 />} />
            <Route path="/Workshop5" element={<Workshop5 />} />
            <Route path="/Workshop6" element={<Workshop6 />} />
            <Route path="/Workshop7" element={<Workshop7 />} />
            <Route path="/Workshop8" element={<Workshop8 />} />
            <Route path="/Workshop9" element={<Workshop9 />} />
            <Route path="/Workshop10" element={<Workshop10 />} />
            <Route path="/Workshop11" element={<Workshop11 />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
