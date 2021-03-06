import React from 'react'
import './_service.scss'
import PropTypes from 'prop-types'

import Banner from '../../Components/Banner/Banner'

import imgService from '../../images/service.jpg'
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


  return (
    <div id='Service'>
      <div className="container">
        <Banner src={imgService}/>

        <div className="space"></div>
        
        <div className="content">
          <div className="row servcie-card">

            {
              cards.map((card, idx) => (
                <div key={`key-${idx}`} className="card">
                  {card.icon}
                  <p>{card.title}</p>
                  <p>{card.desc}</p>
                </div>
              ))
            }
            
          </div>
          <div className="space"></div>
          <div className="order">
            <div className="row col2">
              <div className="col-left">
                <img src={imgOrderService} alt=""/>
              </div>
              <div className="col-right">
                <div className="block">
                  <p>Need my help in your project?</p>
                  <button className='button-icon'>contact me <i class="fas fa-paper-plane"></i></button>
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
