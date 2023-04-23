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



export default function About() {
    const [hidRep, setHidRep] = useState(false);
    const [hidPho, setHidPho] = useState(false);
    const [hidDes, setHidDes] = useState(false);
    const [hidDev, setHidDev] = useState(false);
    const [hidAdp, setHidAdp] = useState(false);
    const [hidCon, setHidCon] = useState(false);
    const [hidCoach, setHidCoach] = useState(false);
    

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
            <p className="abt-body-t">Taking pictures of sharks can be a thrilling experience, but it also requires safety precautions. Researching the species, using a protective cage or staying at a safe distance, and securing your equipment are essential to minimize the risk of harm. By respecting the natural environment and the sharks, you can capture stunning photos while keeping everyone safe.
            <br></br><br></br>
            Capturing pictures of sharks can be a rewarding experience, but safety should always come first. Avoid wearing shiny or reflective jewelry, and do not disturb the sharks or their habitat. With proper preparation and safety measures in place, you can enjoy the excitement of photographing these magnificent creatures while protecting both yourself and the sharks.
            </p>
            <div class="circle-container">
                <div className="circle yellow"></div>
                <div className="circle orange"></div>
                <div className="circle red"></div>
                <div className="circle cyan"></div>
                <div className="circle blue"></div>
            </div>

            <h2 id="meet-team">Meet the Team</h2>
            <div id="cards-sect">
                <div id="role-btns">
                    <button className="sort" id="all-btn" onClick={handleAllClick}><b>ALL</b></button>
                    <button className="sort" onClick={handleRepClick}>Reporting</button>
                    <button className="sort" onClick={handlePhoClick}>Photo & Video</button>
                    <button className="sort" onClick={handleDesClick}>Design</button>
                    <button className="sort" onClick={handleDevClick}>Development</button>
                    <button className="sort" onClick={handleAdpClick}>Ad/PR</button>
                    <button className="sort" onClick={handleCoachClick}>Coaches</button>
                    <button className="sort" onClick={handleConClick}>Contributors</button>
                </div>
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
                            src={alex}/>
                        </div>
                        <h6 className="name-here">Alex Kormann</h6>
                        <p className="team-role">Coach</p>
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
                            onMouseLeave={handleMouseOut}
                            src={amanda}/></div>
                        <h6 className="name-here">Amanda Jiménez Berríos</h6>
                        <p className="team-role">Contributor</p>
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
                        <p className="team-role">Photo</p>
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
                        <p className="team-role">Ad/PR</p>
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
                        <p className="team-role">Coach</p>
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
                        <p className="team-role">Development</p>
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
                        <p className="team-role">Design</p>
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
                        <p className="team-role">Photo</p>
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
                        <p className="team-role">Reporter</p>
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
                        <p className="team-role">Ad/PR</p>
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
                        <p className="team-role">Design</p>
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
                        <p className="team-role">Design</p>
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
                        <p className="team-role">Photo</p>
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
                        <p className="team-role">Contributor</p>
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
                        <p className="team-role">Design/Dev</p>
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
                        <p className="team-role">Contributor</p>
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
                        <p className="team-role">Trip planner</p>
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
                        <p className="team-role">Reporter</p>
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
                        <p className="team-role">Reporter</p>
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
                        <p className="team-role">Contributor</p>
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
                        <p className="team-role">Design/Dev</p>
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
                        <p className="team-role">Coach</p>
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
                        <p className="team-role">Reporter</p>
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
                        <p className="team-role">Coach</p>
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
                        <p className="team-role">Photo</p>
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
                        <p className="team-role">Reporter</p>
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
                        <p className="team-role">Contributor</p>
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
