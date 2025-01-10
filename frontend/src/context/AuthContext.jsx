import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getProfile } from '../services/auth'; // Uncomment if needed

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
            // Example of fetching profile data
            // getProfile()
            //     .then((response) => {
            //         setUser(response.user);
            //     })
            //     .catch((error) => {
            //         console.error('Error fetching profile:', error);
            //         localStorage.removeItem('token');
            //     })
            //     .finally(() => {
            //         setLoading(false);
            //     });
        } else {
            setLoading(false); // No token, loading ends
        }
    }, []);

    useEffect(() => {
        if (!user) {
            localStorage.removeItem('token'); // Clear token if user logs out
        }
    }, [user]);

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
