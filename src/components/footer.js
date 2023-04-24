import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import MyContext from "../MyContext";
import { useHistory } from "react-router-dom";
import logo from '../img/logo/LOGO-white-nav.png'
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



const Footer = (props) => {
  const { strI } = props;
  const { myBoolean, setMyBoolean } = useContext(MyContext);
  const [english, setEnglish] = useState(true);
 
    useEffect(() => {
      if (strI == 12 || (strI > 5 && strI < 11)) {
        setEnglish(false);
        setMyBoolean(false);
      } 
  }, [english]);


    const handleButtonClick = () => {
    switch(strI) {
      case 0: 
        setEnglish(!english);
        setMyBoolean(!myBoolean);
        break;

      case 1:
        window.location.href = "/paso-a-paso-esp";
        break;

        case 2:
          window.location.href = "/comunidad";
          break;

          case 3:
        window.location.href = "/gobernancia";
        break;

        case 4:
        window.location.href = "/ambiente";
        break;

        case 5:
        window.location.href = "/salud";
        break;

        case 6:
        window.location.href = "/paso-a-paso";
        break;

        case 7:
        window.location.href = "/community";
        break;

        case 8:
        window.location.href = "/governance";
        break;

        case 9:
        window.location.href = "/against-the-current";
        break;

        case 10:
        window.location.href = "/road-to-recovery";
        break;

        case 11:
          window.location.href = "/sobre";
          break;

          case 12:
          window.location.href = "/about";
          break;
    } 
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
                  {english ? <Link class="nav-elem-a" key={"ABOUT"} to={"/about"}><h4 class="nav-elem">{"ABOUT"}</h4></Link>
                  :
                  <Link class="nav-elem-a" key={"ABOUT"} to={"/sobre"}><h4 class="nav-elem">{"SOBRE"}</h4></Link>
                  }
                
                <button onClick={handleButtonClick} id="translation-box"><div id={myBoolean ? "l-box" : "r-box"}>EN</div><div id={myBoolean ? "r-box" : "l-box"}>ES</div></button>
                </div> 
        </div>
           
        <h4 className="nav-elem" id="copyright">© 2023 UNC Global Storytelling</h4>    
        </div>
    )
}


export default Footer;