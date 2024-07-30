import { useEffect, useState, useContext } from "react";


const Home = () => {
  const [catalogo, setCatalogo] = useState([]);
  const [filter, setFilter] = useState("");
  const [errorData, setErrorData] = useState("");
  // const [info, setInfo] = useState({
  //   count: 0,
  //   next: null,
  //   prev: null,
  //   pages: 0
  // });

  useEffect(() => {
    getCatalogo('/datos.json');
  }, []); // <--- Array de dependencias vacío

  const getCatalogo = async (url) => {
    const respuesta = await fetch(url);

    const objeto = await respuesta.json();

    if(objeto.error){
      setErrorData("No se han encontrado resultados");
      setCatalogo([]);
      // setInfo({});
      return;
    }else{
      setErrorData("");
      setCatalogo(objeto.results);
      // setInfo(objeto.info);
    }
    setCatalogo(objeto.results);
    // setInfo(objeto.info);
  };
    


    return ( 
        <>
        
        <p className="Home-p">¿Quieres aprender a producir tu propia música de mano de los mejores DJ's del momento?</p>
        
        <section className="Container">

        {
            catalogo.map((catalogo) =>(
                <ArtistaCard key={catalogo.id} {...catalogo}/>
            ))
        }
        </section>
        
        </>
    );

}
 const ArtistaCard = ({name, img}) =>{ 
    const isActive = (name == "Claptone") ? `Tarjeta isActive`: "Tarjeta"
    return(
        <div className= {isActive} >
            <img className="Tarjeta-img" src={img} alt={name} />
            <h2 className="Tarjeta-h2">{name}</h2>
        </div>
    )
}

export default Home;