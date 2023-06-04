/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react'
import './navbar.scss'
import PropTypes from 'prop-types'
import {NavLink, useHistory} from 'react-router-dom'

import logo from '../../images/logo.png'
import {enableScroll, disableScroll} from '../../features/disableScroll'
import redirect from "react-router-dom/es/Redirect";
import Navlink from "../Navlink/Navlink";

// Khai báo thuộc tính cho Component
Navbar.propTypes = {
  setStep: PropTypes.func // passed from App.js
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Navbar.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};

export default function Navbar(props){
  const {setStep} = props
  const history = useHistory();
  const [menus, setMenus] = useState(() =>
    [
      {name: 'home', isActive: history.location.pathname === '/home' || history.location.pathname === '/'},
      {name: 'about', isActive: history.location.pathname === '/about'},
      {name: 'service', isActive: history.location.pathname === '/service'},
      {name: 'contact', isActive: history.location.pathname === '/contact'},
    ]
  );

  console.log('history:', history)

  function toggleMenu(){
    const menu = document.querySelectorAll('.nav-items')[0]
    menu.style.top = 0
    disableScroll()
  }

  // function goToHome(){
  //   console.log('goToHome()');
  //   $('html').animate({scrollTop: 0}, 600, function(){
  //     setStep('home');
  //     history.push('/');
  //   });
  // }


  function goTo(str_location, index){
    enableScroll();
    const menu = document.querySelectorAll('.nav-items')[0]
    menu.style.top = '100vh'; // 👈👈 for menu responsive
    // $('html').animate({scrollTop: 0}, 600);
    // setStep(str_location)

    $(function(){
      $('html').animate({scrollTop: 0}, 500, function(){
        setStep(str_location);
        history.push(str_location);
        const newMenus = menus.map(menu => ({...menu, isActive: false}));
        newMenus[index].isActive = true;
        setMenus(newMenus);
      });
    })
  }

  return (
    <div id='Navbar'>
      <div id="blur"></div>
      <nav className='nav'>
        <div className="logo">
          <img onClick={() => goTo('/', 0)} src={logo} alt="" width='100%' height='100%'/>
        </div>

        <div className="menu">
          <ul className='nav-items'>
            {
              menus.map((menu, index) => (
                <li className="nav-item">
                  <Navlink onClick={() => goTo(menu.name, index)} activeClassName={menu.isActive ? 'active' : ''}>
                    {menu.name}
                  </Navlink>
                </li>
              ))
            }
            <button onClick={() => goTo()}>Close</button>
          </ul>

          <div className="nav-btn">
            <div onClick={() => toggleMenu()} className="menu-btn">
              <div className='text'>Menu</div>
              <div className="icon">
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}


