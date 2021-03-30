import React, { useEffect } from 'react'
import './_service.scss'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {goToContact} from '../../features/goToContact'

import imgOrderService from '../../images/imgOrderService.jpg'

const icons = {
  search: <i class="fas fa-search-plus"></i>,
  desktop: <i class="fas fa-desktop"></i>,
  rocket: <i class="fas fa-rocket"></i>,
  layer: <i class="fas fa-layer-group"></i>,
  fingerprint: <i class="fas fa-fingerprint"></i>,
  mobile: <i class="fas fa-mobile-alt"></i>,
}
export default function Service(){

  const cards = [
    {icon: icons.search, title: 'ux research', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.desktop, title: 'web design', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.rocket, title: 'seo optimized', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.layer, title: 'development', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.fingerprint, title: 'security', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
    {icon: icons.mobile, title: 'app design', desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters' },
  ]

  function lazyLoading(){
    const options = {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0
    }
    const sliders = document.querySelectorAll('.slider')
    
    const observer = new IntersectionObserver((entries, appearOnscroll) => {
  
      entries.forEach(obj => {
        if(!obj.isIntersecting){
          return
        }else{
          obj.target.classList.add('appear')

          // clean
          appearOnscroll.unobserve(obj.target)
        }
      })
    }, options)
  
    sliders.forEach(slider => observer.observe(slider))

  }

  useEffect(() => {
    lazyLoading()
  })

  return (
    <div id='Service'>
      <div className="container">

        <div className="space"></div>
        
        <div className="content">
          <div className="row servcie-card">
            {
              cards.map((card, idx) => (
                <div key={`key-${idx}`}  className='slider'>
                  <div className="card">
                    {card.icon}
                    <p>{card.title}</p>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="space"></div>
          <div className="order">
            <div className="row col2">
              <div className="col-left slider">
                <img src={imgOrderService} alt="contact-me"/>
              </div>
              <div className="col-right slider">
                <div className="block">
                  <p>Need my help in your project?</p>
                  <Link className='button-icon' to={location => goToContact(location)}>contact me <i class="fas fa-paper-plane"></i></Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Khai báo thuộc tính cho Component
Service.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Service.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
