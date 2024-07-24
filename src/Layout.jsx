//Este archivo sustituye al App.jsx, es nuestro archivo principal del documento


import { Outlet } from "react-router-dom";
import './css/catalogo.css';



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