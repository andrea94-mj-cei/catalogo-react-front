//Este archivo sustituye al App.jsx, es nuestro archivo principal del documento

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import './css/index.css'
import './css/catalogo.css'
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useParams } from "react-router-dom";



const Layout = () => {
    


    return ( 
        
        <div>
            {/* Header de nuestro documento */}
            <header className="Header">
                
                <Link to="/"><h1>BeatMastersTechno</h1></Link>
                <ul className="Botones">
                <li><NavLink to="/fechas" className="Boton">Fechas</NavLink></li>
                <li><NavLink to="/lugar" className="Boton">Ubicaciones</NavLink></li>
                <li><NavLink to="/precio" className="Boton">Precios</NavLink></li>
            </ul>


            </header>
            
            <main>
                <Outlet/>
            </main>

            


            {/* Footer de nuestro documento */}
        </div>
    
     );
}
 
export default Layout;