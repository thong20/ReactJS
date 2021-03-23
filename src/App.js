import React, { useEffect } from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {

  
  useEffect(() => {
    const blurElem = document.getElementById('blur')
    
    window.addEventListener('scroll', () => {
      const h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
      if(
        document.documentElement.scrollTop > h
        || document.body.scrollTop > h
      ){
        blurElem.classList.add('blur')
      }else{
        blurElem.classList.remove('blur')
      }
    })
  })
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
            <Footer />
          </Route>
          <Route path='/service'>
            <Service />
            <Footer />
          </Route>
          <Route path='/contact'>
            <Contact />
            <Footer />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
