import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
