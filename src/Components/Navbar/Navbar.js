import React from 'react'
import './navbar.scss'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default function Navbar(){
  return (
    <div id='Navbar'>
      <nav>
        <div className="logo">
          <NavLink to='/' exact>
            Logo brand
          </NavLink>
        </div>

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
