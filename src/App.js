import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Expand from './pages/Expand';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Home from './pages/Home';
const App = () => {


  return <>

      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/expand/:id" component={Expand} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact  component={Error} />
          </Switch>
      </BrowserRouter>

  </>;





};




export default App;