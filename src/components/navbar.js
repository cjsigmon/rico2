import React, { useState, useEffect, useContext, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import '../styles.css';
import MyContext from "../MyContext";
import logo from '../img/logo/LOGO-white-nav.png'
// help from https://www.rolandwrites.com/blog/sticky-navbar-hides-scroll



function Navbar (props) {
  const { strI } = props;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);
  const [first, setFirst] = useState(true);
  const { myBoolean, setMyBoolean } = useContext(MyContext);
  const [english, setEnglish ] = useState(true);
  const barsRef = useRef(null);

  const [isWindowLoaded, setIsWindowLoaded] = useState(false);




  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {id: {nin: ["cG9zdDo1OA==", "cG9zdDoyMDQ=", "cG9zdDoyMDA=", "cG9zdDoyMTA=", "cG9zdDoyMTM=", "cG9zdDoyMTY=", "cG9zdDoyMDc="]}}, sort: {date: DESC}) {
        nodes {
          id
          title
          uri
        }
      }
    }
    `)
        const { allWpPost } = data; 
  const navbarStyles = {
    transition: 'top 0.7s'
  }
  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    setDark(currentScrollPos > window.innerHeight);
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
      if (strI == 12 || (strI > 5 && strI < 11)) {
        setEnglish(false);
        setMyBoolean(false);
      } 
  }, [english]);

  // new useEffect:
  useEffect(() => {
    


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);



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

  const navRef = useRef(null);
  const abtRef = useRef(null);
  const strsRef = useRef(null);
  const handleHamClick = () => {
    if(hamMenu) {
      strsRef.current.style.display = 'none';
      abtRef.current.style.display = 'none';
      navRef.current.style.background = 'none';
    } else {
      strsRef.current.style.display = 'block';
      abtRef.current.style.display = 'block';
      navRef.current.style.backgroundColor = 'black';
    }
    setHamMenu(!hamMenu);
  };


  // const { allEnPost } = data.engl;

  const sobreId = "cG9zdDoyMDc=";


    return (
      <>
      {/* <FontAwesomeIcon icon={faBars} style={{color: "white", position: "fixed",}}/> */}
      <div ref={navRef} className={`navbar ${dark ? 'dark' : ''} ${visible ? 'visible' : ''}`}>
            
            {/* <div class="mar"></div> */}
            <div className="mob-menu">
              <span ref={barsRef} onClick={handleHamClick}><FontAwesomeIcon icon={faBars} style={{color: "white", position: "fixed"}}/></span>
              
              <Link id="mob-logo" to="/"><img id="mob-logo-img" src={logo} />
            </Link>
            </div>
            

            <Link className="nav-logo" to="/"><img id="desk-logo-img" src={logo} />
            </Link>

            <div class="gap"></div>

            <div ref={strsRef} id="stry-links">
              
                  <Link class="nav-elem-a" to={english ? "/paso-a-paso" : "/paso-a-paso-esp"}><div className="wrap-nav"><h4 class="nav-elem">{english? "STEP BY STEP" : "PASO A PASO"}</h4></div></Link>
                  <Link class="nav-elem-a" to={english ? "/community" : "/comunidad"}><h4 class="nav-elem">{english? "A CULTURAL ANCHOR" : "COMUNIDAD"}</h4></Link>
                  <Link class="nav-elem-a" to={english ? "/governance" : "/gobernancia"}><h4 class="nav-elem">{english? "RESISTANT, NOT RESILIENT" : "GOBERNANCIA"}</h4></Link>
                  <Link class="nav-elem-a" to={english ? "/against-the-current" : "/ambiente"}><h4 class="nav-elem">{english? "SHIFTING TIDES" : "LA PEQUEÑA GUERRA"}</h4></Link>
                  <Link class="nav-elem-a" to={english ? "/road-to-recovery" : "/salud"}><h4 class="nav-elem">{english? "ROAD TO RECOVERY" : "SALUD"}</h4></Link>
            </div>

            <div class="gap"></div>
              
            <div ref={abtRef} className="abt-side">
              <Link class="nav-elem-a" to={english ? "/about" : "/sobre"}><h4 class="nav-elem">{english? "ABOUT" : "SOBRE"}</h4></Link>
              <button onClick={handleButtonClick} id="translation-box"><div id={myBoolean ? "l-box" : "r-box"}>EN</div><div id={myBoolean ? "r-box" : "l-box"}>ES</div></button>
            </div>
          
    </div>
    
      </>
      
    )

  
}



export default Navbar;