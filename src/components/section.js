import * as React from "react";
import { useState, useRef, useEffect } from "react";
import '../styles.css';
import filler from '../img/section/adjuntas-lago-garzas.png'; 
import govS from '../img/section/section-gov.jpg';
import heaS from '../img/section/section-hea.jpg';
import comS from '../img/section/section-com.jpg';
import envS from '../img/section/section-env.jpg';
import powS from '../img/section/section-pow.png';


export default function Section({ team, title }) {
    const TITLE = title.toUpperCase();
    const [image, setImage ] = useState(filler);

    useEffect(() => {
        switch(team) {
            case 'ENVIRONMENT':
                setImage(envS);
                break;
                case 'COMMUNITY':
                setImage(comS);
                break;
                case 'POWER':
                setImage(powS);
                break;
                case 'HEALTHCARE':
                setImage(heaS);
                break;
            case 'GOVERNANCE':
                setImage(govS);
                break;

        }
      }, []);

    // .toUpperCase().replace(/[-_]/g, ' ');
    return (
        <>
            <div class="circle-container">
                <div class="circle yellow"></div>
                <div class="circle orange"></div>
                <div class="circle red"></div>
                <div class="circle cyan"></div>
                <div class="circle blue"></div>
            </div>

            <div className="section-wrapper">
                <div id="section" 
                style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${ image })`}}>
                    <h2 className="subhead">{TITLE}</h2>
                </div>
            </div>
        </> 
    );
}