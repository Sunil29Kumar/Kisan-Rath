import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000"

    const navigate = useNavigate()

    const register = async (userData) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(userData),
            });
            const data = await response.json();

            if (response.ok) {
                console.log("Registration successful:", data);
                navigate("/login");

            }
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }


    const login = async (credentials) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Login successful:", data);
                if (data.userData.role === "farmer") {
                    navigate("/farmer");
                    return
                }
                else if (data.userData.role === "truck") {
                    navigate("/truck");
                    return
                }
                navigate("/");
            }
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{
            register, login
        }}>
            {children}
        </AuthContext.Provider>
    )
}