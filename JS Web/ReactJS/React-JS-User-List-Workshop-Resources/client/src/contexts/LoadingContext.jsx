import { createContext, useContext, useState } from "react";

// Create the context
const LoadingContext = createContext();

// Custom hook for easier usage
export const useLoading = () => useContext(LoadingContext);

// Provider component
export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading, error, setError }}>
            {children}
        </LoadingContext.Provider>
    );
};