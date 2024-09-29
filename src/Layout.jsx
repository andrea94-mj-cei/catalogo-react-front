//Este archivo sustituye al App.jsx, es nuestro archivo principal del documento

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import '@/css/index.css'
import '@/css/catalogo.css'
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




const Layout = () => {
    
    

    return ( 
        
        <div>
            {/* Header de nuestro documento */}
            <header >
            <Header/>
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