import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children, value}) {
  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

//evita ter que usar o contexto toda vez que for chamá-lo
export function useAuthValue() {
  return useContext(AuthContext);
}