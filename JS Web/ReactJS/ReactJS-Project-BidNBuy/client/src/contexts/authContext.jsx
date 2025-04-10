import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const logout = () => {
        setAuthState(null);
    }

    const contextData = {
        savedUserId: authState?._id,
        userId: authState?._ownerId,
        email: authState?.email,
        phone: authState?.phone,
        accessToken: authState?.accessToken,
        createdOn: authState?._createdOn,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}