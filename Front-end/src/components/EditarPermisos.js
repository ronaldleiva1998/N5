import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import React, { Component } from 'react'

export default class EditarPermisos extends Component {

  state = {
    Permisos: [],
    fechaPermiso: new Date(),
    permisoSelected: '',
    apellidoEmpleado: '',
    tipoPermiso: '',
    nombreEmpleado: '',
    id: '',
    editing: false
  }

  async componentDidMount() {
    const res = await axios.get('https://localhost:44317/api/Permisos')
    this.setState({
      Permisos: res.data.map(permiso => permiso.nombreEmpleado),
      permisoSelected: res.data[0].nombreEmpleado
    })
    if (this.props.match.params.id) {
      const res = await axios.get('https://localhost:44317/api/Permisos/' + this.props.match.params.id)
      // res.data.id=this.props.match.params.id
      // console.log(res.data);
      this.setState({
        // id : res.data.id,
        permisoSelected: res.data.nombreEmpleado,
        apellidoEmpleado: res.data.apellidoEmpleado,
        tipoPermiso: res.data.tipoPermiso,
        fechaPermiso: new Date(res.data.fechaPermiso),
        editing: true,
        id:this.props.match.params.id
      })
    }

  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newPermiso = {
      id:this.props.match.params.id,
      nombreEmpleado: this.state.permisoSelected,
      apellidoEmpleado: this.state.apellidoEmpleado,
      tipoPermiso: this.state.tipoPermiso,
      fechaPermiso: this.state.fechaPermiso.toLocaleDateString("fr-CA")
    };
    if (this.state.editing) {
      await axios.put('https://localhost:44317/api/Permisos/' + this.state.id, newPermiso)
    } else {
      await axios.post('https://localhost:44317/api/Permisos', newPermiso)
    }
    window.location.href = '/';
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    //console.log(e.target.name,e.target.value)
  }

  onChangeDate = fechaPermiso => {
    this.setState({ fechaPermiso })
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
        <div class="d-grid gap-2 col-4 mx-auto">
          <h4>Modificar Permiso</h4>
          </div>
          <form onSubmit={this.onSubmit}>
         
            {/**select permiso */}
            <div className="form-group">
              <select
                className="form-control"
                name="permisoSelected"
                onChange={this.onInputChange}
                value={this.state.permisoSelected}
              >
                {
                  this.state.Permisos.map(permiso =>
                    <option key={permiso} value={permiso}>
                      {permiso}
                    </option>)
                }
              </select>
            </div>
            <div className='form-group'>
              <input type="text" className="form-control" placeholder="apellidoEmpleado" name="apellidoEmpleado" onChange={this.onInputChange} value={this.state.apellidoEmpleado}  required></input>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder="tipoPermiso" name="tipoPermiso" onChange={this.onInputChange} value={this.state.tipoPermiso} required></input>
            </div>

            <div className="form-group">
              <DatePicker type="date" className='form-control' selected={this.state.fechaPermiso} onChange={this.onChangeDate} dateFormat="yyyy-dd-MM"></DatePicker>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className='btn btn-primary'>
              Guardar
            </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
