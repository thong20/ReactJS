import React from 'react'
import './banner.scss'
import PropTypes from 'prop-types'

// Khai báo thuộc tính cho Component
Banner.propTypes = {
  src: PropTypes.string,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Banner.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};

export default function Banner(props){
  const {src} = props
  return (
    <div id="Banner">
      <img src={src} alt=""/>
    </div>
  )
}


