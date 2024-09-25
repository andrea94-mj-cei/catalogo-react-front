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

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type == "checkbox" ? checked : value
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        register(formData);
        navigate("/")
        console.log(formData);
    };
    return ( 
        <>
        <form className='Form-registro' onSubmit={handleSubmit}>
        <h1>Registro</h1>
        

        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder='Escribe tu nombre' />
        <input onChange={handleChange} value={formData.username} type="email" name="username" placeholder="Escribe tu email" />
        <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Escribe tu contraseña" />
        
        <label htmlFor='tyc'><input type='checkbox' onChange={handleChange} name="tyc" checked={formData.tyc}/>Terminos y condiciones</label>

        {formData.tyc ? <button >Aceptar</button>
                      : <button disabled >Aceptar</button>  }
        

        </form>
        </>
     );
}
 
export default Registro;