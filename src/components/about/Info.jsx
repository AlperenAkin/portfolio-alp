import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineSparkles } from "react-icons/hi";
import { IoSchoolSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <IoSchoolSharp className="about__icon" />
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">University of Ottawa 2026 </span>
        </div>
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Degree</h3>
            <span className="about__subtitle">Bachelor's degree in Computer Science</span>
        </div>
        <div className="about__box">
            <FaGithub className="about__icon" />
            <h3 className="about__title">Github</h3>
            <span className="about__subtitle">View my <a href="https://github.com/AlperenAkin">projects</a></span>
        </div>
    </div>
  );
}

export default Info;