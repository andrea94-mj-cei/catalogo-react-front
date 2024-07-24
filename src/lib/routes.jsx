// En este archivo armamos nuestras rutas del documento

import { createBrowserRouter } from "react-router-dom";

//importamos las páginas:
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import Producto from "../pages/Producto";

//impoprtamos páginas especiales:
import Layout from "../Layout";
import ErrorPage from "../Error-page";


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
            path: 'catalogo', //Aquí no se pone la barra antes ya que la está cogiendo ya por defecto del path de arriba
            element: <Catalogo/>
        },
        {
            //con :productoId, vamos a leer un producto en concreto
            path: 'producto/:productoId',
            element: <Producto/>
        },
        {
            //El * busca cualquier cosa que no tenga asignada una ruta específica
            path: '*',
            element: <ErrorPage/>
        }
    ]
}]);

export default router;