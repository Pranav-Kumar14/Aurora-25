import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

export default function Profile() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header */}
                <div className="px-4 py-5 sm:px-6 bg-indigo-600">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <User className="h-8 w-8 text-white" />
                            <h3 className="ml-3 text-lg leading-6 font-medium text-white">Profile</h3>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:border-indigo-900 focus:shadow-outline-indigo active:bg-indigo-900 transition ease-in-out duration-150"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="px-4 py-5 sm:p-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                            <dd className="mt-1 text-sm text-gray-900">{user.fullName}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Username</dt>
                            <dd className="mt-1 text-sm text-gray-900">{user.username}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                            <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">College ID</dt>
                            <dd className="mt-1 text-sm text-gray-900">{user.collegeid}</dd>
                        </div>

                        {/* Conditionally Render Workshops if Paid */}
                        {user.workshopPaid && (
                            <div className="sm:col-span-2">
                                <dt className="text-sm font-medium text-gray-500">Registered Workshops</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {user.workshops && user.workshops.length > 0 ? (
                                        <ul className="list-disc ml-5">
                                            {user.workshops.map((workshop, index) => (
                                                <li key={index}>{workshop}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        "No workshops registered."
                                    )}
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>
            </div>
        </div>
    );
}
