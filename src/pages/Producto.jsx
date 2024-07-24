//importamos useparams para que lea todos los productos que tenemos dentro de producto
import { useParams } from "react-router-dom";



const Producto = () => {

    const {productoId} = useParams();

    return ( 
        <h1>Estoy viendo el producto: {productoId}</h1>
     );
}
 
export default Producto;