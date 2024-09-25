import { createContext, useContext, useState, useEffect} from "react";

//Crear un contexto de Usuario

const UserContext = createContext();

//Crear un provider y exportarlo para usarlo en main.jsx

export function UserProvider({children}){
    const [user, setUser] = useState(null);

    //ver si ya estoy logueado
    useEffect(()=>{
        const storedUser=localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[]);

    //login
    const login =(userData)=>{
        console.log('Estoy en login');
        //fetch para enviarle al backend!

        //el backend me devuelve mi USUARIO completo
        //foto, nombre, email (NO CONTRASEÑA)
        const responseData = userData;
        localStorage.setItem("user", JSON.stringify(responseData));

        //con setUser guardo mis datos de usuario
        setUser(userData);
    }
    //register
    const register =(userData)=>{
        //fetch para enviarle al backend!
        setUser(userData);
    }
    //logout
    const logout = ()=>{
        console.log('Cerrar sesión');
         localStorage.removeItem("user");
         setUser(null);
    }
    return(
        <UserContext.Provider value={{user, login, logout, register}}>
            {children}
        </UserContext.Provider>
    )
}

//Crear un Custom Hook para usar nuestro contexto de Usuario
//Se exporta para poder usarlo desde cualquier componente

export function useUser(){
    return useContext(UserContext);
}