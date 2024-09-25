import { createContext, useContext, useState} from "react";

const Login = () =>{
    const [formData, setFormData] = useState({
        username: "",
        password:"",
        //info que debería venir dle backend
        name: "Andrea",
        image:"https://picsum.photos/200"
    });

    const handleChange = (e) =>{

    };

    const handleSubmit = (e) =>{

    };


    return(
        <>
        <form onSubmit={handleSubmit} >
        <h2>Login</h2>
        <input onChange={handleChange} type="email" name="username" placeholder="Usuario" />
        <input onChange={handleChange} type="password" name="password" placeholder="Contraseña" />
        <input type="submit" value="Login" />
        </form>
        </>
    );
}

export default Login
