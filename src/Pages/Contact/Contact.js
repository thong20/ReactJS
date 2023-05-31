/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useEffect} from 'react'
import './Contact.scss';

import {useFormik} from "formik";


export default function Contact(){

  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_EMAILJS;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID_EMAILJS;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID_EMAILJS;

  const validate = values => {
    console.log(values, 'line 17 =================');
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.subject) {
      errors.subject = 'Required';
    } else if (values.subject.length > 80) {
      errors.subject = 'Must be 200 characters or less';
    }

    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length > 200) {
      errors.message = 'Must be 400 characters or less';
    }

    return errors;
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    },
    validate,
    onSubmit: values => {
      runAnimation();
      sendMail();
    },
  });

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

  useEffect(() => {
    const inputArr = document.querySelectorAll('input[type=text], input[type=email]')
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
            {/* Khi form submit, thì hàm thực thi là method handleSubmit của biến formik */}
            {/* => các value trong form sẽ được truyền đến tham số của method "onSubmit" của biến formik */}
            {/* ........................................ 👇👇👇👇👇👇 */}
            <form id='form' name='form' onSubmit={formik.handleSubmit}>
              <div className="g-name">
                <div className="row-form first-name">
                  <input id='first-name' name='firstName' type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                  />
                  <label htmlFor="first-name">First name</label>
                  {formik.errors.firstName ? <div className='validate-error'>{formik.errors.firstName}</div> : null}
                </div>

                <div className="row-form last-name">
                  <input id='last-name' name='lastName' type="text"
                         onChange={formik.handleChange}
                         value={formik.values.lastName}
                  />
                  <label htmlFor="last-name">Last name</label>
                  {/*{formik.errors.lastName ? <div className='validate-error'>{formik.errors.lastName}</div> : null}*/}
                </div>
              </div>

              <div className="row-form email">
                <input id='email' name='email' type="email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                />
                <label htmlFor="email">Email</label>
                {formik.errors.email ? <div className='validate-error'>{formik.errors.email}</div> : null}
              </div>

              <div className="row-form subject">
                <input id='subject' name='subject' type="text"
                       onChange={formik.handleChange}
                       value={formik.values.subject}
                />
                <label htmlFor="subject">Subject</label>
                {formik.errors.subject ? <div className='validate-error'>{formik.errors.subject}</div> : null}
              </div>

              <div className="row-form message">
                {/*<input id='message' name='message' type="text-area"/>*/}

                <textarea id="message" name="message" rows="4" cols="80" style={{resize: 'none'}}
                          onChange={formik.handleChange}
                          value={formik.values.message}
                />

                <label htmlFor="message">Message...</label>
                {formik.errors.message ? <div className='validate-error'>{formik.errors.message}</div> : null}
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
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
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

