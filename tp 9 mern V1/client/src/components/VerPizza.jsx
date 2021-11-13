import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import CardIngredientes from './CardIngredientes'; 
function VerPizza() {
    let { id } = useParams();
    const [isLoading, setisLoading] = useState(true)
    const [Pizza, setPizza] = useState({Nombre:'', Precio:undefined, UrlFoto:'', Tamaño:'', ListaIngredientes:[]})
    const history = useHistory();
    const borrar = async()=>{
        try{
            let res = await fetch( `http://localhost:5000/${Pizza._id}`, {
                method: 'DELETE'
            })
            if(res.status === 201) history.push('/');
            else alert('Error Borrando Pizza')
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setisLoading(true)
        fetch(`http://localhost:5000/${id}`).then(function(response) {
        return response.json();
        }).then(function(data) {
            if(data !== undefined && data !== null) {
                setPizza(data)
                setisLoading(false)
            }
        });
    }, [id])
    return (
        <div className="paAbajo">
            {
                isLoading ? (<div className="spinner-border text-primary"></div>) :
                (<div className="media pt-5 row d-flex tocable mb-5" >
                    <img className="align-self-start mr-3 col-md-2 col-11 ml-3" src={Pizza.UrlFoto} alt={Pizza.Nombre}/>
                    <div className="media-body col-md-10 col-11 ml-3 fondo">
                      <h1 className="text-white text-center" >Nombre: {Pizza.Nombre}</h1>
                      <h3 className="text-white text-center">Tamaño: {Pizza.Tamaño}</h3>
                      <h3 className="text-white text-center">Precio: ${Pizza.Precio}</h3>
                      <div className="d-flex justify-content-center">
                          <a  href={`http://localhost:3000/EditarPizza/${Pizza._id}` } className="btn btn-warning mr-5">Editar Pizza</a>
                          <button onClick={borrar} className="btn btn-danger ml-5">Eliminar Pizza</button>
                      </div>
                    </div>
                </div>)
            }
            <h1 className="text-white text-center">Ingredientes:</h1>
            <div className="d-flex justify-content-around flex-wrap">
                {
                    isLoading ? (<div className="spinner-border text-primary text-center"></div>) : 
                    (
                        Pizza?.ListaIngredientes?.map((index) => (
                            <CardIngredientes id={index} key={index} />
                        ))
                    )  
                }
                {
                    Pizza?.ListaIngredientes?.length === 0 ? (<h3 className="text-white text-center">No tiene</h3>) : (<></>)
                }
            </div>
        </div>
    )
}

export default VerPizza
