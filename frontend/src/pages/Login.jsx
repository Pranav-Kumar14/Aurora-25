import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast'
// import LoginBg from '../images/Bg1.png';
// import LoginIcon from '../images/log.png';
// import LoginText from '../images/LOGIN.png';

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
        <div
            style={{
                backgroundImage: `url("https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/Bg1_ouzd2n.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                overflowX: 'hidden',
            }}
            className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <div className="flex flex-row items-center justify-center space-x-4">
        <img
            src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/LOGIN_zpic7f.png"
            alt="Login Text"
            style={{ height: '50px', width: 'auto',paddingBottom: '15px' }}
        />
    </div>
</div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-lg">
                <div
                    className="py-6 px-6 shadow sm:rounded-lg sm:px-10"
                    style={{
                        backgroundColor: 'rgba(69, 92, 147, 0.7)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '10px',
                    }}
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-md font-medium text-white">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-md font-medium text-white">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="w-full sm:w-1/2 py-3 px-5 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#040D4C] hover:bg-[#072C5F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

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
                                    <button
                                        onClick={() => navigate('/forgot-password')}
                                        className="font-medium text-white hover:text-[#040D4C]"
                                    >
                                        Forgot Password?
                                    </button>
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
                                    Don't have an account?{' '}
                                    <button
                                        onClick={() => navigate('/register')}
                                        className="font-medium text-white hover:text-[#040D4C]"
                                    >
                                        Register
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
