import { useEffect, useState, useContext } from "react";
import { ModoOscuroContext } from "../Layout"; //importandolo ya lo podemos utilizar 

const Home = () => {

    const tema = useContext(ModoOscuroContext);


    return ( 
        <>
        <h1 className="Home-h1">¿Quieres aprender a producir tu música de mano de los mejores DJ's del momento? {tema}</h1>
        <button onClick={()=> {
                setTema(tema=="dark"?"ligth":"dark");
            }}>Cambiar tema: {tema}</button>
        </>
    );
}
 
export default Home;