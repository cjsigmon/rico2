import * as React from "react";
import '../styles.css';
import govImage from '../img/governance.jpg'; // import the image file
import powImage from '../img/power.png';
import healthImage from '../img/healthcare.jpg';
import envImage from '../img/environment.jpg';
import comImage from '../img/community.jpg';
import { useStaticQuery, graphql } from "gatsby"
import MyContext from "../MyContext";
import { useContext, useEffect, useState } from "react";

export default function ReadMore(props) {
    const { strI } = props;
    const { myBoolean, setMyBoolean } = useContext(MyContext);
    const [ exclude, setExclude] = useState(" ");
    const envLink = "/against-the-current";
    const comLink = "/community";
    const govLink = "/governance";
    const powLink = "/paso-a-paso";
    const healthLink = "/road-to-recovery";

    const ambLink = "/ambiente";
    const cmdLink = "/comunidad";
    const gobLink = "/gobernancia"
    const fueLink = "/fuerza";
    const salLink = "/salud";

    useEffect(() => {
        if (strI == 12 || (strI > 5 && strI < 11)) {
          setMyBoolean(false);
        } 
        switch(strI) {
            
            case 1:
              setExclude("STEP BY STEP");
              break;
      
              case 2:
                setExclude("A CULTURAL ANCHOR");
                break;
      
                case 3:
                    setExclude("RESISTANT, NOT RESILIENT");
              break;
      
              case 4:
                setExclude("SHIFTING TIDES");
              break;
      
              case 5:
                setExclude("ROAD TO RECOVERY");
              break;
      
              case 6:
                setExclude("PASO A PASO");
              break;
      
              case 7:
                setExclude("COMUNIDAD");
              break;
      
              case 8:
                setExclude("GOBERNANCIA");
              break;
      
              case 9:
                setExclude("LA PEQUEÑA GUERRA");
              break;
      
              case 10:
                setExclude("SALUD");
              break;
          } 
    }, []);
    

    return (
        <div className="read-more">
            <div class="circle-container">
                <div class="circle yellow"></div>
                <div class="circle orange"></div>
                <div class="circle red"></div>
                <div class="circle cyan"></div>
                <div class="circle blue"></div>
            </div>

            {myBoolean ? <h2>MORE FROM ISLA DE FUERZA</h2>
            : <h2>MÁS DE ISLA DE FUERZA</h2>}
           

            {myBoolean ? <div className="more-thumbs">
                {exclude === 'STEP BY STEP' ? <></> :  <a href={powLink}><div className="readmore-hold"><img src={powImage}></img><h4 id="powread">STEP BY STEP</h4></div></a>}
                {exclude === 'A CULTURAL ANCHOR' ? <></> :  <a href={comLink}><div className="readmore-hold"><img src={comImage}></img><h4 id="comread">A CULTURAL ANCHOR</h4></div></a>}
                {exclude === 'RESISTANT, NOT RESILIENT' ? <></> :  <a href={govLink}><div className="readmore-hold"><img src={govImage}></img><h4 id="govread">RESISTANT, NOT RESILIENT</h4></div></a>}
                {exclude === 'SHIFTING TIDES' ? <></> :  <a href={envLink}><div className="readmore-hold"><img src={envImage}></img><h4 id="envread">ERODING AWAY</h4></div></a>}
                {exclude === 'ROAD TO RECOVERY' ? <></> :  <a href={healthLink}><div className="readmore-hold"><img src={healthImage}></img><h4 id="hearead">ROAD TO RECOVERY</h4></div></a>}
            </div> : <div className="more-thumbs">
                {exclude === 'PASO A PASO' ? <></> :  <a href={fueLink}><div className="readmore-hold"><img src={powImage}></img><h4 id="powread">PASO A PASO</h4></div></a>}
                {exclude === 'COMUNIDAD' ? <></> :  <a href={cmdLink}><div className="readmore-hold"><img src={comImage}></img><h4 id="comread">COMUNIDAD</h4></div></a>}
                {exclude === 'GOBERNANCIA' ? <></> :  <a href={gobLink}><div className="readmore-hold"><img src={govImage}></img><h4 id="govread">GOBERNANCIA</h4></div></a>}
                {exclude === 'AMBIENTE' ? <></> :  <a href={ambLink}><div className="readmore-hold"><img src={envImage}></img><h4 id="envread">LA PEQUEÑA GUERRA</h4></div></a>}
                {exclude === 'SALUD' ? <></> :  <a href={salLink}><div className="readmore-hold"><img src={healthImage}></img><h4 id="hearead">SALUD</h4></div></a>}
            </div> }
            
            
        </div>
        
       
    );
}