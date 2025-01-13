import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/auth';

const AuthContext = createContext({
    user: null,
    setUser: () => { },
    isAuthenticated: false,
    loading: true,
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (token) {
            getProfile(token)
                .then((response) => {
                    // Assuming response contains user details
                    if (response && response.data.data) {
                        setUser(response.data.data);
                    } else {
                        console.error('Invalid profile response:', response);
                        sessionStorage.removeItem('token');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching profile:', error);
                    sessionStorage.removeItem('token');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false); // No token, loading ends
            console.log('User is logged out.');
            sessionStorage.removeItem('token');
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isAuthenticated: !!user,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
