import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext(null);

// This hook can be used to access the user info
export function useAuth() {
    return React.useContext(AuthContext);
}

// This hook will protect the route and redirect to login if the user is not logged in
function useProtectedRoute(user) {
    const segments = useSegments();

    React.useEffect(() => {
        const inAuthGroup = segments[0] === "(auth)";

        // If the user is not signed in and the initial segment is not anything in the auth group, redirect to sign in
        if (!user && !inAuthGroup) {
            useRouter().replace("/sign-in")
            // If the user is signed in and the initial segment is anything in the auth group, redirect to home
        } else if (user && inAuthGroup) {
            useRouter().replace("/")
        }
    }, [user, segments])
}

export function Provider(props) {
    const [user, setAuth] = React.useState(null);

    useProtectedRoute(user);

    return (
        <AuthContext.Provider value={{
            signIn: () => setAuth({}),
            signOut: () => setAuth(null),
            user
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}