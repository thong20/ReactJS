import React, {useEffect, useState} from 'react'
import './_contact.scss'
import PropTypes from 'prop-types'
export default function Contact(){

  useEffect(() => {
    const inputArr = document.querySelectorAll('input[type=text]')
    inputArr.forEach(input => {
      input.addEventListener('change', (e) => {
        // console.log('e.target:', e.target.id)
        if(e.target.value){
          document.querySelector(`label[for=${e.target.id}]`).classList.add('has-content')
        }else{
          document.querySelector(`label[for=${e.target.id}]`).classList.remove('has-content')
        }
      })
    })
  })
  return (
    <div id='Contact'>
      <div className="space"></div>
      <div className="container">
        {/* FORM ------------------------------------ */}
        <div className="row">
          <h3 className="title">Let's talk or just say Hello</h3>
          <div className="form">
            <form>
              <div className="g-name">
                <div className="row-form first-name">
                  <input id='first-name' name='firstName' type="text"/>
                  <label htmlFor="first-name">First name</label>
                </div>
                <div className="row-form last-name">
                  <input id='last-name' name='lastName' type="text"/>
                  <label htmlFor="last-name">Last name</label>
                </div>
              </div>
              
              <div className="row-form email">
                <input id='email' name='email' type="text"/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="row-form subject">
                <input id='subject' name='subject' type="text"/>
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="row-form message">
                <input id='message' name='messageName' type="text"/>
                <label htmlFor="message">Message...</label>
              </div>

              <div className="btn-submit">
                <input type="submit" value='Send message'/>
              </div>
            </form>
          </div>
        </div>

        <div className="space"></div>

        {/* ENQUIRY SECTION --------------------------------- */}
        <div className="enquiry">
          <div className="row col-2">
            <div className="col-left">
              <div className="project-enquiry">
                <span>Project enquiry</span>
                <span>start-project@gmail.com</span>
              </div>
              <div className="support-enquiry">
                <span>Support enquiry</span>
                <span>support@gmail.com</span>
              </div>
            </div>
            <div className="col-right">
              <span>Let's connect</span>
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
        </div>
      
        {/* MAP ------------------------------------ */}
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.563147104309!2d106.61618146626569!3d10.76811212323752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c3cf2614c69%3A0xe443a427e83ab329!2zNDU0IFTDom4gSMOyYSDEkMO0bmcsIELDrG5oIFRy4buLIMSQw7RuZywgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1614972315918!5m2!1sen!2s" width={'600%'} height={450} style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}

// Khai báo thuộc tính cho Component
Contact.propTypes = {
  // todos: PropTypes.array,
  // onTodoClick: PropTypes.function,
};

// Gán giá trị mặc định cho props, khi
// props không có giá trị
Contact.defaultProps = {
  // todos: [],
  // onTodoClick: null,
};
