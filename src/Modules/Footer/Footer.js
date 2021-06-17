import React from 'react';
import "./Footer.css";



const Footer = () => {
return(
<div className="Box">
    <div style={{ color: "white", textAlign: "center" }}>Contributors</div>
    
    <div className = "Container">
        <div className="Row">
            <div className="Column">Name 1</div>
            <div className="Column">Name 1</div>
        </div>
       <div className="Row">
        <a className="Socials" href="#"><i class="fab fa-github-square"></i></a>   
        <a className="Socials" href="#"><i class="fab fa-github-square"></i></a>
        </div>
     
    </div>
</div>




);




};


export default Footer;