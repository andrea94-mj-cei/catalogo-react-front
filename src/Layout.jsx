//Este archivo sustituye al App.jsx, es nuestro archivo principal del documento

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import '@/css/index.css'
import '@/css/catalogo.css'
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useParams } from "react-router-dom";
import Footer from "./components/Footer";



const Layout = () => {
    


    return ( 
        
        <div>
            {/* Header de nuestro documento */}
            <header className="Header">
                
                <Link to="/"><h1 className="Header-h1">BeatMastersTechno</h1></Link>
                <nav>
            <ul className="Header-ul">
                <li><NavLink to="/" className="Header-li"><b>Inicio</b></NavLink></li>
                <li><NavLink to="/acceso" className="Header-li"><b>Acceso</b></NavLink></li>
                <li><NavLink to="/registro" className="Header-li"><b>Registro</b></NavLink></li>
                <li><NavLink to="/carrito" className="Header-li"><b>Cesta</b></NavLink></li>
            </ul>
                </nav>

            </header>
            
            <main>
                <Outlet/>
            </main>

            


            <footer>
                <Footer/>
            </footer>
        </div>
    
     );
}
 
export default Layout;