// @flow
import * as React from "react";
import { useState, useContext, useRef } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gov1 from '../img/pow/20230405_Thiessen_Sequence_-1.jpg';







const SectionWipes2 = () => {
  const DOWN = <FontAwesomeIcon icon={faArrowDown} color="white"/>
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="white"/>


  return (
  <div className="wipes">
    
        {/* <a className="goback" onclick="history.back(-1)" href="/governance/"><span id="ESC">{ESC}</span></a> */}
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
       
          
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel b1"><span>Scroll to begin<br /> {DOWN}</span></section>
          {/* panel 1 */}
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel b2"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel b3"></section>
          </Tween>
{/* 4 */}
        </Timeline>  
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

