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
import florencia from '../video-headshot/FlorenciaHS.mp4';
import gerard from '../video-headshot/GerardHS.mp4';
import gina from '../video-headshot/GinaHS.mp4';
import giuli from '../video-headshot/GiuliHS.mp4';
import heather from '../video-headshot/HeatherHS.mp4';
import ivanna from '../video-headshot/IvannaHS.mp4';
import jacob from '../video-headshot/JacobHS.mp4';
import jennifer from '../video-headshot/JenniferHS.mp4';
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
import amandaPoster from '../img/headshot-stills/amanda-still.png';
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
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            id="alex-vid"
                            src={alex}/>
                        </div>
                        <h6 className="name-here">Alex Kormann</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
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
                            src={ally}/></div>
                        <h6 className="name-here">Ally Rabon</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
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
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                <div className={`card vid hea ${hidPho ? 'hidden' : 'vis'}`}>
                        <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={angelina}/></div>
                        <h6 className="name-here">Angelina Katsanis</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid env ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={ann}/></div>
                        <h6 className="name-here">Ann Licharew</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={anna}/></div>
                        <h6 className="name-here">Anna Connors</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card adp hea ${hidAdp ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={bella}/></div>
                        <h6 className="name-here">Bella Cankurtaran</h6>
                        <p className="team-role">{adPR}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={brooke}/></div>
                        <h6 className="name-here">Brooke Fisher</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card dev hea ${hidDev ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={caleb}/></div>
                        <h6 className="name-here">Caleb Sigmon</h6>
                        <p className="team-role">{devv}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card des pow ${hidDes ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={clara}/></div>
                        <h6 className="name-here">Clara Mello</h6>
                        <p className="team-role">{dez}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={cynthia}/></div>
                        <h6 className="name-here">Cynthia Liu</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho env ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={dylan}/></div>
                        <h6 className="name-here">Dylan Thiessen</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                <div className={`card rep gov ${hidRep ? 'hidden' : 'vis'}`}>
                <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={emily}/></div>
                        <h6 className="name-here">Emily Gajda</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid com ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={fallon}/></div>
                        <h6 className="name-here">Fallon Maher</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card adp com ${hidAdp ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={florencia}/></div>
                        <h6 className="name-here">Florencia Loncán</h6>
                        <p className="team-role">{adPR}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid pow ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={gerard}/></div>
                        <h6 className="name-here">Gerard Millman</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card des env ${hidDes ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={gina}/></div>
                        <h6 className="name-here">Gina Flow</h6>
                        <p className="team-role">{dez}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card des gov ${hidDes ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={giuli}/></div>
                        <h6 className="name-here">Giuli Hoffmann</h6>
                        <p className="team-role">{dez}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho hea ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={heather}/></div>
                        <h6 className="name-here">Heather Diehl</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={ivanna}/></div>
                        <h6 className="name-here">Ivanna</h6>
                        <p className="team-role">{conn}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho pow ${(hidDes && hidDev) ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={jacob}/></div>
                        <h6 className="name-here">Jacob Turner</h6>
                        <p className="team-role">{dezDev}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid hea ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={jennifer}/></div>
                        <h6 className="name-here">Jennifer Tran</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card con env ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={prstud}/></div>
                        <h6 className="name-here">Karina Torres Torres</h6>
                        <p className="team-role">{conn}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid pow ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={lauren}/></div>
                        <h6 className="name-here">Lauren Cmiel</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={liana}/></div>
                        <h6 className="name-here">Liana Pinner</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep com ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={liv}/></div>
                        <h6 className="name-here">Liv Reilly</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep hea ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={lucas}/></div>
                        <h6 className="name-here">Lucas Thomae</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={marivi}/></div>
                        <h6 className="name-here">Marivi</h6>
                        <p className="team-role">{conn}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep com ${(hidDev && hidDes) ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={nina}/></div>
                        <h6 className="name-here">Nina Scott</h6>
                        <p className="team-role">{dezDev}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={pat}/></div>
                        <h6 className="name-here">Patrick Davison</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card rep ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={preston}/></div>
                        <h6 className="name-here">Preston Fore</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid gov ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={quincy}/></div>
                        <h6 className="name-here">Quincy Marks</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card coach ${hidCoach ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={ryan}/></div>
                        <h6 className="name-here">Ryan Thornburg</h6>
                        <p className="team-role">{coach}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card pho gov ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={sam}/></div>
                        <h6 className="name-here">Samantha Lewis</h6>
                        <p className="team-role">{photo}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card vid env ${hidPho ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={taylor}/></div>
                        <h6 className="name-here">Taylor Holbrooks</h6>
                        <p className="team-role">Video</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>
                    

                    <div className={`card rep env ${hidRep ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={thomas}/></div>
                        <h6 className="name-here">Thomas Moody-Jones</h6>
                        <p className="team-role">{repp}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>

                    <div className={`card con pow ${hidCon ? 'hidden' : 'vis'}`}>
                    <div className="pic-box"><video
                            loop
                            preload="metadata"
                            muted={true}
                            onMouseOver={event => event.target.play()}
                            onMouseLeave={handleMouseOut}
                            src={yondi}/></div>
                        <h6 className="name-here">Yondy Agosto García</h6>
                        <p className="team-role">{conn}</p>
                        <div className="socials">
                            <a href="https://www.instagram.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/unc-global-storytelling/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="https://www.facebook.com/uncglobalstory/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    );
}
