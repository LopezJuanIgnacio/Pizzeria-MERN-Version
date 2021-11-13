import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useHistory, useParams } from 'react-router-dom';
import Checkbox from './Checkbox';
function Form({isPizza}) {
    let { id } = useParams();
    const [Pizza, setPizza] = useState(undefined);
    const [isLoading, setisLoading] = useState(true)
    const [Ingredientes, setIngredientes] = useState([])
    const [PizzaNueva, setPizzaNueva] = useState({Nombre:'', Precio:undefined, UrlFoto:'', Tamaño:'', ListaIngredientes:[]})
    const [Ingrediente, setIngrediente] = useState({Nombre:'', UrlFoto:''})
    const history = useHistory();
    useEffect(() => {
        setisLoading(true)
        if (id !==  undefined) {
            fetch(`http://localhost:5000/${id}`).then(function(response) {
            return response.json();
            }).then(function(data) {
                if(data !== undefined && data !== null) {
                    setPizza(data)
                    setPizzaNueva(data)
                }
            });
        }
        fetch(`http://localhost:5000/Ingredientes`).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(data !== undefined && data !== null) setIngredientes(data)
        });
        setisLoading(false)
    }, [id])
    if (isPizza) {
        const handleChange = (e)=>{
            setPizzaNueva({...PizzaNueva, [e.target.name]: e.target.value})
        }
        const handleIngredientes = (e)=>{
            let lista = PizzaNueva.ListaIngredientes
            if (!e.target.checked) lista = lista.filter(i =>  i !== e.target.value) 
            else lista.push(e.target.value)
            setPizzaNueva({...PizzaNueva, ListaIngredientes: lista})
        }
        const handleSubmit = async (e)=>{
            e.preventDefault()
            try{
                if(Pizza === undefined){
                   let res = await fetch('http://localhost:5000', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(PizzaNueva)
                   })
                   if(res.status === 201) history.push('/');
                   else alert('Error Creando Pizza')
                }else{
                   let res = await fetch( `http://localhost:5000/${Pizza?._id}`, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(PizzaNueva)
                   })
                   if(res.status === 201) history.push('/');
                   else alert('Error Editando Pizza')
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        return (
            <div className="d-flex justify-content-center agrandador paAbajo">
                <div className="form_wrapper">
                    <form method="POST" onSubmit={handleSubmit} className="tocable">
                        <h2 className="titulo">Cree su Propia Pizza</h2>
                        <input required minLength="3" maxLength="16" type="text" name="Nombre" placeholder="Nombre" value={Pizza?.Nombre || PizzaNueva?.Nombre} onChange={handleChange}/>
                        <input required maxLength="10" type="number" name="Precio" placeholder="Precio" value={Pizza?.Precio || PizzaNueva?.Precio} onChange={handleChange}/>
                        <input required type='text' minLength="6"  name="UrlFoto" placeholder="Url de la foto" value={Pizza?.UrlFoto || PizzaNueva?.UrlFoto} onChange={handleChange}/>
                        <select required name="Tamaño" value={Pizza?.Tamaño || PizzaNueva?.Tamaño} onChange={handleChange}>
                            <option value="Chica">Chica</option>
                            <option value="Mediana">Mediana</option>
                            <option value="Grande">Grande</option>
                        </select>
                        <div className="wrapper">
                            <div className="title">
                                Elegi tus ingredientes!
                            </div>
                            <div className="contenedor row">
                                {
                                    isLoading ? (<div className="spinner-border text-primary"></div>) : (
                                        Ingredientes?.map((index) => (
                                            <Checkbox Ingrediente={index} key={index?._id} handleIngredientes={handleIngredientes} Pizzi={PizzaNueva}/>
                                        ))  
                                    )
                                }
                            </div>
                        </div>
                        <input type="submit"/>
                    </form> 
                </div> 
            </div>
        )
    }else{
        const handleSubmit = async (e)=>{
            e.preventDefault()
            
            try{
                let res = await fetch( `http://localhost:5000/Ingredientes`, {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(Ingrediente)
                })
                if(res.status === 201) history.push('/');
                else alert('Error Creando Ingrediente')
            }
            catch (error) {
                console.log(error)
            }
        }
        const handleChange = (e)=>{
            setIngrediente({...Ingrediente, [e.target.name]: e.target.value})
        }
        return(
            <div className="d-flex justify-content-center agrandador paAbajo">
                <div className="form_wrapper">
                <form method="POST" onSubmit={handleSubmit} className="tocable"> 
                    <h2 className="titulo">Cree su Propio Ingrediente</h2>
                    <input required minLength="3" maxLength="16" type="text" name="Nombre" placeholder="Nombre" onChange={handleChange} value={Ingrediente.Nombre}/>
                    <input required minLength="6" type="text" name="UrlFoto" placeholder="Url de la foto" onChange={handleChange} value={Ingrediente.UrlFoto}/>
                    <input type="submit"/>
                </form>
                </div> 
            </div>
        )
    } 
}
Form.propTypes = {
  isPizza: PropTypes.bool
}
export default Form

