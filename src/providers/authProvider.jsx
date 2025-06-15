import React, { useEffect, useState } from 'react';
import AuthContext from "../contexts/authContext.js";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        loading: true
    });

    const fetchUser = () => {
        axios.get("http://localhost:8080/api/user/me", { withCredentials: true })
            .then((res) => {
                setState({
                    user: res.data,
                    loading: false,
                });
            })
            .catch(() => {
                setState({
                    user: null,
                    loading: false,
                });
            });
    };

    const login = (userData) => {
        setState({
            user: userData,
            loading: false,
        });
        fetchUser();
    };

    const logout = () => {
        axios.get("http://localhost:8080/api/user/logout", { withCredentials: true })
            .finally(() => {
                setState({
                    user: null,
                    loading: false,
                });
                fetchUser();
            });
    };

    useEffect(fetchUser, []);

    return (
        <AuthContext.Provider value={{ login, logout, ...state, isLoggedIn: !!state.user }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;
