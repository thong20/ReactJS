import React from 'react'
import './header.scss'
import PropTypes from 'prop-types'

import Navbar from '../Navbar/Navbar'

export default function Header(){
  return (
    <div id='Header'>
      <Navbar />
      
    </div>
  )
}

// Khai báo thuộc tính cho Component
Header.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Header.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
