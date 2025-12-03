import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(() => {
        const saved = sessionStorage.getItem('user');
        if(saved) {
            return JSON.parse(saved);
        }

        return null;
    });

    const login = (name, password) => {
        if(name === "admin" && password === "1234") {
            const session = { name };
            setUser(session);
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }

        return false;
    }

    const logout = () => {
        sessionStorage.removeItem("session");
        setUser(null);
        console.log("Cerrando sesion");
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}