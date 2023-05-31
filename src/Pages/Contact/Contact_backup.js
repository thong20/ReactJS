/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useEffect} from 'react'
import './Contact.scss';

import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form';


export default function Contact(){

  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_EMAILJS;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID_EMAILJS;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID_EMAILJS;

  const {register, handleSubmit} = useForm();

  const sendMail = () => {
    const tempate_Params = {
      from_name: form.firstName.value,
      from_email: form.email.value,
      reply_to: form.email.value,
      message: form.message.value,
      subject: form.subject.value,

      to_name: 'M.Phong'
    }


    // initial emailjs
    emailjs.init(PUBLIC_KEY);
    // send the message and get a callback with an error
    // or details of the message that was sent
    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        tempate_Params,
    ).then(res => {
      console.log('SEND EMAIL SUCCESSFUL', res.status, res.text);
      form.firstName.value = "";
      form.lastName.value = "";
      form.email.value = "";
      form.subject.value = "";
      form.message.value= "";
      $(function(){
        $("#btn_submit").addClass( "validate", 500, callback );
        $("#btn_submit").removeClass( "onclic" );

        function callback() {
          setTimeout(function() {
            $("#btn_submit").removeClass( "validate" );
            $('#btn_submit').text('send message');
          }, 1250 );
        }
      });


    }).catch(e => console.log('ERROR: ' +e));
  }

  const runAnimation = () => {
    $(function() {
      console.log('runAnimation()');
      // Method .addClass(className, duration, easing, callback) này nằm trong
      // thư viện jqueryui, còn trong thư viện jquery chuẩn không có các tham
      // số này
      // .......................... className được thực thi trong 10s,
      // .............................. 👇 ... duration,
      // .............................. 👇 ..... 👇 .. calback is trigger duration 10s
      // .............................. 👇 ..... 👇 .... 👇
      $('#btn_submit').addClass( "onclic", 500);
      $('#btn_submit').text('');

    });
  }

  const handleOnSubmit = (e) => {
    console.log('handleOnSubmit()');
    e.preventDefault();
    runAnimation();
    // sendMail();
  }


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
            <form id='form' name='form' onSubmit={(e) => handleOnSubmit(e)}>
              <div className="g-name">
                <div className="row-form first-name">
                  <input id='first-name' name='firstName' type="text" />
                  <label htmlFor="first-name">First name</label>
                </div>
                <div className="row-form last-name">
                  <input id='last-name' name='lastName' type="text" />
                  <label htmlFor="last-name">Last name</label>
                </div>
              </div>
              
              <div className="row-form email">
                <input id='email' name='email' type="email" />
                <label htmlFor="email">Email</label>
              </div>

              <div className="row-form subject">
                <input id='subject' name='subject' type="text"/>
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="row-form message">
                <input id='message' name='message' type="text"/>
                <label htmlFor="message">Message...</label>
              </div>

              {/* BUTTON SUBMIT 👇👇👇 */}
              <div className="btn_submit">
                <button id="btn_submit" type='submit'>Send Message</button>
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
                <span>minhphong1515@gmail.com</span>
              </div>
              <div className="support-enquiry">
                <span>Support enquiry</span>
                <span>minhphong1515@gmail.com</span>
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

