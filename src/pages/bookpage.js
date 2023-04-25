// @flow
import * as React from "react";
import { useState, useContext, useRef } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import pg1 from '../img/book/One.jpg';
import pg2 from '../img/book/Two.jpg';
import pg3 from '../img/book/Three.jpg';
import pg4 from '../img/book/Four.jpg';
import pg5 from '../img/book/Five.jpg';
import pg6 from '../img/book/Six.jpg';
import pg7 from '../img/book/Seven.jpg';
import pg8 from '../img/book/Eight.jpg';


const SectionWipes2 = () => {
  const DOWN = <FontAwesomeIcon icon={faArrowDown} color="white"/>
  const ESC = <FontAwesomeIcon icon={faCircleXmark} color="white"/>
  const p1Ref = React.useRef(null);
  const p2Ref = React.useRef(null);
  const p3Ref = React.useRef(null);
  const p4Ref = React.useRef(null);
  const p5Ref = React.useRef(null);
  const p6Ref = React.useRef(null);
  const p7Ref = React.useRef(null);
  const p8Ref = React.useRef(null);

  const killp1 = () => {
    p1Ref.current.style.opacity = '0';
};
const resp1 = () => {
  p1Ref.current.style.opacity = '1';
};
const killp2 = () => {
p2Ref.current.style.opacity = '0';
};
const resp2 = () => {
p2Ref.current.style.opacity = '1';
};
const killp3 = () => {
p3Ref.current.style.opacity = '0';
};
const resp3 = () => {
p3Ref.current.style.opacity = '1';
};
const killp4 = () => {
p4Ref.current.style.opacity = '0';
};
const resp4 = () => {
p4Ref.current.style.opacity = '1';
};
const killp5 = () => {
p5Ref.current.style.opacity = '0';
};
const resp5 = () => {
p5Ref.current.style.opacity = '1';
};
const killp6 = () => {
p6Ref.current.style.opacity = '0';
};
const resp6 = () => {
p6Ref.current.style.opacity = '1';
};
const killp7 = () => {
p7Ref.current.style.opacity = '0';
};
const resp7 = () => {
p7Ref.current.style.opacity = '1';
};
const killp8 = () => {
p8Ref.current.style.opacity = '0';
};
const resp8 = () => {
p8Ref.current.style.opacity = '1';
};


  return (
  <div className="wipes">
    
        {/* <a className="goback" onclick="history.back(-1)" href="/governance/"><span id="ESC">{ESC}</span></a> */}
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="700%"
        pin
      >
      
          
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel b1"><span>Scroll to begin<br /> {DOWN}</span></section>
          <Tween
            from={{ opacity: '1' }}
            to={{ opacity: '0' }}
          >
            <section className="panel"><p className="pho-ti">
            {/* <h1 className="photo-title"></h1> */}
              <h4 className="sc-instruct" id="book-h4">Scroll/drag down to begin story</h4>
</p></section>
          </Tween>
          {/* panel 1 */}
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel book-pan of1"><p className="book-p" ref={p1Ref}>Colmado Alto de Cuba is a second-home for many people in Adjuntas. The grocery store is a hub for the community. If you walk by, you are guaranteed to be greeted with a smile. 

            <br></br><br></br>
</p></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            onComplete={killp1}
            onReverseComplete={resp1}
          >
            <section className="panel b2"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel book-pan of2"><p className="book-p" ref={p2Ref}>While some residents come to buy a cold beer, others come to hear the latest town gossip. And on days when Puerto Rico is playing baseball, expect to hear the game and see dozens of plastic lawn chairs.

            <br></br><br></br>
</p></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            onComplete={killp2}
            onReverseComplete={resp2}
          >
            <section className="panel b3"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            
          >
            <section className="panel book-pan of3"><p className="book-p" ref={p3Ref}> In September 2022, Hurricane Fiona made landfall on the island, leaving millions without power for days — for some, even weeks and months.

            <br></br><br></br>
</p></section>
          </Tween>
{/* 4 */}
<Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            onComplete={killp3}
            onReverseComplete={resp3}
          >
            <section className="panel b4"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel book-pan of4"><p className="book-p" ref={p4Ref}>The light and heart of the community would have been out of business if it wasn’t for one thing…

            <br></br><br></br>
</p></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            onComplete={killp4}
            onReverseComplete={resp4}
          >
            <section className="panel b5"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel book-pan of5"><p className="book-p" ref={p5Ref}>… their solar panel. Installed prior to the hurricane that devastated the island’s already unstable power grid, it was the only thing keeping the store on its feet. 

            <br></br><br></br>
</p></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            onComplete={killp5}
            onReverseComplete={resp5}
          >
            <section className="panel b6"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel book-pan of6"><p className="book-p" ref={p6Ref}> When sunlight hits the PV solar panels its energy is absorbed creating direct current (DC) energy.

            <br></br><br></br>
</p></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            onComplete={killp6}
            onReverseComplete={resp6}
          >
            <section className="panel b7"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel book-pan of7"><p className="book-p" ref={p7Ref}>This electricity is fed into the solar inverter, which then converts the current into alternating current electricity. This is usable energy that can power appliances.

            <br></br><br></br>
</p></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
            onComplete={killp7}
            onReverseComplete={resp7}
          >
            <section className="panel b8"></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '1' }}
          >
            <section className="panel book-pan of8"><p className="book-p" ref={p8Ref}>Regardless of storms or power outages, the grocery store’s solar panels continue to bring the community together— through cold drinks, fresh food and bright lights

            <br></br><br></br>
</p></section>
          </Tween>
          <Tween
            from={{ opacity: '0' }}
            to={{ opacity: '0' }}
            onComplete={killp8}
            onReverseComplete={resp8}
          >
            <section></section>
          </Tween>
        </Timeline>  
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

