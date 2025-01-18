import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';
import toast from 'react-hot-toast';
import RegisterBg from '../images/Bg2.jpg';
import SignInText from '../images/SIGN UP.png';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        collegeid: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            toast.success('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${RegisterBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
            className="flex flex-col justify-center pb-12 sm:px-6 lg:px-8"
        >

            <div className="flex flex-row items-center justify-center space-x-4">
                <img
                    src={SignInText}
                    alt="Login Text"
                    style={{ height: '50px', width: 'auto', paddingBottom: '15px' }}
                />
            </div>



            <div className="sm:mx-auto sm:w-full sm:max-w-4xl">
                <div
                    className="py-8 px-4 shadow sm:rounded-lg sm:px-10"
                    style={{
                        backgroundColor: 'rgba(69, 92, 147, 0.7)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '10px',
                    }}
                >
                    <form className="space-y-6 flex flex-row justify-between" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-4 w-full sm:w-5/12">
                            <div>
                                <label htmlFor="fullName" className="block text-md font-medium text-white">
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="username" className="block text-md font-medium text-white">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                            </div>

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
                        </div>

                        <div className="flex flex-col space-y-4 w-full sm:w-5/12">
                            <div>
                                <label htmlFor="collegeid" className="block text-md font-medium text-white">
                                    College ID
                                </label>
                                <input
                                    id="collegeid"
                                    name="collegeid"
                                    type="text"
                                    required
                                    className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                                    value={formData.collegeid}
                                    onChange={(e) => setFormData({ ...formData, collegeid: e.target.value })}
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
                                <div className="mt-6 flex justify-center">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-1/2 py-3 px-5 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#040D4C] hover:bg-[#072C5F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                                    >
                                        Register
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>





                    <div className="mt-6 text-center">
                        <span
                            className="px-3 text-white"
                            style={{
                                backgroundColor: 'rgba(69, 92, 147, 0.7)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '8px',
                            }}
                        >
                            Already have an account?{' '}
                            <button
                                onClick={() => navigate('/login')}
                                className="font-medium text-white hover:text-[#040D4C]"
                            >
                                Login
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
