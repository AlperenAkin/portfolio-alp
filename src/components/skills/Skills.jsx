import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import LogoSalesforce from "../../assets/SalesforceLogo.png";
import gitlogo from "../../assets/gitLogo.png";
import pythonlogo from "../../assets/pythonLogo.png";
import lookerlogo from "../../assets/LookerStudioLogo.png";
import jiralogo from "../../assets/JiraLogo.png";
import reactlogo from "../../assets/ReactLogo.png";



const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">at the technical level</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
            
        </div>
        <div className='logos__container'> 
          <img src={LogoSalesforce} alt="Salesforce" className='logoimages'/>
          <img src={gitlogo} alt="Salesforce" className='logoimages'/>
          <img src={pythonlogo} alt="Salesforce" className='logoimages'/>
          <img src={lookerlogo} alt="Salesforce" className='logoimages'/>
          <img src={jiralogo} alt="Salesforce" className='logoimages'/>
          <img src={reactlogo} alt="Salesforce" className='logoimages'/>
          

        </div>

    </section>
  );
}

export default Skills;