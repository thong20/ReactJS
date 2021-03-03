import React from 'react'
import './menu.scss'
import PropTypes from 'prop-types'

export default function Menu(){
  return (
    <div id='Menu'>
      <nav>
        
      </nav>
    </div>
  )
}

// Khai báo thuộc tính cho Component
Menu.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Menu.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
