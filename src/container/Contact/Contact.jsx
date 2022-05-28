import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';

import './Contact.css';

function Contact() {
  return (
    <section className='contact'>
        <div className="contact-text">
            <h1>Contact Me!</h1>
            <br />
            <p>The best way to contact me is via email, but if direct messaging is more your style, feel free to send a message through Instagram.</p>
            <br />
            <p>Looking forward to hearing from you!</p>
        </div>
        <div className='contact-info'>
            <div className='contact-ig'>
                <a href="https://www.instagram.com/deondre.shoots/" target="_blank" ><AiFillInstagram style={{ fontSize: '4rem' }} /></a>
                <a href="https://www.instagram.com/deondre.shoots/" target="_blank" ><p>@deondre.shoots</p></a>
            </div>
            <div className='contact-email'>
                <a href="mailto:deondre.garcia@yahoo.com"><IoIosMail style={{ fontSize: '4rem' }} /></a>
                <p><a href="mailto:deondre.garcia@yahoo.com">deondre.garcia@yahoo.com</a></p>
            </div>
            
        </div>
    </section>
  )
}

export default Contact