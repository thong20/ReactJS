import React from 'react'
import './header.scss'
import PropTypes from 'prop-types'

export default function Header(){
  return (
    <div id='Header'>
      <p className='menuMobile'>Menu</p>
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
