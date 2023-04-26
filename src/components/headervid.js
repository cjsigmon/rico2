import * as React from "react";
import '../styles.css';
import VideoComp from "./videoComp";
import logo from '../img/logo/LOGO-color.png';
import vidyafull from '../intro_full.mp4';
import vidya from '../intro.mp4';
import vidyalow from '../intro_low.mp4';

export default function HeaderVid() {

    return (
        <div className={"bg bg-home"} >
          
            
            {/* <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/821024502?h=cdcad75069&autoplay=1&title=0&byline=0&portrait=0&controls=0" style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen muted playsinline poster="img/"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
            <div className="box" style={{display: "block"}}>
            <video autoPlay muted style={{width: "100%"}} id="home-bg-vid">
            <source src={vidyafull} type="video/mp4" />
      <source src={vidya} type="video/mp4" />
      <source src={vidyalow} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
              
               
                  
                  <img id="home-title" src={logo} width={"70%"}/>
                  
              
            </div>
          
          </div>
    );
}