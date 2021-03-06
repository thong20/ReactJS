import React from 'react'
import './navbar.scss'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import logo from '../../images/logo.png'
export default function Navbar(){
  return (
    <div id='Navbar'>
      <nav className='nav'>
        <div className="logo">
          <NavLink to='/' exact>
            <img src={logo} alt="" width='100%' height='100%'/>
          </NavLink>
        </div>

        <div className="menu">
          <ul className='nav-items'>
              <li className="nav-item">
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' exact activeClassName='active'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/service' exact activeClassName='active'>
                  Service
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' exact activeClassName='active'>
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="nav-btn">
              <div className="menu-btn">
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
