import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';

const Registro = () => {
    const [formData, setFormData]= useState({
        username: "",
        password:"",
        //info que debería venir dle backend
        name: "",
        tyc: false, //terminos y condiciones
        image:"https://picsum.photos/200"
    });

    const {register} = useUser();

    
    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type == "checkbox" ? checked : value
        });
    };
    
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        register(formData);
        navigate("/") //cuando terminas el registro, te lleva directamente a la página de admin
        console.log(formData);
    };
    return ( 
        <>
        <form className='Form-registro' onSubmit={handleSubmit}>
        <h2>Regístrate</h2>
        

        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder='Escribe tu nombre' />
        <input onChange={handleChange} value={formData.username} type="email" name="username" placeholder="Escribe tu email" />
        <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Escribe tu contraseña" />
        
        <label htmlFor='tyc'><input type='checkbox' onChange={handleChange} name="tyc" checked={formData.tyc}/>Acepto los terminos y condiciones</label>

        {formData.tyc ? <button >Registro</button>
                      : <button disabled >Acepte los términos y condiciones</button>  }
        

        </form>
        </>
     );
}
 
export default Registro;