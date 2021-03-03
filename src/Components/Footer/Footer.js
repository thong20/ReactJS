import React from 'react'
import './footer.scss'
import PropTypes from 'prop-types'

export default function Footer(){
  return (
    <div className='Footer'>
      <h1>Footer Component</h1>
    </div>
  )
}

// Khai báo thuộc tính cho Component
Footer.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Footer.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
