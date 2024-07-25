//Este archivo sustituye al App.jsx, es nuestro archivo principal del documento


import { Outlet } from "react-router-dom";
import './css/catalogo.css'

import { createContext, useState } from 'react' //importamos createcontext

export const ModoOscuroContext = createContext(); //declaramos createcontext


const Layout = () => {
    const [tema, setTema] = useState("ligth");
    const nombre = "Andrea";


    return ( 
        <ModoOscuroContext.Provider value={{tema, setTema, nombre}}>
        <div>
            {/* Header de nuestro documento */}
            <header>
                <h1 className="Header-h1">BeatMastersTechno</h1>

            </header>

            <main>
                <Outlet/>
            </main>

            <button onClick={()=> {
                setTema(tema=="dark"?"ligth":"dark");
            }}>Cambiar tema: {tema}</button>

            {/* Footer de nuestro documento */}
        </div>
        </ModoOscuroContext.Provider>
     );
}
 
export default Layout;