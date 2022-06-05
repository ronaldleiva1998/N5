import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import EditarPermisos from './components/EditarPermisos'
import ListarPermisos from './components/ListarPermisos';
import ListarInformacion from './components/ListarInformacion';

 function App() {
  return(
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Route path="/"exact component={ListarInformacion}/>
      <Route path="/edit/:id" component={EditarPermisos}/>
      <Route path="/modificar" component={EditarPermisos}/>
      <Route path="/Permisos" component={ListarPermisos}/>
      <Route path="/Permisosinfo" component={ListarInformacion}/>
      </div>
      
     </Router>

    //  <div>Hola</div>
  );
 
}

export default App;
