import React from 'react';
import "./about.css";
import AboutImg from "../../assets/PortfolioHobbies.png";
import AboutImgV2 from "../../assets/ProtfolioHobbiesV2.png";
import CV from "../../assets/AlperenAkin-Resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about_section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">A short introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="about" className="about__img" />
            <img src={AboutImgV2} alt="about" className="about__img" />
        </div>
            <div className="about__container container grid">
            
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        &nbsp;&nbsp;&nbsp;In my freetime, I enjoy playing the piano, cycling and have a strange passion for mechanical keyboards 🎹 🚴🏼‍♂️. I love playing any sport, especially tennis, soccer and basketball 🏀 🎾. </p>
                    <a download="" href={CV} className="button button--flex">
                       
                        My Work History &nbsp;
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-suitcase-lg" viewBox="0 0 16 16">
                            <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z"/>
                            </svg>
                         &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg>
                    </a>
                </div>
        </div>
        
    </section>
  );
}

export default About;