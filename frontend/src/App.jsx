import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import '@fortawesome/fontawesome-free/css/all.min.css';


import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Hackathon from './pages/hackathon';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Workpage from "./pages/workpage";
import Developer from "./pages/Developer";


function App() {
    return (
        <>

            <Router>
                <Navbar />
                <AuthProvider>
                    <Toaster position="top-right" />
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/hackathon-info" element={<Hackathon />} />
                        <Route path="/workshop" element={<Workpage />} />
                        <Route path="/developer" element={<Developer />} />
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
            <Footer />

        </>
    );
}

export default App;
