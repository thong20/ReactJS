import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    const myInfo = {
        phone1: '0934 182 108',
        phone2: '076 897 1813',
        email:  'minhphong1515@gmail.com',
        address: 'Bình Tân, Tp.Hồ Chí Minh'
    }
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={myInfo.phone1} text2={myInfo.phone2} title={'Phone'}/>
                    <ContactItem icon={email} text1={myInfo.email} text2={''} title={'Email'}/>
                    <ContactItem icon={location} text1={myInfo.address} text2={''} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
