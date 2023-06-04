/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import './Navlink.scss'
import '../Navbar/navbar.scss'
import PropTypes from 'prop-types'

// Khai báo thuộc tính cho Component
Navlink.propTypes = {
  // link: https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
  // todos: PropTypes.array,
  // name: PropTypes.string,
  // age: PropTypes.number,
  // onTodoClick: PropTypes.func,

  activeClassName : PropTypes.string, // passed from Navbar.js
  onClick         : PropTypes.func    // passed from Navbar.js


};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Navlink.defaultProps = {
  // todos: [],
  // name: ''
  // age: 0,
  // onTodoClick: null,
  style: {} // passed from Navbar.js
};

// - Khi có props activeClassName thì khi click lên component sẽ thêm class đó vào element
// - Khi click lên component sẽ navigate đế url cần đến
export default function Navlink(props) {
  const {style, onClick, activeClassName} = props;

  const handleOnClick = () => {
    // 👇👇👇👇👇👇👇👇 add class active if it's declared
    if(activeClassName){
      const navLink = document.getElementById('Navlink');
      navLink.classList.add(activeClassName);
    }

    onClick();

  }


  return (
    <div onClick={onClick}
         style={{...style}}
         className={'Navlink ' +activeClassName}
    >
      {props.children}
    </div>
  )
}

