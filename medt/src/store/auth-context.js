import React, {useState} from "react";


const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState({
        accessToken: null,
        email: '',
        password: ''
    })
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;