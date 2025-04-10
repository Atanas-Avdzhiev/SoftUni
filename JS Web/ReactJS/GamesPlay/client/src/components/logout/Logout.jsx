import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'

import { useLogout } from '../../hooks/useAuth'

export default function Logout() {
    const logout = useLogout();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        (async () => {
            await logout();
            setIsLoggedOut(true);
        })();
    }, []);

    if (isLoggedOut) {
        return <Navigate to="/" />;
    }

    return null;
}