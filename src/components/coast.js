// @flow
import * as React from "react";
import { useState, useContext, useRef, Component, useEffect } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import '../coast.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from "react-gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import gif from '../img/coast/MapAn.gif';
   

class Coast extends Component {
    constructor(props) {
        super(props);
        this.first = true;
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.h2Ref = React.createRef();
        this.h3Ref = React.createRef();
      }

    handleScroll = () => {
        const divElement = document.getElementById('coast-anchor');
        const rect = divElement.getBoundingClientRect();
        const cover = document.getElementById('cover-coast');
        const lilly = document.getElementById('lilly');
        const biggy = document.getElementById('biggy');
 
        if (rect.top <= 200 && this.first) {
            this.first = false;
            cover.style.display = 'none';
            setTimeout(() => {
                divElement.scrollIntoView({ behavior: 'smooth' });
              }, 1000);
              lilly.style.opacity = '0';
              biggy.style.opacity = '0';
        } else if (rect.top > 200) {
            lilly.style.opacity = '1';
            biggy.style.opacity = '1';
        }
      };
 
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        const script = document.createElement('script');
        script.src = 'https://public.flourish.studio/resources/embed.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Render the first div
    const div1 = this.ref1.current;
    div1.innerHTML = '<div class="flourish-embed flourish-photo-slider" data-src="visualisation/13460306"></div>';

    // Render the second div
    const div2 = this.ref2.current;
    div2.innerHTML = '<div class="flourish-embed flourish-chart" data-src="visualisation/13380976"></div>';

    const div3 = this.ref3.current;
    div3.innerHTML = '<div class="flourish-embed" data-src="story/1888342"></div>';

    const box = document.getElementById('coast-anchor');
const otherBox = document.querySelector('.navbar');

box.addEventListener('mouseover', () => {
    otherBox.style.display = 'none';
  });

  box.addEventListener('mouseout', () => {
    otherBox.style.display = 'grid';
  });
  
        
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

  render() {

    return (
        <div id="coast-anchor">
            <div id="coast-bg">
                
                    <h3 id="lilly">PUERTO RICO'S</h3>
                    <h2 id="biggy">COAST</h2>
  
                <div id="coast-bg1"></div>

                <div className="coast-txt-box">
                    <p className="coast-txt">On April 11th, Puerto Rico declared a state of emergency on coastal erosion.</p>
                </div>

                <div className="coast-txt-box">
                    <p className="coast-txt">Two-thirds of the 3.2 million Puerto Rico residents live in coastal areas.</p>
                </div>
                <div className="coast-txt-box">
                    <p className="coast-txt">More than 20% of those residents are in areas at a high risk of flood.</p>
                </div>                    

                <div className="coast-txt-box" id="coast-topper">
                    <p className="coast-txt">The following graphics depict the changing shape of a coastline found in Loiza.</p>
                </div> 
                <div className="flor-charts">
                    <div ref={this.ref1}></div>
                </div>
                <div className="gif-bg">
                    <img id="coast-gif" src={gif}/>
                </div>
                <div id="coast-bg2"></div>

              
                <div className="dubl-divr">
                    <div id="dubl-box">
                        <p className="coast-txt">In addition to the natural dynamic changes of Puerto Rico’s coastline, the island’s shore is experiencing adverse effects of high population density and infrastructure near the coast.</p>
                    </div>
                    <div id="dubl-flor">
                        <div ref={this.ref2}></div>
                    </div>

                </div>

                <div className="coast-txt-box" id="top-box">
                    <p className="coast-txt" id="top-txt">Along Puerto Rico’s 700 miles of coastline, protestors are fighting for the beaches.</p>
                </div>  

                <div id="last-chart">
                    <div ref={this.ref3}></div>
                </div>
         
                <div id="coast-bott"></div>
                
            </div>
            <div id="cover-coast"></div>
        </div> 
    );
  }
}  


export default Coast;

