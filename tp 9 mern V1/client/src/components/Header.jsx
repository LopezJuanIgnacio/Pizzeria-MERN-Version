import React from 'react'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark box-shadow mb-3">
                <div className="container">
                    <a href='/' className="aa"><img src="/img/donlopezlogo.png" alt="Logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link text-light" href='/AgregarPizza'>Agregar pizza</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href='/AgregarIngrediente'>Agregar ingrediente</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
