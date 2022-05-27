import React, {useEffect, useState} from 'react'
import './about.scss'
import PropTypes from 'prop-types'
import {Link, useRouteMatch} from 'react-router-dom'

import {skills, experience, statistics, education} from '../../constant/data'
import Post from '../../Components/Post/Post'
import Contact from '../Contact/Contact'


export default function About(){
  const [startNumber, setStartNumber] = useState(0)

  function lazyLoading () {
    const faders = document.querySelectorAll(".slider")
    const progressBars = document.querySelectorAll('.progress-value')
    const numbersJump = document.querySelectorAll('[data-count]')

    const options = {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0
    }
    const observer = new IntersectionObserver((entries, appearOnscroll) => {
      entries.forEach(obj => {
        if(!obj.isIntersecting){
          return
        }else{
          // About-me
          if(obj.target.getAttribute('class').indexOf('slider') !== -1){
            obj.target.classList.add('appear')
          }
          // Progress-bar
          if(obj.target.getAttribute('class').indexOf('progress-value') !== -1){
              obj.target.setAttribute('style', `width: ${obj.target.dataset.value}%`)
          }

          // animate-number
          if(obj.target.getAttribute('data-count') != null){
            const finalNumber = obj.target.getAttribute('data-count')
            // console.log('finalNumber:', finalNumber)
            const duration = Math.ceil(finalNumber / 53)
            let increment = 0
            const runAnimate = () => {
              if(increment > finalNumber){
                obj.target.innerHTML = finalNumber
              }else{
                increment += duration
                obj.target.innerHTML = increment
                window.requestAnimationFrame(runAnimate)
              }
            }
            window.requestAnimationFrame(runAnimate)
          }
          // clean
          appearOnscroll.unobserve(obj.target)
        }
      })
    }, options)
  
    faders.forEach(fader => observer.observe(fader))
    progressBars.forEach(process => observer.observe(process))
    numbersJump.forEach(item => observer.observe(item))
  }

  function goToContact(location){
    window.scrollTo({top: 0, behavior: 'smooth'})
    return ({...location, pathname: '/contact'})
  }

  useEffect(() => {
    lazyLoading()
  
  })

  return (
    <div id='About'>
      <div className="container">
        {/* <div className="rootMargin"></div> */}
        <div className="space"></div>
        <div className="content">
          {/* ABOUT ME ----------------------- */}
          <div className="row about-me">
            <div className="col-left">
              <h3 className='title slider'>About me</h3>
            </div>
            <div className="col-right">
              <div className="desc1 slider">
                My name is cmPhong. Starting my professional carrier in 2020. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>
              <div className="desc2 slider">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </div>
              <button className="btn-download slider" onClick={() => {
                window.open("https://drive.google.com/file/d/14rmDqg_V3d2ml-Pk0kKko8HhIgCGPD5m/view?usp=sharing")
              }}>
                <span>Download CV</span>
              </button>
            </div>
          </div>
          
          <div className="space"></div>
          
          {/* SKILLS --------------------------- */}
          <div className="row">
            <h3 className="title slider">My Skills</h3>
            <div className="skills">
              {
                skills.map((item, idx) => (
                  <div key={`key-${idx}`} className="skill-name">
                    <span>{item.name}</span>
                    <div className="progress-wrap">
                      <div className="progress">
                        {/* <div className="progress-value" style={{width: `${item.skill}%`}}></div> */}
                        <div className="progress-value" data-value={item.skill}></div>
                      </div>
                      <span className='value'>{item.skill}%</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="space"></div>
          
          {/* TIMELINE ----------------------- */}
          <div className="row col2">
            <div className="education">
              <h3 className='title slider'>Education</h3>
              {
                education.map((item, idx) => (
                  <div key={`key-${idx}`} className="timeline slider">
                    <p>{item.time}</p>
                    <p>{item.company} <span>({item.address})</span></p>
                    <p>{item.position}</p>
                  </div>
                ))
              }
              
            </div>
            <div className="experience"> 
              <h3 className="title slider">Experience</h3>
              {
                experience.map((item, idx) => (
                  <div key={`key-${idx}`} className="timeline slider">
                    <p>{item.time}</p>
                    <p>{item.company} <span>({item.address})</span></p>
                    <p>{item.position}</p>
                  </div>
                ))
              }
              
            </div>
          </div>

          <div className="space"></div>

          {/* STATISTICS -------------------- */}
          <div className="statistics">
            {
              statistics.map((item, idx) => (
                <div key={`key-${idx}`} className="item">
                  <p className='animate-number' data-count={`${item.count}`}>0</p>
                  <div className="divide"></div>
                  <span>{item.name}</span>
                </div>
              ))
            }
            
          </div>
        
          <div className="space"></div>
          
          {/* TESTIMONIALS ----------------------- */}
          <div className="testimonials">
            <div className="row column">
              <Post />
            </div>
          </div>
          
          <div className="space"></div>

          {/* CONTACT-ME ------------------- */}
          <div className="contact-me">
            <div className="row col-2">
              <p>Let's build something awesome together</p>
              <div className="btn">
                <Link className='button-icon' to={location => goToContact(location)}>Contact me <i class="fas fa-paper-plane"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
