//Hooks
import {useUser} from '@/hooks/useUser';

const PrivateRoute = ({children}) => {

    const {user} = useUser();

    return user ? children
            :<>
            <h2>Ruta privada</h2>
             <p>No tienes permiso para ver esta ruta</p>
             <Login/>
            </>
        
     ;
}
 
export default PrivateRoute;