import React from 'react'

function Card({Pizzi}) {
    const borrar = async()=>{
        try{
            let res = await fetch( `http://localhost:5000/${Pizzi._id}`, {
                method: 'DELETE'
            })
            if(res.status === 201) window.location.reload(false);
            else alert('Error Borrando Pizza')
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="card carta tocable mb-5 ml-2 mr-2">
             <img src={Pizzi.UrlFoto} className="card-img-top" alt={Pizzi.Nombre} />
            <div className="card-body">
                  <h5 className="card-title">Nombre: {Pizzi.Nombre}</h5>
                 <p className="card-text">Precio: ${Pizzi.Precio}</p>
                 <p className="card-text">Tamaño: {Pizzi.Tamaño}</p>
                 <a href={`http://localhost:3000/${Pizzi._id}` } className="btn btn-primary tocable w-100">Ver Pizza</a>
                 <a href={`http://localhost:3000/EditarPizza/${Pizzi._id}` } className="btn btn-warning tocable w-100">Editar Pizza</a>
                 <button onClick={borrar} className="btn btn-danger tocable w-100">Eliminar Pizza</button>
            </div>
        </div>
    )
}

export default Card
