import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <h5 className="project__description">{item.description}</h5>
            {item.demo === "" ? null :<a href={item.demo} className="project__button">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>}
            
            <a href={item.repo} className="project__button__2">
                Github Repo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    );
}

export default ProjectItems;