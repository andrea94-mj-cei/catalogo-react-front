//Este archivo sustituye al App.jsx, es nuestro archivo principal del documento

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import './css/index.css'
import './css/catalogo.css'
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useParams } from "react-router-dom";

// import { createContext, useState } from 'react' //importamos createcontext

// import CatalogoDj from './pages/CatalogoDj';
// import Fecha from './pages/Fecha';
// import Lugar from './pages/Lugar';
// import Precio from './pages/Precio';


const Layout = () => {
    


    return ( 

        <div>
            {/* Header de nuestro documento */}
            <header>
                <h1>BeatMastersTechno</h1>

            </header>
            
            <main>
                <Outlet/>
            </main>

            

            {/* Footer de nuestro documento */}
        </div>
        
     );
}
 
export default Layout;