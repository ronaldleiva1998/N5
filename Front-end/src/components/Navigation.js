import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <a className="navbar-brand" href="/">PermisosApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                            <Link to="/" className="nav-link">Lista Usuarios</Link>
                                {/* <a className="nav-link" href="/Permisosinfo">Principal</a> */}
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/Permisos">Buscar Usuarios</a>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/modificar" className="nav-link">Modificar Permiso</Link>
                                {/* <a className="nav-link" href="/edit/:id">Modificar Permiso</a> */}
                            </li>


                        </ul>
                    </div>

                </div>


            </nav>
        )
    }
}
