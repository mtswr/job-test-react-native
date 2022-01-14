import React, { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                login: async (email, password) => {
                    try {
                        const response = await api.post('/login', {
                            email,
                            password
                        });
                        const { token } = response.data;
                        setUser(token);
                        setIsLoggedIn(true);
                    } catch (error) {
                        console.log(error);
                    }
                },
                register: async (email, password) => {
                    try{
                        const response = await api.post('/register', {
                            email,
                            password,
                        });
                        const { token, id } = response.data;
                        setUser(token);
                    } catch (error) {
                        console.log(error);
                    }
                },
                logout: () => {
                    setUser(null);
                    setIsLoggedIn(false);
                },

            }}
        >
            { children }
        </AuthContext.Provider >
    );
}
