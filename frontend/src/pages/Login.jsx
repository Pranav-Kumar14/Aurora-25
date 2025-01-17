import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { login } from '../services/auth';
import { useAuth } from '../context/AuthContext';
<<<<<<< Updated upstream
import toast from 'react-hot-toast';
=======
import toast from 'react-hot-toast'
import LoginBg from '../images/Bg1.png';
import LoginIcon from '../images/log.png';
import LoginText from '../images/LOGIN.png';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            localStorage.setItem('token', response.token);
            setUser(response.user);
            toast.success('Login successful!');
            navigate('/hackathon');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                <div className="flex justify-center">
                    <LogIn className="h-12 w-12 text-indigo-600" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
=======
=======
>>>>>>> Stashed changes
                <div className="flex flex-row items-center justify-center space-x-4">
                    <img
                        src={LoginText}
                        alt="Login Text"
                        style={{ height: '50px', width: 'auto', paddingBottom: '15px' }}
                    />
                </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
=======
                        <div className="mt-6 flex justify-center">
                            <button
                                type="submit"
                                className="w-full sm:w-1/2 py-3 px-5 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#040D4C] hover:bg-[#072C5F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

=======
                        <div className="mt-6 flex justify-center">
                            <button
                                type="submit"
                                className="w-full sm:w-1/2 py-3 px-5 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#040D4C] hover:bg-[#072C5F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

>>>>>>> Stashed changes
                            >
                                Sign In
                            </button>
                        </div>

                        <div className="flex flex-col items-center space-y-4 mt-4">


                            <div className="relative">
                                <span
                                    className="px-3 text-white"
                                    style={{
                                        backgroundColor: 'rgba(69, 92, 147, 0.7)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '8px',
                                    }}
                                >
                                </span>
                            </div>
                            <div className="relative">
                                <span
                                    className="px-3 text-white"
                                    style={{
                                        backgroundColor: 'rgba(69, 92, 147, 0.7)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '8px',
                                    }}
                                >
>>>>>>> Stashed changes
                                    Don't have an account?{' '}
                                    <button
                                        onClick={() => navigate('/register')}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Register
                                    </button>
                                </span>
                                <span><Link to="/forgotpassword" className="text-blue-500">Forgot Password...?</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}