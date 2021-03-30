import React, { useEffect, useState } from "react";
import "./banner.scss";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import imageAbout from "../../images/about3.jpg";
import imageContact from "../../images/contact.jpg";
import imageHome from "../../images/home.jpg";
import imageService from "../../images/service.jpg";

import {slideshowAnimated} from '../../features/slideshowAnimated'

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

export default function Banner(props) {
  const {step} = props
  const [firstRender, setFirstRender] = useState(true)
  const location = useLocation();

  function n(str) {
    if (str === "home") return 0;
    if (str === "about") return 1;
    if (str === "service") return 2;
    if (str === "contact") return 3;
    return 0;
  }
  useEffect(() => {
    if(!firstRender){
      const carousel = document.querySelector(".carousel");
      const imgTags = document.querySelectorAll(".carousel img");
      if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        window.scrollTo({top: 0, behavior: 'smooth'})
        slideshowAnimated({imgTags, carousel, index: n(step), delay: 0.7})
      }else{
        slideshowAnimated({imgTags, carousel, index: n(step)})
      }
    }
  }, [step])

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const imgTags = document.querySelectorAll(".carousel img");
    if(location.pathname !== '/' && location.pathname !== '/home'){
      slideshowAnimated({imgTags, carousel, index: n(location.pathname.substring(1))})
    }
    setFirstRender(false)
  },[]);
  
  return (
    <div id="Banner">
      {/* <img src={src} alt=""/> */}
      <div className="carousel">
        <div id="img-home" className="img-item">
          <img src={imageHome} alt="Home" />
        </div>
        <div id="img-about" className="img-item">
          <img src={imageAbout} alt="About" />
        </div>
        <div id="img-service" className="img-item">
          <img src={imageService} alt="Service" />
        </div>
        <div id="img-contact" className="img-item">
          <img src={imageContact} alt="Contact" />
        </div>
      </div>
    </div>
  );
}
