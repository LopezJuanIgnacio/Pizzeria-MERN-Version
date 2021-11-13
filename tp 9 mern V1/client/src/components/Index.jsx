import React, { useState, useEffect } from 'react'
//import { useHistory} from 'react-router-dom';
import Card from './Card';
function Index() {
    const [Pizzas, setPizzas] = useState()
    const [isLoading, setisLoading] = useState(true)
    //const history = useHistory();
    useEffect(() => {
        setisLoading(true)
        
        fetch(`http://localhost:5000/`).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(data !== undefined && data !== null) setPizzas(data)
        });
        setisLoading(false)
        return
    }, [])
    return (
        <>
            <div className="text-center">
                <h1 className="display-4 text-white tocable titulo">Lista de Pizzas</h1>
            </div>

            <div className="container-fluid mb-5">
                 <div className="row d-flex justify-content-center">
                     <div className="col-2"></div>
                     <div className="col-8">
                        <div className="d-flex justify-content-around flex-wrap">
                            {
                                isLoading ? (<div className="spinner-border text-primary"></div>) : (
                                    Pizzas?.map((index) => (
                                        <Card Pizzi={index} key={index?._id}/>
                                    ))
                                    
                                )
                            }
                        </div>
                     </div>
                     <div className="col-2"></div>
                 </div>
            </div>
        </>
    )
}

export default Index