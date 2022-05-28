import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);
AuthContext.displayName = "AuthContext";

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    return new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
