import React, { useState } from 'react'
import './navbar.scss'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import logo from '../../images/logo.png'
import {enableScroll, disableScroll} from '../../features/disableScroll'
export default function Navbar(){
  
  
  function toggleMenu(){
    const menu = document.querySelectorAll('.nav-items')[0]
    menu.style.top = 0
    disableScroll()
  }
  function closeMenu(){
    enableScroll();
    window.scrollTo({top: 0})
    const menu = document.querySelectorAll('.nav-items')[0]
    menu.style.top = '100vh'
  }


  return (
    <div id='Navbar'>
      <div id="blur"></div>
      <nav className='nav'>
        <div className="logo">
          <NavLink to='/' exact>
            <img src={logo} alt="" width='100%' height='100%'/>
          </NavLink>
        </div>

        <div className="menu">
          <ul className='nav-items'>
              <li className="nav-item">
                <NavLink onClick={() => closeMenu()} to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={() => closeMenu()} to='/about' exact activeClassName='active'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink onClick={() => closeMenu()} to='/service' exact activeClassName='active'>
                  Service
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink onClick={() => closeMenu()} to='/contact' exact activeClassName='active'>
                  Contact
                </NavLink>
              </li>
              <button onClick={() => closeMenu()}>Close</button>
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

// Khai báo thuộc tính cho Component
Navbar.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Navbar.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
