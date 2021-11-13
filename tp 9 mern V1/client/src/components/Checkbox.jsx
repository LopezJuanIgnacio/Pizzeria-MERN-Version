import React from 'react'

function Checkbox({Ingrediente, handleIngredientes, Pizzi}) {
    if(Pizzi?.ListaIngredientes.indexOf(Ingrediente._id) === -1){
        return(
            <label className="option_item col-md-3">
                <input type="checkbox" className="checkbox" name="Ingredientes[]" onClick={handleIngredientes} value={Ingrediente._id} />
                <div className="option_inner">
                    <div className="tickmark"></div>
                    <div className="imagen"><img src={Ingrediente.UrlFoto} alt={Ingrediente.Nombre} /></div>
                    <div className="name">{Ingrediente.Nombre}</div>
                </div>
            </label>
        )
    }
    return (
        <label className="option_item col-md-3">
            <input type="checkbox" className="checkbox" name="Ingredientes[]" onClick={handleIngredientes} value={Ingrediente._id} checked />
            <div className="option_inner">
                <div className="tickmark"></div>
                <div className="imagen"><img src={Ingrediente.UrlFoto} alt={Ingrediente.Nombre} /></div>
                <div className="name">{Ingrediente.Nombre}</div>
            </div>
        </label>
    )
}

export default Checkbox
