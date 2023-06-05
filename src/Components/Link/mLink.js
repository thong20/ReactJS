/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import './mLink.scss'
import PropTypes from 'prop-types'

// Khai báo thuộc tính cho Component
mLink.propTypes = {
  // link: https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
  // todos: PropTypes.array,
  // name: PropTypes.string,
  // age: PropTypes.number,
  // onTodoClick: PropTypes.func,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
mLink.defaultProps = {
  // todos: [],
  // name: ''
  // age: 0,
  // onTodoClick: null,
};


export default function mLink(props) {
  const {id, className, style, onClick} = props;

  return (
    <div onClick={onClick}
         style={{...style}}
         className={className}
         id={id}
    >
      {props.children}
    </div>
  )
}

