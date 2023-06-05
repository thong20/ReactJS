/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import './navbar.scss'
import PropTypes from 'prop-types'

import logo from '../../images/logo.png'
import {enableScroll, disableScroll} from '../../features/disableScroll'
import Navlink from "../Navlink/Navlink";

// Khai báo thuộc tính cho Component
Navbar.propTypes = {
  setStep : PropTypes.func, // passed from App.js
  setMenus: PropTypes.func, // passed from App.js
  menus   : PropTypes.array, // passed from App.js
  history : PropTypes.object, // passed from App.js
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Navbar.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};



export default function Navbar(props){
  let isOpenMenu = false;
  const {menus, setMenus, setStep, history} = props;

  function toggleMenu(){
    isOpenMenu = !isOpenMenu;
    const menu = document.querySelectorAll('.nav-items')[0]
    menu.style.top = isOpenMenu ? 0 : '100vh';
    isOpenMenu ? disableScroll() : enableScroll();
  }

  function goTo(str_location, index){
    if(isOpenMenu) toggleMenu();

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
            <button onClick={toggleMenu}>Close</button>
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


