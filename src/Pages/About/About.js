import React from 'react'
import './about.scss'
import PropTypes from 'prop-types'
import Menu from '../../Components/Menu/Menu'

export default function About(){
  return (
    <div className='About'>
      <Menu />
      <h1>About Component</h1>
    </div>
  )
}

// Khai báo thuộc tính cho Component
About.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
About.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
