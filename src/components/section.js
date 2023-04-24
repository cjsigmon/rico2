import * as React from "react";
import { useState, useRef, useEffect } from "react";
import '../styles.css';
import filler from '../img/section/adjuntas-lago-garzas.png'; 
import govS from '../img/section/section-gov.jpg';// import the image file

export default function Section({ team, title }) {
    const TITLE = title.toUpperCase();
    const [image, setImage ] = useState(filler);

    useEffect(() => {
        switch(team) {
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