import React, { useState, useEffect } from 'react';

function CardIngredientes({id}) {
    useEffect(() => {
        fetch(`http://localhost:5000/Ingredientes/${id}`).then(function(response) {
        return response.json();
        }).then(function(data) {
            if(data !== undefined && data !== null) {
                setIngrediente(data)
            }
        });
    }, [id])
    const [Ingrediente, setIngrediente] = useState({Nombre: '', UrlFoto:''})
    return (
        <div className="card carta tocable mb-5 ml-2 mr-2" >
             <img src={Ingrediente?.UrlFoto} className="card-img-top" alt={Ingrediente?.Nombre} />
            <div className="card-body">
                <h3 className="card-title">{Ingrediente?.Nombre}</h3>
            </div>
        </div>
    )
}

export default CardIngredientes
