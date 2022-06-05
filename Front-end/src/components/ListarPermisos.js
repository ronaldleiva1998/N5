import React, { Component } from 'react'
import axios from 'axios'


export default class ListarPermisos extends Component {

    state = {
        Permisos: [],
        fechaPermiso: new Date(),
        permisoSelected: '',
        apellidoEmpleado: '',
        tipoPermiso: '',
        nombreEmpleado: '',
        id: '',
    }

    async componentDidMount() {
        this.getPermisos();
        // console.log(this.state.Permisos);

    }

    getPermisosId = async ()=> {
        const res = await axios.get('https://localhost:44317/api/Permisos/' + 2)
        this.setState({ Permisos: res.data });
        // console.log(res)
    }
    //Listar
    getPermisos = async () => {
        const res = await axios.get('https://localhost:44317/api/Permisos');
        this.setState({ Permisos: res.data });
        // console.log(res)
    }

    onChangeNombreEmpleado = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
          })
    }

    //Solicitar(agregar info) permiso
    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('https://localhost:44317/api/Permisos/' + this.state.id)
        console.log(res.data);
        //   this.setState({ nombreEmpleado: '' });
          //this.setState({ Permisos: res.data });
          //this.setState({ Permisos: res.data });
      // this.getPermisos();
      this.setState({ Permisos: res.data });
     
    //    this.getPermisosId();

    }

    render() {
        return (

            <div className='row'>
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Buscar</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className='input-group input-group-sm mb-3'>
                                <span className="input-group-text" id="inputGroup-sizing-sm">Id</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="id" name="id"
                                    value={this.state.id} required
                                    // value={this.state.nombreEmpleado}
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={this.onChangeNombreEmpleado}
                                />
                            </div>
                            <button type="submit" className='btn btn-primary'>
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className='list-group'>
                        {
                            this.state.Permisos.map(Permiso => (
                                <li className='list-group-item' key={Permiso.id}>
                                    {Permiso.id} 
                                    {Permiso.nombreEmpleado}
                                    {Permiso.apellidoEmpleado}
                                    {Permiso.tipoPermiso}
                                    {Permiso.fechaPermiso}
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }


}