import React from "react";
import { FiGithub} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            
            <a href="https://github.com/AlperenAkin" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            
        </div> 
    ); 
}

export default Social;