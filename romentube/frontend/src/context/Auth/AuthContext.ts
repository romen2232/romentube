import { createContext } from "react";

interface AuthContext {
    user: any;
    setUser: (user: any) => void;
    logout: () => void;
}
/**
 * AuthContext is a React Context that will be used to share the user's
 * authentication state across the application.
 */
export const AuthContext = createContext(null);