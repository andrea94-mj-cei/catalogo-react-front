import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

const Header = () =>{

    const {user, logout, login, register} = useUser();

    return(
        <>
            <header className="Header">
                
                <Link to="/"><h1 className="Header-h1">BeatMastersTechno</h1></Link>
                <nav>
            <ul className="Header-ul">
                <li><NavLink to="/" className="Header-li"><b>Inicio</b></NavLink></li>
                <li><NavLink to="/administrador" className="Header-li"><b>Admin</b></NavLink></li>

        {user ? (
            <>
            <li><NavLink to="/carrito" className="Header-li"><b>Cesta</b></NavLink></li>
            <div className="Usuario">
            <li>
                <img className="Img-usuario" src={user.image} alt={user.username} />
            </li>
            <h3>{user.name}</h3>
            </div>
            <li><NavLink onClick={logout} className="Header-li"><b>Salir</b></NavLink></li>
            </>
        ) : (
            <>
                <li><NavLink to="/acceso" className="Header-li"><b>Acceso</b></NavLink></li>
                <li><NavLink to="/registro" className="Header-li"><b>Registro</b></NavLink></li>
            </>
        )}

            </ul>
                </nav>
                </header>
        </>        
    )
}

export default Header