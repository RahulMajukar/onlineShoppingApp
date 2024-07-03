import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            setUser({ token }); // You might want to fetch user details with the token
        }
    }, []);

    const login = (userInfo) => {
        localStorage.setItem('userToken', userInfo.token);
        setUser(userInfo);
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
