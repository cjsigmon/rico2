import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import MyContext from "../MyContext";
import { useHistory } from "react-router-dom";
import logo from '../img/logo/LOGO-white-nav.png'
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



const Footer = ({path}) => {
    var route = "" + path;

    const { myBoolean, setMyBoolean } = useContext(MyContext);
 

    const handleButtonClick = () => {
        setMyBoolean(!myBoolean);
        alert(route);
        window.location.href = route;
      };



    return (
      <div id="footer">
        <div id="footer-main">
            <a id="footer-logo" className="nav-logo" href="/"><img id="desk-logo-img" src={logo} />
                </a>

                <div id="footer-soc">
                    <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                </div>

                <div id="footer-abt" className="abt-side">
                <a class="nav-elem-a" key={"ABOUT"} href={"/about/"}><h4 class="nav-elem">{"ABOUT"}</h4></a>
                <button onClick={handleButtonClick} id="translation-box"><div id={myBoolean ? "l-box" : "r-box"}>EN</div><div id={myBoolean ? "r-box" : "l-box"}>ES</div></button>
                </div> 
        </div>
           
        <h4 className="nav-elem" id="copyright">© 2023 UNC Global Storytelling</h4>    
        </div>
    )
}


export default Footer;