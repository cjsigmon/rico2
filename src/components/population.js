// @flow
import * as React from "react";
import { useState, useContext, useRef, Component, useEffect } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../pop.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import lilguys from '../img/pop/population_people.png';
import pyramid from '../img/pop/pyramid_info.png';
import covid from '../img/pop/coronavirus.png';
import plane from '../img/pop/airplane.png';

class Population extends Component {
    constructor(props) {
        super(props);
        this.popRef1 = React.createRef();
        this.popRef2 = React.createRef();
        this.popRef3 = React.createRef();
      }

    handleScroll = () => {
        const divElement = document.getElementById('pop-anchor');
        const rect = divElement.getBoundingClientRect();
    //     let scroll = overRef.current.scrollLeft;
    // let tot = lineRef.current.clientWidth - (2 * window.innerWidth) + 8;
    // let percentage = (scroll / tot) * 100;
    // fillRef.current.style.width = percentage + "%";
    
    // if (percentage > 5) {
    //   if (timeBgRef.current) {
    //     setBlurAmount(5);
    //     setDarkAmount(75);
    //   } 
    // } 
    // if (percentage < 5) {
    //   setBlurAmount(percentage);
    //   setDarkAmount( 100 - 15 * percentage + 1);
    // }
      };
 
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        const script = document.createElement('script');
        script.src = 'https://public.flourish.studio/resources/embed.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Render the first div
        const div1 = this.popRef1.current;
        div1.innerHTML = '<div class="flourish-embed flourish-chart" data-src="visualisation/13443823"></div>';
        // Render the second div
        const div2 = this.popRef2.current;
        div2.innerHTML = '<div class="flourish-embed flourish-chart" data-src="visualisation/13476886"></div>';
        // Render the third div
        const div3 = this.popRef3.current;
        div3.innerHTML = '<div class="flourish-embed" data-src="story/1886210"></div>';

        // const box = document.getElementById('pop-anchor');
        // const otherBox = document.querySelector('.navbar');
        // box.addEventListener('mouseover', () => {
        //     otherBox.style.display = 'none';
        // });
        // box.addEventListener('mouseout', () => {
        //     otherBox.style.display = 'grid';
        // });    

      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

  render() {

    return (
        <div id="pop-anchor">
            <div id="pop-container">
                <div id="big-chart">
                    <div id="scrollCont"><b><p></p>Scroll to Continue <FontAwesomeIcon icon={faChevronRight} /></b></div>
                    
                    <div className="popslide" id="popslide1">
                        <div id="lil-guys">
                            <div id="stat-flex">
                                <p className="pop-info">In the past decade, from 2013 to 2023, Puerto Rico's <b>population decreased</b> by </p>
                                <h2 className="color-num">10%</h2>
                            </div>
                            <img id="guys-img" src={lilguys} />
                        </div>

                        <div className="pop-flor" id="flor1">
                            <div ref={this.popRef1}></div>
                        </div>
                    </div>

                    <div className="popslide" id="popslide2">
                        <div className="vertio">
                            <img id="plane" src={plane}/>
                            <p className="pop-info">Each year, an average of</p>
                            <h2 className="color-num">100,000 people</h2>
                            <p className="pop-info">leave the island for inland U.S. locations, according to ACS data from 2018</p>
                        </div>

                        <div className="vertio">
                            <p className="pop-info">Since the first COVID case in 2020, around 1 in 579 residents have died from the coronavirus, a total of</p>
                            <h2 className="color-num">5,848 deaths</h2>
                            <p className="pop-info">according to the NY Times</p>
                            <img id="covid" src={covid}/>
                        </div>
                    </div>

                    <div className="popslide" id="popslide3">
                        <div className="pop-flor" id="flor2">
                            <div ref={this.popRef2}></div>
                            <p className="pop-info" id="info3">In the past decade, teens and youth dropped from making up a quarter of the population in 2013, to around 18%. While adults ages 20-64 maintained their percentage of around 60%, in ten years, the island’s population of elders rose from 16.3% to 18.8%. Puerto Rico’s youth population is shrinking.</p>
                        </div>
                        
                    </div>
                    <div className="popslide" id="popslide4">
                        <div className="pop-flor" id="flor3">
                            <div ref={this.popRef3}></div>
                        </div>
                        <div className="slide-40">
                            <p className="pop-info" id="info-40">Population pyramid graphs show Puerto Rico's age demographics shifting from year to year. By 2023, the island's population transformed into a declining shape</p>
                            <img id="pyramid" src={pyramid} />
                        </div>
                        
                    </div>



                </div>
                
            </div>
        </div> 
    );
  }
}  


export default Population;

