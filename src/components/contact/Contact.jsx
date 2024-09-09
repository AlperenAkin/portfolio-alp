import React, { useRef } from 'react';
import "./contact.css";
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"
import emailjs from '@emailjs/browser';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s53x8mc', 'template_fwq8n7v', form.current, 'cXginQ40keRVEt1YV')
        e.target.reset();
    };
  
    return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Let's Connect</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                
                <div className="contact__info">
                    <div className="contact__card">
                        <HiOutlineMail className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">alperenakin7@gmail.com</span>
                        <a href="mailto:alperenakin7@gmail.com" className="contact__button">
                            Email Me{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                        <br />
                        <br />
                        <FaPhone className="contact__card-icon"/>
                        <span className="contact__card-data">613-981-4029</span>
                        
                        <FaLocationDot className="contact__card-icon"  />
                        <span className="contact__card-data">Kanata, ON</span>
                        
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  );
}

export default Contact;