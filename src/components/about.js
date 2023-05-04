import * as React from "react";
import '../about.css';
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import alex from '../video-headshot/AlexHS.mp4';
import ally from '../video-headshot/AllyHS.mp4';
import amanda from '../video-headshot/AmandaHS.mp4';
import angelina from '../video-headshot/AngelinaHS.mp4';
import anna from '../video-headshot/AnnaHS.mp4';
import ann from '../video-headshot/AnnHS.mp4';
import bella from '../video-headshot/BellaHS.mp4';
import brooke from '../video-headshot/brookeHS.mp4';
import caleb from '../video-headshot/calebHS.mp4';
import clara from '../video-headshot/ClaraHS.mp4';
import cynthia from '../video-headshot/CynthiaHS.mp4';
import dylan from '../video-headshot/DylanHS.mp4';
import emily from '../video-headshot/EmilyHS.mp4';
import fallon from '../video-headshot/FallonHS.mp4';

import florencia from '../video-headshot/FlorenciaEditHS.mp4';
import gerard from '../video-headshot/GerardHS.mp4';
import gina from '../video-headshot/GinaHS.mp4';
import giuli from '../video-headshot/GiuliHS.mp4';
import heather from '../video-headshot/HeatherHS.mp4';
import ivanna from '../video-headshot/IvannaHS.mp4';
import jacob from '../video-headshot/JacobHS.mp4';
import jennifer from '../video-headshot/JenniferEditHS.mp4';
import lauren from '../video-headshot/LaurenHS.mp4';
import liana from '../video-headshot/Liana.mp4';
import liv from '../video-headshot/LivHS.mp4';
import lucas from '../video-headshot/LucasHS.mp4';
import marivi from '../video-headshot/Marivi.mp4';
import nina from '../video-headshot/NinaHS.mp4';
import pat from '../video-headshot/PatHS.mp4';
import preston from '../video-headshot/PrestonHS.mp4';
import prstud from '../video-headshot/PRStudentHS.mp4';
import quincy from '../video-headshot/QuincyHS.mp4';
import ryan from '../video-headshot/Ryan2HS.mp4';
import ryan2 from '../video-headshot/RyanHS.mp4';
import sam from '../video-headshot/SamanthaHS.mp4';
import taylor from '../video-headshot/TaylorHS.mp4';
import thomas from '../video-headshot/ThomasHS.mp4';
import yondi from '../video-headshot/YondiHS.mp4';
import alexPoster from '../img/headshot-stills/alex.jpg';
import allyPoster from '../img/headshot-stills/ally.jpg';
import angelinaPoster from '../img/headshot-stills/angelina.jpg';
import annPoster from '../img/headshot-stills/ann.jpg';
import annaPoster from '../img/headshot-stills/anna.jpg';
import bellaPoster from '../img/headshot-stills/bella.jpg';

import brookePoster from '../img/headshot-stills/brooke.jpg';
import calebPoster from '../img/headshot-stills/caleb.jpg';
import claraPoster from '../img/headshot-stills/clara.jpg';
import cynthiaPoster from '../img/headshot-stills/cynthia.jpg';
import dylanPoster from '../img/headshot-stills/dylan.jpg';
import emilyPoster from '../img/headshot-stills/emily.jpg';
import fallonPoster from '../img/headshot-stills/fallon.jpg';
import gerardPoster from '../img/headshot-stills/gerard.jpg';
import ginaPoster from '../img/headshot-stills/gina.jpg';
import giuliPoster from '../img/headshot-stills/giuli.jpg';
import heatherPoster from '../img/headshot-stills/heather.jpg';
import ivannaPoster from '../img/headshot-stills/ivanna.jpg';
import jacobPoster from '../img/headshot-stills/jacob.jpg';
import karinaPoster from '../img/headshot-stills/karina.jpg';
import laurenPoster from '../img/headshot-stills/lauren.jpg';
import lianaPoster from '../img/headshot-stills/liana.jpg';
import livPoster from '../img/headshot-stills/liv.jpg';
import lucasPoster from '../img/headshot-stills/lucas.jpg';
import mariviPoster from '../img/headshot-stills/marivi.jpg';
import ninaPoster from '../img/headshot-stills/nina.jpg';
import patPoster from '../img/headshot-stills/pat.jpg';
import prestonPoster from '../img/headshot-stills/preston.jpg';
import quincyPoster from '../img/headshot-stills/quincy.jpg';
import ryanPoster from '../img/headshot-stills/ryan.jpg';
import samPoster from '../img/headshot-stills/sam.jpg';
import taylorPoster from '../img/headshot-stills/taylor.jpg';
import thomasPoster from '../img/headshot-stills/thomas.jpg';
import yondyPoster from '../img/headshot-stills/yondy.jpg';

import amandaPoster from '../img/headshot-stills/amanda-still.png';
import jenniferPoster from '../img/headshot-stills/jennifer.png';
import florenciaPoster from '../img/headshot-stills/florencia.png';
import carlosPoster from '../img/headshot-stills/carlos-still.jpg';
import hermesPoster from '../img/headshot-stills/hermes-still.jpg';
import { set } from "lodash";



export default function About(props) {
    const { strI } = props;
    const [hidRep, setHidRep] = useState(false);
    const [hidPho, setHidPho] = useState(false);
    const [hidDes, setHidDes] = useState(false);
    const [hidDev, setHidDev] = useState(false);
    const [hidAdp, setHidAdp] = useState(false);
    const [hidCon, setHidCon] = useState(false);
    const [hidCoach, setHidCoach] = useState(false);
    const [ english, setEnglish ] = useState(true);
    const [ coach, setCoach ] = useState("Coach");
    const [ adPR, setAdPR ] = useState("Ad/PR");
    const [ repp, setRepp ] = useState("Reporter");
    const [ photo, setPhoto ] = useState("Photo");
    const [ dez, setDez ] = useState("Design");
    const [ dezDev, setDezDev ] = useState("Design/Development");
    const [ devv, setDevv ] = useState("Development");
    const [ conn, setConn ] = useState("Contributor");

    useEffect(() => {
        if (strI == 12) {
          setEnglish(false);
          setCoach("Entrenamiento");
          setAdPR("Relaciones Públicas");
          setRepp("Reportando");
          setPhoto("Fotografía");
          setDez("Diseño");
          setDezDev("Diseño/Desarrollo");
          setDevv("Desarrollo");
          setConn("Contribución");
        } 
    }, [english]);
    

    const handleAllClick = () => {
        setHidPho(false);
        setHidDes(false);
        setHidDev(false);
        setHidCon(false);
        setHidCoach(false);
        setHidRep(false);
        setHidAdp(false);
      };

    const handleRepClick = () => {
        setHidPho(true);
        setHidDes(true);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(true);
        setHidRep(false);
        setHidAdp(true);
      };
      const handlePhoClick = () => {
        setHidRep(true);
        setHidPho(false);
        setHidDes(true);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(true);
        setHidAdp(true);
      };
      const handleDesClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(false);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(true);
        setHidAdp(true);
      };
      const handleDevClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(true);
        setHidDev(false);
        setHidCon(true);
        setHidCoach(true);
        setHidAdp(true);
      };
      const handleAdpClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(true);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(true);
        setHidAdp(false);
      };
      const handleCoachClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(true);
        setHidDev(true);
        setHidCon(true);
        setHidCoach(false);
        setHidAdp(true);
      };
      const handleConClick = () => {
        setHidRep(true);
        setHidPho(true);
        setHidDes(true);
        setHidDev(true);
        setHidCon(false);
        setHidCoach(true);
        setHidAdp(true);
      };

  function handleMouseOut(event) {
    event.target.pause();
    event.target.currentTime = 0; // set the playback time to 5 seconds
  }
    
    return (
        <div className="abt-wrapper">
            {english ?  <p className="abt-body-t">
                Hello there! We are a group of storytellers consisting of student videographers and photographers, web designers and developers, reporters and faculty members. Our shared mission is to amplify the voices of Puerto Ricans, and to share their stories of strength and hope through our multimedia project: Isla de Fuerza.
            <br></br><br></br>
In 2018, we reported on the <a href="https://aftermath.unc.edu/" target="_blank">Aftermath</a> of Hurricane Maria. Five years later, we’ve returned to continue learning about the culture and people of the island through the lenses of power, community, governance, environment and healthcare. We hope to inspire others to join the conversation through the stories we’ve gathered.
            <br></br><br></br>
As part of an annual project by <a href="http://hussman.unc.edu/" target="_blank">UNC-Chapel Hill’s Hussman School of Journalism and Media</a>, we have the privilege of learning firsthand about the rewards and challenges of reporting on diverse cultures. As aspiring journalists, we are dedicated to collaborating as a team to deliver impactful multimedia work that sheds light on the stories shaping our global community.
            </p> : <p className="abt-body-t">
            ¡Hola! Somos un grupo de narradores compuesto por estudiantes de fotografía y video, diseñadores y desarrolladores web, reporteros y profesores. Nuestra misión compartida es amplificar las voces de los puertorriqueños y compartir sus historias de fortaleza y esperanza a través de nuestro proyecto multimedia: Isla de Fuerza.
            <br></br><br></br>
            En 2018, informamos sobre las <a href="https://aftermath.unc.edu/" target="_blank">Aftermath (Secuelas)</a> del huracán María. Cinco años después, hemos regresado para continuar aprendiendo sobre la cultura y la gente de la isla a través de los lentes del poder, la comunidad, la gobernanza, el medio ambiente y la atención médica. Esperamos inspirar a otros a unirse a la conversación a través de las historias que hemos recopilado.
            <br></br><br></br>
            Como parte de un proyecto anual de la <a href="http://hussman.unc.edu/" target="_blank">Escuela de Periodismo y Medios Hussman de UNC-Chapel Hill</a>, tenemos el privilegio de aprender de primera mano sobre las recompensas y los desafíos de informar sobre diversas culturas. Como aspirantes a periodistas, estamos dedicados a colaborar como equipo para ofrecer un trabajo multimedia impactante que arroje luz sobre las historias que dan forma a nuestra comunidad global.
                </p>}
    
           
            <div class="circle-container">
                <div className="circle yellow"></div>
                <div className="circle orange"></div>
                <div className="circle red"></div>
                <div className="circle cyan"></div>
                <div className="circle blue"></div>
            </div>
            {english ?  <h2 id="meet-team">Meet the Team</h2> :
            <h2 id="meet-team">Conocer al Equipo</h2>}

           
            <div id="cards-sect">
                {english ? <div id="role-btns">
                    <button className="sort" id="all-btn" onClick={handleAllClick}><b>ALL</b></button>
                    <button className="sort" onClick={handleRepClick}>Reporting</button>
                    <button className="sort" onClick={handlePhoClick}>Photo & Video</button>
                    <button className="sort" onClick={handleDesClick}>Design</button>
                    <button className="sort" onClick={handleDevClick}>Development</button>
                    <button className="sort" onClick={handleAdpClick}>Ad/PR</button>
                    <button className="sort" onClick={handleCoachClick}>Coaches</button>
                    <button className="sort" onClick={handleConClick}>Contributors</button>
                </div>: 
                <div id="role-btns">
                <button className="sort" id="all-btn" onClick={handleAllClick}><b>ALL</b></button>
                <button className="sort" onClick={handleRepClick}>Reportando</button>
                <button className="sort" onClick={handlePhoClick}>Foto & Video</button>
                <button className="sort" onClick={handleDesClick}>Diseño</button>
                <button className="sort" onClick={handleDevClick}>Desarrollo</button>
                <button className="sort" onClick={handleAdpClick}>Publicidad/Relaciones Publicas</button>
                <button className="sort" onClick={handleCoachClick}>Entrenamiento</button>
                <button className="sort" onClick={handleConClick}>Contribuyentes</button>
            </div>}

                
                <div id="cards-holder">

                 

{/* here's where cards begin */}
                <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                        <div className="pic-box">
                            <video
                            loo
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            id="alex-vid"
                            poster={alexPoster}
                            src={alex}/>
                        </div>
                        <h6 className="name-here">Alex Kormann</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/alexkormann12/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/alex-kormann/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/alex.kormann.94/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://twitter.com/KormannAlex" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid gov ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box">
                        <video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={allyPoster}
                            src={ally}/></div>
                        <h6 className="name-here">Ally Rabon</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/allyrabonmedia/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/allysonrabon/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/allyson.rabon/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                        </div>
                    </div>

                    <div className={`card con gov ${hidCon ? 'hidden' : 'vis'}`}>
                        <div className="pic-box">
                        <video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={event => {event.target.pause();
                                event.target.currentTime = 3;} }
                            poster={amandaPoster}
                            src={amanda}/></div>
                        <h6 className="name-here">Amanda Jiménez Berríos</h6>
                        <p className="team-role">{conn}</p>
                        <p className="team-role" style={{fontSize: "1.4vh"}}>Universidad de Sagrado Corazón</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/amanda.9197/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/amanda-jimenez-berrios-699588263" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                <div className={`card vid hea ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={angelinaPoster}
                            src={angelina}/></div>
                        <h6 className="name-here">Angelina Katsanis</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/akatsmedia/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/angelinakatsanis/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/profile.php?id=100004362409467" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://twitter.com/akatsmedia" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid env ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={annPoster}
                            src={ann}/></div>
                        <h6 className="name-here">Ann Licharew</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/ann-licharew-54592b166/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={annaPoster}
                            src={anna}/></div>
                        <h6 className="name-here">Anna Connors</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/annaconnorsphoto/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/anna-connors-b81476181/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/anna.connors.315" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                        </div>
                    </div>

                    <div className={`card adp hea ${hidAdp ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={bellaPoster}
                            src={bella}/></div>
                        <h6 className="name-here">Bella Cankurtaran</h6>
                        <p className="team-role">{adPR}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/bellacankurtaran/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/bella-cankurtaran/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/bella.cankurtaran" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={brookePoster}
                            src={brooke}/></div>
                        <h6 className="name-here">Brooke Fisher</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/brookenfisher/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://linkedin.com/in/brooke-n-fisher/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/brookenf" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                        </div>
                    </div>

                    <div className={`card dev hea ${hidDev ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={calebPoster}
                            src={caleb}/></div>
                        <h6 className="name-here">Caleb Sigmon</h6>
                        <p className="team-role">{devv}</p>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/calebsigmon/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card con com ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            poster={carlosPoster}
                            src={""}/></div>
                        <h6 className="name-here">Carlos Ramírez Brito</h6>
                        <p className="team-role">{conn}</p>
                        <p className="team-role" style={{fontSize: "1.4vh"}}>Universidad de Sagrado Corazón</p>
                        <div className="socials">
                        </div>
                    </div>   

                    <div className={`card des pow ${hidDes ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={claraPoster}
                            src={clara}/></div>
                        <h6 className="name-here">Clara Mello</h6>
                        <p className="team-role">{dez}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/clahruh/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/clara-ronza-motta-mello-b05aa921b/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={cynthiaPoster}
                            src={cynthia}/></div>
                        <h6 className="name-here">Cynthia Liu</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/liiuphotography/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/cynthialiiu/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://twitter.com/cynthiialiu" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho env ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={dylanPoster}
                            src={dylan}/></div>
                        <h6 className="name-here">Dylan Thiessen</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/thiessenphotos/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/dylan-thiessen/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                <div className={`card rep gov ${hidRep ? 'hidden' : 'vis'}`}>
                <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={emilyPoster}
                            src={emily}/></div>
                        <h6 className="name-here">Emily Gajda</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/emilycgaj/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/emily-gajda/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/people/Emily-Gajda/100005384116794/?paipv=0&eav=Afbe2_vpWF4Vjs2uxjEriQPce3xER0FEWuJQfoV1nxAoiw1daAbzGCC50qA0emQK7lY&_rdr" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://twitter.com/emilycgajda" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={fallonPoster}
                            src={fallon}/></div>
                        <h6 className="name-here">Fallon Maher</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/falperi/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/fallon-maher/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card adp com ${hidAdp ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            poster={florenciaPoster}
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={event => {event.target.pause();
                                event.target.currentTime = 0.5;}}
                            src={florencia}/></div>
                        <h6 className="name-here">Florencia Loncán</h6>
                        <p className="team-role">{adPR}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/florencia.loncan/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/florencia-lonc%C3%A1n-a58859197" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/profile.php?id=100010885666336/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                        </div>
                    </div>

                    <div className={`card vid pow ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={gerardPoster}
                            src={gerard}/></div>
                        <h6 className="name-here">Gerard Millman</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/gerardmillman/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/gerard-millman-38674414a/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/gerard.millman" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                        </div>
                    </div>

                    <div className={`card des env ${hidDes ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={ginaPoster}
                            src={gina}/></div>
                        <h6 className="name-here">Gina Flow</h6>
                        <p className="team-role">{dez}</p>
                        <div className="socials">
                        </div>
                    </div>

                    <div className={`card des gov ${hidDes ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={giuliPoster}
                            src={giuli}/></div>
                        <h6 className="name-here">Giuli Hoffmann</h6>
                        <p className="team-role">{dez}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/giuli.hoffmann/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/giuli-hoffmann-27752422a/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card pho hea ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={heatherPoster}
                            src={heather}/></div>
                        <h6 className="name-here">Heather Diehl</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/diehl_photography/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/heather-diehl-413311233/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            poster={hermesPoster}
                            src={""}/></div>
                        <h6 className="name-here">Hermes Ayala</h6>
                        <p className="team-role">{coach}</p>
                        <p className="team-role" style={{fontSize: "2vh"}}></p>
                        <div className="socials">
                            <a href="https://www.instagram.com/hermesayalaaqui/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/hermes-ayala-230b5a9b/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://twitter.com/traficopesado" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>  

                    <div className={`card coach ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={ivannaPoster}
                            src={ivanna}/></div>
                        <h6 className="name-here">Ivanna Diaz Rivera</h6>
                        <p className="team-role">{conn}</p>
                        <p className="team-role" style={{fontSize: "1.4vh"}}>University of Puerto Rico, Rio Piedras</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/ivannaadiaz/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
                    </div>

                    <div className={`card pho pow ${(hidDes && hidDev) ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={jacobPoster}
                            src={jacob}/></div>
                        <h6 className="name-here">Jacob Turner</h6>
                        <p className="team-role">{dezDev}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/jacob.turn/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/jacob-turner-7521a8198/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card vid hea ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={event => {event.target.pause();
                                event.target.currentTime = 3;} }
                            poster={jenniferPoster}
                            src={jennifer}/></div>
                        <h6 className="name-here">Jennifer Tran</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/jens_cameraroll/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/jennifertran413/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card con env ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={karinaPoster}
                            src={prstud}/></div>
                        <h6 className="name-here">Karina Torres Torres</h6>
                        <p className="team-role">{conn}</p>
                        <p className="team-role" style={{fontSize: "1.4vh"}}>Universidad de Sagrado Corazón</p>
                        <div className="socials">
                        </div>
                    </div>

                    <div className={`card vid pow ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={laurenPoster}
                            src={lauren}/></div>
                        <h6 className="name-here">Lauren Cmiel</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/laurens__lens_/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/laurencmiel/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={lianaPoster}
                            src={liana}/></div>
                        <h6 className="name-here">Liana Pinner</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                        </div>
                    </div>

                    <div className={`card rep com ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={livPoster}
                            src={liv}/></div>
                        <h6 className="name-here">Liv Reilly</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/livreills/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/liv-reilly-2b9163220/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.twitter.com/livvreilly/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep hea ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={lucasPoster}
                            src={lucas}/></div>
                        <h6 className="name-here">Lucas Thomae</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/lucasthomae/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/lucas-thomae/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.twitter.com/lucasthomae/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={mariviPoster}
                            src={marivi}/></div>
                        <h6 className="name-here">María V. Ledesma Vazquez</h6>
                        <p className="team-role">{conn}</p>
                        <p className="team-role" style={{fontSize: "1.4vh"}}>Universidad de Sagrado Corazón</p>
                        <div className="socials">
                        </div>
                    </div>

                    <div className={`card rep com ${(hidDev && hidDes) ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={ninaPoster}
                            src={nina}/></div>
                        <h6 className="name-here">Nina Scott</h6>
                        <p className="team-role">{dezDev}</p>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/nina-s-unc/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={patPoster}
                            src={pat}/></div>
                        <h6 className="name-here">Patrick Davison</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/patdavison/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/patrickdavison/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card rep ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={prestonPoster}
                            src={preston}/></div>
                        <h6 className="name-here">Preston Fore</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/preston.fore/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/forepreston/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.twitter.com/forepreston/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid gov ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={quincyPoster}
                            src={quincy}/></div>
                        <h6 className="name-here">Quincy Marks</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/quincyymarks/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/quincy-marks/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={ryanPoster}
                            src={ryan}/></div>
                        <h6 className="name-here">Ryan Thornburg</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/ryanthornburg" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>

                    <div className={`card pho gov ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={samPoster}
                            src={sam}/></div>
                        <h6 className="name-here">Samantha Lewis</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/sjlewisphoto /" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/samantha-lewis-78645b237/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/sam.lew.583" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.twitter.com/samlewis03/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid env ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={taylorPoster}
                            src={taylor}/></div>
                        <h6 className="name-here">Taylor Holbrooks</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/th.photoarchives/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/taylor-holbrooks/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>
                    

                    <div className={`card rep env ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={thomasPoster}
                            src={thomas}/></div>
                        <h6 className="name-here">Thomas Moody-Jones</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/thomasmoodyjones/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/in/thomas-moody-jones/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.twitter.com/ThomasMoodyJ/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card con pow ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            poster={yondyPoster}
                            src={yondi}/></div>
                        <h6 className="name-here">Yondy Agosto García</h6>
                        <p className="team-role">{conn}</p>
                        <p className="team-role" style={{fontSize: "1.4vh"}}>Universidad de Sagrado Corazón</p>
                        <div className="socials">
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    );
}
