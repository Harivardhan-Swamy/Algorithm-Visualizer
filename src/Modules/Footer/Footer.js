import React from 'react';
import "./Footer.css";



const Footer = () => {
    return (
        <div className="Box">
            <h3 style={{color: 'white'}}>Contributors</h3>
            <div className="Container">
                <div className="Column">
                    <h4 className="col-item">Hari</h4>
                    <a className="Socials col-item" href="https://github.com/Harivardhan-Swamy">&emsp;<i class="fab fa-github-square"></i></a>
                </div>
                <div className="Column">
                    <h4 className="col-item">Akhil</h4>
                    <a className="Socials col-item" href="https://github.com/Akhil-2001">&emsp;<i class="fab fa-github-square"></i></a>
                </div>
            </div>
        </div>

    );




};


export default Footer;