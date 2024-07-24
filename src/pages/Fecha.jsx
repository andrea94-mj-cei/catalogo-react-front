//importamos useparams para que lea todos los productos que tenemos dentro de producto
import { useParams } from "react-router-dom";



const Fecha = () => {

    const {fechaId} = useParams();

    return ( 
        <h1>Estoy viendo el producto: {fechaId}</h1>
     );
}
 
export default Fecha;