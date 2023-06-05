import React, { useEffect, useState } from 'react'
import './App.scss';
import {Switch, Route, useHistory} from 'react-router-dom'

import Banner from './Components/Banner/Banner'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  const [step, setStep] = useState('');
  const history = useHistory();
  const page = history.location.pathname;
  const [menus, setMenus] = useState([
    {name: 'home', isActive: page === '/home' || page === '/'},
    {name: 'about', isActive: page === '/about'},
    {name: 'service', isActive: page === '/service'},
    {name: 'contact', isActive: page === '/contact'},
  ]);
  
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
      <div className="App">
        <Navbar setStep={setStep} menus={menus} setMenus={setMenus} history={history} />
        <Banner step={step} setStep={setStep} />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About setStep={setStep} menus={menus} setMenus={setMenus} history={history} />
            <Footer />
          </Route>
          <Route path='/service'>
            <Service setStep={setStep} menus={menus} setMenus={setMenus} history={history} />
            <Footer />
          </Route>
          <Route path='/contact'>
            <Contact />
            <Footer />
          </Route>
        </Switch>
        
      </div>
  );
}

export default App;
