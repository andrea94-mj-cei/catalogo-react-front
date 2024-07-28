import { useEffect, useState, useContext } from "react";
// import { ModoOscuroContext } from "../Layout"; //importandolo ya lo podemos utilizar 
import data from '/backend/datos.json'; 

const Home = () => {
    // const [catalogo, setCatalogo] = useState();
    // const [filter, setFilter] = useState ("");
    // const [info, setInfo] = useState({
    //     count: 0,
    //     next: null,
    //     prev: null,
    //     pages: 0
    // })
    const [datos, setDatos] = useState([]);

    useEffect(() => {
      fetch('/backend/datos.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setDatos(data))
        .catch(error => console.error('Error al cargar el JSON:', error));
    }, []);
    


    return ( 
        <>
        <p className="Home-p">¿Quieres aprender a producir tu propia música de mano de los mejores DJ's del momento?</p>
        <div>
      <h1>Datos del JSON</h1>
      <ul>
        {datos.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
        
        </>
    );
}
 
export default Home;