import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
/* REDUX */
import { Provider } from 'react-redux'
import store from "./store";

const App = () => {
  return (
    <Router>
      {/* REDUX */}
      <Provider store={store}>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Productos} />
            <Route exact path='/productos/nuevo' component={NuevoProducto} />
            <Route exact path='/productos/editar/:id' component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
      {/* REDUX */}
    </Router>
  );
}

export default App;
