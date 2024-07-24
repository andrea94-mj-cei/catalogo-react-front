// En este archivo armamos nuestras rutas del documento

import { createBrowserRouter } from "react-router-dom";

//importamos las páginas:
import Home from "../pages/Home";
import CatalogoDj from "../pages/CatalogoDj";
import Fecha from "../pages/Fecha";
import Lugar from "../pages/Lugar";
import Precio from "../pages/Precio";

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
            element: <CatalogoDj/>
        },
        {
            //con :productoId, vamos a leer un producto en concreto
            path: 'producto/:productoId',
            element: <Fecha/>
        },
        {
            path: 'lugar',
            element: <Lugar/>
        },
        {
            path: 'precio',
            element: <Precio/>
        },
        {
            //El * busca cualquier cosa que no tenga asignada una ruta específica
            path: '*',
            element: <ErrorPage/>
        }
    ]
}]);

export default router;