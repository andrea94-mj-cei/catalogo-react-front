const ArtistaCard = ({name, img, origin, date, price}) =>{ 
    const isActive = (name == "Claptone") ? `Tarjeta isActive`: "Tarjeta"
    return(
        <div className=  {isActive}  >
            <img className="Tarjeta-img" src={img} alt={name} />
            <h2 className="Tarjeta-h2">{name}</h2>
            <p className="Tarjeta-p">Ciudad: {origin}</p>
            <p className="Tarjeta-p">Fecha disponible: {date}</p>
            <p className="Tarjeta-p">Precio: <b>{price} €</b></p>
        </div>
    )
}

export default ArtistaCard