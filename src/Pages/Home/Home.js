import React from 'react'
import './home.scss'
import PropTypes from 'prop-types'

import Banner from '../../Components/Banner/Banner'

import image from '../../images/home.jpg'
export default function Home(){
  return (
    <div id='Home'>
      <Banner src={image}/>
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
