import React, {useEffect} from 'react'
import './about.scss'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Banner from '../../Components/Banner/Banner'
import imgAbout from '../../images/about3.jpg'

const education = [
  {
    time: '2008 - 2012',
    company: 'XYZ Institude',
    address: 'Sometown, NJ',
    position: 'Certificate in New Media Information Technology'
  },
  {
    time: '2004 - 2008',
    company: 'ABC University',
    address: 'Sometown, NJ',
    position: 'BFA in Graphic Design'
  },
  {
    time: '2003 - 2006',
    company: 'KLM University',
    address: 'Sometown, NJ',
    position: 'BFA in Graphic Design'
  },
]
const experience = [
  {
    time: '2015 - present',
    company: 'Amoebabo Inc.',
    address: 'Sometown, NJ',
    position: 'Lead / Senior UX Designer'
  },
  {
    time: '2012 - 2015',
    company: 'Gaboble Inc.',
    address: 'Sometown, NJ',
    position: 'Web Site / UX Designer'
  },
  {
    time: '2009 - 2012',
    company: 'Copalopa Inc.',
    address: 'Sometown, NJ',
    position: 'Junior UX Designer'
  },
]
const skills = [
  {name: 'Ux design', skill: 93},
  {name: 'Web design', skill: 88},
  {name: 'Photoshop', skill: 92},
  {name: 'Figma', skill: 98},
  {name: 'Adobe XD', skill: 82},
  {name: 'Illustrator', skill: 85},
  {name: 'PHP', skill: 74},
  {name: 'jQuery', skill: 72},
  {name: 'Node JS', skill: 70},
]
const statistics = [
  {count: 72, name: 'Happy Clients'},
  {count: 136, name: 'Projects'},
  {count: 27, name: 'Awards'},
  {count: 2988, name: 'Followers'}
]
const customers = [
  {
    name: 'Cecilia Obotoh',
    img: 'https://themes.wip-themes.com/poojy/demo-images/heads/head2.jpg',
    position: 'HR of Susuko',
    post: 'His work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!'
  },
  {
    name: 'Johnny Iskandar',
    img: 'https://themes.wip-themes.com/poojy/demo-images/heads/head3.jpg',
    position: 'CEO of Dandodot',
    post: 'We were able to test our way from a 5% conversion rate, all the way up to 20%. Without driving any more traffic, our client is getting four times the leads that he was getting before.'
  },
  {
    name: 'Mark Jojoba',
    img: 'https://themes.wip-themes.com/poojy/demo-images/heads/head1.jpg',
    position: 'CEO of Rocket Chicken',
    post: 'Mr. Poojy is awesome! He did everything – with almost no time or effort for me! The best part was that I could completely trust him to represent our company professionally with our clients.'
  },
]
export default function About(){


  const lazyLoading = () => {
    const faders = document.querySelectorAll(".fade-in")
    console.log('faders:', faders)
    const options = {
      rootMargin: '0px 0px -200px 0px',
      threshold: 1
    }
    const observer = new IntersectionObserver((entries, appearOnscroll) => {
      entries.forEach(obj => {
        if(!obj.isIntersecting){
          return
        }else{
          obj.target.classList.add('appear')
          appearOnscroll.unobserve(obj.target)
        }
      })
    }, options)
  
    faders.forEach(fader => observer.observe(fader))

  }

  useEffect(() => {
    lazyLoading()
    
  }, [])

  return (
    <div id='About'>
      <div className="container">
        <Banner src={imgAbout}/>
        <div className="space"></div>
        <div className="content">
          {/* ABOUT ME ----------------------- */}
          <div className="row about-me">
            <div className="col-left">
              <h3 className='title'>About me</h3>
            </div>
            <div className="col-right fade-in">
              <div className="desc1">
                My name is Poojy H. Starting my professional carrier in 2009. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>
              <div className="desc2">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </div>
              <button className="btn-download">
                <span>Download CV</span>
              </button>
            </div>
          </div>
          
          <div className="space"></div>
          
          {/* SKILLS --------------------------- */}
          <div className="row">
            <h3 className="title">My Skills</h3>
            <div className="skills">
              {
                skills.map((item, idx) => (
                  <div key={`key-${idx}`} className="skill-name">
                    <span>{item.name}</span>
                    <div className="progress-wrap">
                      <div className="progress">
                        <div className="progress-value" style={{width: `${item.skill}%`}}></div>
                      </div>
                      <span>{item.skill}%</span>
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
              <h3 className='title'>Education</h3>
              {
                education.map((item, idx) => (
                  <div key={`key-${idx}`} className="timeline">
                    <p>{item.time}</p>
                    <p>{item.company} <span>({item.address})</span></p>
                    <p>{item.position}</p>
                  </div>
                ))
              }
              
            </div>
            <div className="experience"> 
              <h3 className="title">Experience</h3>
              {
                experience.map((item, idx) => (
                  <div key={`key-${idx}`} className="timeline">
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
                  <p>{item.count}</p>
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
              {
                customers.map((customer, idx) => (
                  <div key={`key-${idx}`} className="post ">
                    <div className="profile">
                      <div className="avatar">
                        <img src={customer.img} alt="avatar"/>
                      </div>
                      <p>{customer.name}</p>
                      <p>{customer.position}</p>
                    </div>
                    <div className="text">{customer.post}</div>
                  </div>
                ))
              }
              
            </div>
          </div>
          
          <div className="space"></div>

          {/* CONTACT-ME ------------------- */}
          <div className="contact-me">
            <div className="row col-2">
              <p>Let's build something awesome together</p>
              <div className="btn">
                <button className='button-icon'>Contact me <i class="fas fa-paper-plane"></i></button>
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
