// En este archivo armamos nuestras rutas del documento

import { createBrowserRouter } from "react-router-dom";

//importamos las páginas:
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Registro from "@/pages/Registro";
import Cesta from "@/pages/Cesta";
import Admin from "@/pages/Admin"


//impoprtamos páginas especiales:
import Layout from "@/Layout";
import ErrorPage from "@/Error-page";



//Creamos una funcion 'router', que recibe un array y varios objetos
const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    // errorElement: <ErrorPage/>,

    //Incorporamos los enlaces hijos
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'acceso',
            element: <Login/>
        },
        {
            path: 'registro',
            element: <Registro/>
        },
        {
            path: 'carrito',
            element: <Cesta/>
        },
        {
            path: 'administrador',
            element: <Admin/>
        },
        {
            //El * busca cualquier cosa que no tenga asignada una ruta específica
            path: '*',
            element: <ErrorPage/>
        }
    ]
}]);

export default router;