//Hooks
import {useUser} from '@/hooks/useUser';
import Login from '@/pages/Login';

const PrivateRoute = ({children}) => {

    const {user} = useUser();

    return user ? children
            :<>
            <h2>Ruta privada</h2>
             <p>Accede a tu cuenta para visualizar el contenido</p>
             <Login/>
            </>
        
     ;
}
 
export default PrivateRoute;