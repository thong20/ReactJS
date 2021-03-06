import React from 'react'
import './footer.scss'
import PropTypes from 'prop-types'

export default function Footer(){
  return (
    <div id='Footer'>
      <div className="container">
        <div className="copyright">
          <p>2021. Clone by minhphong1515@gmail.com</p>
        </div>
        <div className="social">
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
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
