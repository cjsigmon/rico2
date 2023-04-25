// @flow
import * as React from "react";
import { useState, useContext, useRef } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../photo.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gov2 from '../img/env/20230405_Thiessen_Sequence_-2.jpg';
import gov3 from '../img/env/20230405_Thiessen_Sequence_-3.jpg';
import gov4 from '../img/env/20230405_Thiessen_Sequence_-4.jpg';
import gov5 from '../img/env/20230405_Thiessen_Sequence_-5.jpg';
import gov6 from '../img/env/20230405_Thiessen_Sequence_-6.jpg';
import gov7 from '../img/env/20230405_Thiessen_Sequence_-7.jpg';
import gov8 from '../img/env/20230405_Thiessen_Sequence_-8.jpg';
import gov9 from '../img/env/20230405_Thiessen_Sequence_-9.jpg';
import gov10 from '../img/env/20230405_Thiessen_Sequence_-10.jpg';
import gov11 from '../img/env/20230405_Thiessen_Sequence_-11.jpg';
import gov12 from '../img/env/20230405_Thiessen_Sequence_-12.jpg';



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
  const p9Ref = React.useRef(null);
  const p10Ref = React.useRef(null);
  const p11Ref = React.useRef(null);
  const p12Ref = React.useRef(null);


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
const killp9 = () => {
  p9Ref.current.style.opacity = '0';
};
const resp9 = () => {
p9Ref.current.style.opacity = '1';
};
const killp10 = () => {
  p10Ref.current.style.opacity = '0';
};
const resp10 = () => {
p10Ref.current.style.opacity = '1';
};
const killp11 = () => {
  p11Ref.current.style.opacity = '0';
};
const resp11 = () => {
p11Ref.current.style.opacity = '1';
};
const killp12 = () => {
  p12Ref.current.style.opacity = '0';
};
const resp12 = () => {
p12Ref.current.style.opacity = '1';
};



  return (
  <div className="wipes">
        {/* <a className="goback" onclick="history.back(-1)" href="/governance/"><span id="ESC">{ESC}</span></a> */}
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="1800%"
        pin
      >
       
          
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel env1"><span>Scroll to begin<br /> {DOWN}</span></section>
          {/* panel 1 */}
          <Tween
            from={{ x: '0%' }}
            to={{ x: '-100%' }}
          >
            <section className="panel"><p className="pho-ti" ref={p1Ref}>
              <h1 className="photo-title">Against the Current</h1>
              <h4 className="sc-instruct">Scroll/drag down to begin photo experience</h4>
</p></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p1Ref}>Mario Jose Enrique Erik Paoli Rosado, Enrique Paoli to his friends, returned to Puerto Rico after over 40 years away to care for his aging mother. Upon reconnecting with fellow surfers from his childhood, he learned of the impending development threatening Escambron Beach. He’s spent over a month living feet from the water, fighting for the preservation of one of San Juan’s last public spaces.  

            <br></br><br></br>All the camp’s food has to be stored in coolers and prepared on less than sanitary surfaces. Despite the conditions, Enrique has no complaints. “I feel comfortable. I don’t have any inconveniences,” he says.

</p></section>
          </Tween>
{/* 2 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp1}
            onReverseComplete={resp1}
          >
            <section className="panel"><img src={gov2}/></section>
          </Tween>
{/* 2.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel"><p ref={p2Ref}>Enrique prepares breakfast surrounded by the tents of fellow protestors. Camp was set up right off the sand of Escambron beach so it doesn’t block access to the space they’re trying to protect. The amount of protestors fluctuates, but Enrique has remained since arriving on February 26th. 

 
          </p></section>
          </Tween>
{/* 3 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp2}
            onReverseComplete={resp2}
          >
            <section className="panel"><img className="medium-land" src={gov3}/></section>
          </Tween>
{/* 3.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov4"><p ref={p3Ref}>The Hotel Normandie opened in 1942, a wedding present for the developer’s wife. Now it’s abandoned and in disrepair, but still a cultural fixture bordering one of the last stretches of public beach in San Juan. Recently purchased by the Ishay Group, its impending renovation and development has sparked protests.
</p></section>
          </Tween>
{/* 4 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp3}
            onReverseComplete={resp3}
          >
            <section className="panel gov5"><img src={gov4}/></section>
          </Tween>
{/* 4.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov6"><p ref={p4Ref}>In the shadow of the Hotel Normandie is Sixto Escobar Stadium, which precedes the hotel by a decade. Part of the development plan is converting this historic stadium into a parking lot, which would block off most public access to Escambron beach. Despite appearing abandoned, the stadium sees daily use.
</p></section>
          </Tween>
{/* 5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp4}
            onReverseComplete={resp4}
          >
            <section className="panel gov7"><img className="medium-land" src={gov5}/></section>
          </Tween>
{/* 5.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov8"><p ref={p5Ref}>Dash Scura of Babson College’s Rugby team practices before the 2023 Founder’s Cup in San Juan. Every year they come to Puerto Rico for the tournament they’ve used Sixto Escobar Stadium to practice.The team’s coach joined many locals in expressing disappointment at the possibility of losing the field. 

</p></section>
          </Tween>
{/* 6 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp5}
            onReverseComplete={resp5}
          >
            <section className="panel gov9"><img src={gov6}/></section>
          </Tween>
{/* 6.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov10"><p ref={p6Ref}>Holding the Puerto Rican flag high, Migdalia Maria Ruiz protests all morning with Escambron Unido in front of the Hotel Normandie. Her sign reads “we want restoration, not more destruction.” Escambron Unido organizes on the street, while also maintaining a presence in the protest camp. 
</p></section>
          </Tween>
{/* 7 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp6}
            onReverseComplete={resp6}
          >
            <section className="panel gov11"><img className="medium-land l" src={gov7}/></section>
          </Tween>
{/* 7.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov12"><p ref={p7Ref}>“This was our school,” says Enrique as he looks out on the ocean. Recovering from multiple surgeries and training to surf again, Enrique remains on the beach, watching his fellow surfers through binoculars, which he does every day. His connection to Escambron’s surfing community brought him to the camp. 

</p></section>
          </Tween>
{/* 8 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp7}
            onReverseComplete={resp7}
          >
            <section className="panel gov13"><img className="medium-land r" src={gov8}/></section>
          </Tween>
{/* 8.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov14"><p ref={p8Ref}>“All the surfers gather here. It’s a family, some of us have known each other for 50 years,” Enrique says. “We have waves elsewhere. This spot is sacred to us.”

</p></section>
          </Tween>
{/* 9 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp8}
            onReverseComplete={resp8}
          >
            <section className="panel gov15"><img className="medium-land" src={gov9}/></section>
          </Tween>
{/* 9.5 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel gov16"><p ref={p9Ref}>As a storm comes in, Enrique helps stake down another protestor’s tent. He takes an active role around the camp, doing what he can for others. “It’s the best therapy I’ve had in 3 years,” he says. Weathering storms on the water is a challenge that brings the camp together. 

</p></section>
          </Tween>
{/* 10 */}
<Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp9}
            onReverseComplete={resp9}
          >
            <section className="panel gov17"><img src={gov10}/></section>
          </Tween>
{/* 10.5 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p10Ref}>“This is a local beach, where people come down from the mountains and grill out with their families,” says Enrique. As coastlines are monopolized by new developments, Escambron beach remains a haven for Puerto Ricans, not just for tourists.

</p></section>
          </Tween>

          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp10}
            onReverseComplete={resp10}
          >
            <section className="panel gov17"><img id="gov11" className="medium-land" src={gov11}/></section>
          </Tween>
{/* 11 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p11Ref}>As Enrique relaxes in his hammock, protestors with Escambron Unido get ready for a demonstration behind him. Independent of all the coexisting protest groups, Enrique remains an intermediary, seeking to prevent the petty conflicts that can separate people with a common cause. 

</p></section>
          </Tween>
{/* 11.5 */}         
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
            onComplete={killp11}
            onReverseComplete={resp11}
          >
            <section className="panel gov17"><img src={gov12}/></section>
          </Tween>
{/* 12 */}
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel bordeaux"><p ref={p12Ref}>Watching the sun set from his tent, Enrique rejects an offer to be told the time. “I’m seeing things in slow motion being out here for so long,” he says. “It’s kind of scary. I don’t know if I’ll be able to go back.”
</p></section>
          </Tween>
{/* END */}

        </Timeline>
      </Scene>
    </Controller>
  </div>
  )
}

export default SectionWipes2;

