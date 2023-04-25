import * as React from "react";
import '../styles.css';
import logo from '../img/logo/LOGO-color.png';
import powbg from '../img/power.png';
import { useEffect, useRef } from "react";

export default function HeaderImg({ title, tagline, noline, theme }) {
  var str = title;
  var ab = false;
  const bgRef = useRef(null);
 // "HELLO WORLD"

//  useEffect(() => {
//     switch(theme) {
//       case "POWER":
//         bgRef.current.style.backgroundImage = 'url("../img/power.png")';
//         break;
//     }
//  }, [])
  
  str = str.toUpperCase();
  if (str == "ABOUT" || str == "SOBRE") {
      ab = true;
      noline = true;
  }
    
    return (
        <div className={`bg bg-${theme}`} id={ab ? "abg" : "rbg"} ref={bgRef} >
            <div className="box">
                <div id="main-title-contain">
                  {title == "ISLA DE FUERZA" ? <img id="home-title" src={logo} width={"70%"}/> : <h1 className="main-title">{str}</h1>}
                  
                  {noline ? <></> : <hr class="line" id={theme + "-line"}></hr>}
                  {ab ? <></> : <h3 id="main-tagline">{tagline}</h3>}
                </div> 
            </div>
          </div>
    );
}
