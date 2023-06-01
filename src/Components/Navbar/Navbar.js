/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import './navbar.scss'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import logo from '../../images/logo.png'
import {enableScroll, disableScroll} from '../../features/disableScroll'

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

  function toggleMenu(){
    const menu = document.querySelectorAll('.nav-items')[0]
    menu.style.top = 0
    disableScroll()
  }
  function goTo(str_location){
    enableScroll();
    const menu = document.querySelectorAll('.nav-items')[0]
    menu.style.top = '100vh'
    $(function(){
      $('html, body').animate({scrollTop: 0}, 600);
    })
    setStep(str_location)
  }


  return (
    <div id='Navbar'>
      <div id="blur"></div>
      <nav className='nav'>
        <div className="logo">
          <NavLink onClick={() => goTo('home')} to='/' exact>
            <img src={logo} alt="" width='100%' height='100%'/>
          </NavLink>
        </div>

        <div className="menu">
          <ul className='nav-items'>
              <li className="nav-item">
                <NavLink onClick={() => goTo('home')} to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={() => goTo('about')} to='/about' activeClassName='active'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink onClick={() => goTo('service')} to='/service' activeClassName='active'>
                  Service
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink onClick={() => goTo('contact')} to='/contact' activeClassName='active'>
                  Contact
                </NavLink>
              </li>
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


