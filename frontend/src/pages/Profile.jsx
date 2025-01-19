import React, { useEffect, useState } from "react";
import  {useAuth}  from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { workshops } from "../constants/workshops";
import { updateProfile } from "../services/auth";
import PaymentButton from "./Payment";
import prof from"../images/prof.webp";


export default function Profile() {
    const { user, setUser } = useAuth();
    const [registeredWorkshops, setRegisteredWorkshops] = useState([]);
    const navigate = useNavigate();
    const handlePaymentSuccess = (paymentData) =>{
        console.log("Payment Success:",paymentData);
    }

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user) return; // Avoid calling when user is null

            try {
                const response = await updateProfile(user.email);

                if (!response) {
                    throw new Error(`Failed to fetch user data: ${response.status}`);
                }

                const updatedUser = response.data.user;

                // Update user only if it has changed
                if (JSON.stringify(user) !== JSON.stringify(updatedUser)) {
                    setUser(updatedUser);
                }

                sessionStorage.removeItem("token");
                sessionStorage.setItem("token", response.data.token);

                // Map workshop IDs to their details
                const workshopsList = updatedUser.workshops
                    ? updatedUser.workshops.map((id) => {
                        const workshop = workshops.find((w) => w.id === id);
                        return workshop
                            ? `${workshop.title} - ${workshop.date} at ${workshop.time}`
                            : `Unknown Workshop (ID: ${id})`;
                    })
                    : [];
                setRegisteredWorkshops(workshopsList);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [user]); // Only depend on `user`


    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    if (!user) return null;
    return (
    
        <div className="min-h-screen bg  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
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
                        {user.workshopPaid && (
                            <div className="sm:col-span-2">
                                <dt className="text-sm font-medium text-gray-500">Registered Workshops</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {registeredWorkshops.length > 0 ? (
                                        <ul className="list-disc ml-5">
                                            {registeredWorkshops.map((details, index) => (
                                                <li key={index}>{details}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        "No workshops registered."
                                    )}
                                </dd>
                            </div>

                        )}
                        {!user.workshopPaid ? (
                            <button className="bg-[#519984] w-full px-6 py-2 rounded-full text-white font-heading font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_#7DC5EE] hover:bg-[#ADD6EA]">
                            <PaymentButton
                                orderAmount="225"
                                onPaymentSuccess={handlePaymentSuccess}
                                userDataNew={user}
                            />
    
                            </button> 
                        ) : (
                            <button className="bg-[#519984] px-6 py-2 rounded-full text-white font-heading font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_#7DC5EE] hover:bg-[#ADD6EA]">
                                You have Paid!

                            </button> 
                        )}
                    </dl>
                </div>
            </div>
        </div>
    );
}
