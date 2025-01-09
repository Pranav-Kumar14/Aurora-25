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
        const token = localStorage.getItem('token');
        if (token) {
            getProfile()
                .then((response) => {
                    setUser(response.user);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
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