import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';
import toast from 'react-hot-toast';
// import RegisterBg from '../images/Bg2.jpg';
// import SignInText from '../images/SIGN UP.png';

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const branches = ["Aeronautical", "Automobile", "Biomed", "BioTech", "Chemical", "Civil", "CCE", "CSE", "AIML", "Fintech", "CPS", "DSE", "EEE","ECE", "ENI", "VLSI", "Industrial", "IT", "MNC", "Mech", "MechX"]


export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        collegeid: '',
        year: '',
        branch: '',
        interest: '',
        phone: '',
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
        backgroundImage: `url("https://res.cloudinary.com/db1ziohil/image/upload/v1737121208/Bg2_kokjkl.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: "1rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
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
                        <label htmlFor="year" className="block text-md font-medium text-white">
                            Year
                        </label>
                        <select
                            id="year"
                            name="year"
                            required
                            className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                            value={formData.year}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="branch" className="block text-md font-medium text-white">
                            Branch
                        </label>
                        <select
                            id="branch"
                            name="branch"
                            required
                            className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                            value={formData.branch}
                            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        >
                            {branches.map((branch) => (
                                <option key={branch} value={branch}>
                                    {branch}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-md font-medium text-white">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            required
                            className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="interest" className="block text-md font-medium text-white">
                            Interest
                        </label>
                        <input
                            id="interest"
                            name="interest"
                            type="text"
                            required
                            className="mt-2 block w-full rounded-md border-transparent bg-white bg-opacity-20 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md py-2 px-4"
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
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
                            Register
                        </button>
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
