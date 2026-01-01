
import AuthProvider from "./AuthContext";
import GlobalProvider from "./GlobalContext";


export function AppProvider({ children }) {


    return (
        <GlobalProvider >
            <AuthProvider>
                {children}
            </AuthProvider>
        </GlobalProvider >
    )
}