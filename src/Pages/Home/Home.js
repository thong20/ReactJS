import React from 'react'
import './home.scss'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'

export default function Home(){
  return (
    <div id='Home'>
      <Header />
      <h1>Home Component</h1>
    </div>
  )
}

// Khai báo thuộc tính cho Component
Home.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Home.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
