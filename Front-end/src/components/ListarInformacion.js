import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ListarInformacion extends Component {

    state = {
        Permisos: []
    }

    async componentDidMount() {
  
        this.getPermisos();
    }

    async getPermisos() {
        const res = await axios.get('https://localhost:44317/api/Permisos')
        this.setState({ Permisos: res.data })
    }

    render() {
        return (
            <div className='row'>
                {
                    this.state.Permisos.map(permiso => (
                        <div className="col-md-4 p-2" key={permiso.id}>
                            <div className="card">
                               <div className="card-header d-flex justify-content-between mx-auto"> 
                                <Link className="btn btn-secondary" to={"/edit/" + permiso.id}>
                                    Editar
                                </Link>
                                </div>
                                <div className='card-body'>
                                    <p><b>Id:</b> {permiso.id}</p>
                                    <p><b>Nombre Empleado:</b> {permiso.nombreEmpleado}</p>
                                    <p><b>Apellido:</b> {permiso.apellidoEmpleado}</p>
                                    <p><b>Tipo de Permiso:</b> {permiso.tipoPermiso}</p>
                                    <p><b>Fecha de Permiso:</b> {permiso.fechaPermiso}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
