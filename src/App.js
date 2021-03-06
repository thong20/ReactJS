import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
            <Footer />
          </Route>
          <Route path='/service' exact>
            <Service />
            <Footer />
          </Route>
          <Route path='/contact' exact>
            <Contact />
            <Footer />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
