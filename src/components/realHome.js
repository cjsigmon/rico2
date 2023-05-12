import * as React from "react";
import { useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Navbar from "../components/navbar";
import '../styles.css';
import HeaderVid from "./headervid";
import Footer from "../components/footer";
import MyContext from "../MyContext";
import VideoComp from "./videoComp";

const HomePage = () =>  {
  const { myBoolean, setMyBoolean } = useContext(MyContext);
    const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {id: {nin: "cG9zdDo1OA=="}}, sort: {date: DESC}) {
        nodes {
          id
          excerpt
          title
          uri
        }
      }
    }
    `)
        const { allWpPost } = data;  

        

        
  
        return (
            <main>
            <Navbar strI={0} />
            <HeaderVid />

            <div className="post-grid" id="homepage-txt">
              <div className="l-mar"></div>
              <div></div>
              <div id="main-about" className="post-text">
              </div>
              <div className="r-stry-mar"></div>
              <div className="r-mar"></div>
             </div>

            <VideoComp left={0} color={'white'} link={"https://player.vimeo.com/video/820916929?h=f4fc4a47fa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}/>
            
           {myBoolean ?
           <>
           <div className="home-story-pics" id={"POWER"}>
           <div className={"clickme bl"} id="rcl">
             <Link className="cl-title" to={ "/step-by-step" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"left-title"}>
             <Link to={ "/step-by-step" }><h1 className="home-title" id={"POWER-home-title"}>STEP BY STEP</h1></Link>
             <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Puerto Rico’s electrical recovery and the efforts for a sustainable future</p>
           </div>
         </div>
         <div className="home-story-pics" id={"COMMUNITY"}>
           <div className={"clickme bl"} id="lcl">
             <Link className="cl-title" to={ "/a-cultural-anchor" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"right-title"}>
             <Link to={ "/a-cultural-anchor" }><h1 className="home-title" id={"COMMUNITY-home-title"}>A CULTURAL ANCHOR</h1></Link>
             <p className={"home-subtitle rsub"} id={"COMMUNITY-subtitle"}>As schools close all across the island, community centers reclaim their spaces</p>
           </div>
         </div>

         <div className="home-story-pics" id={"GOVERNANCE"}>
           <div className={"clickme bl"} id="rcl">
             <Link className="cl-title" to={ "/resistant-not-resilient" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"left-title"}>
             <Link to={ "/resistant-not-resilient" }><h1 className="home-title" id={"GOVERNANCE-home-title"}>RESISTANT, NOT RESILIENT</h1></Link>
             <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Loíza builds its own support systems while looking to its future</p>
           </div>
         </div>

         <div className="home-story-pics" id={"ENVIRONMENT"}>
           <div className={"clickme wh"} id="lcl">
             <Link className="cl-title" to={ "/shifting-tides" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"right-title"}>
             <Link to={ "/shifting-tides" }><h1 className="home-title" id={"ENVIRONMENT-home-title"}>SHIFTING TIDES</h1></Link>
             <p className={"home-subtitle rsub"} id={"ENVIRONMENT-subtitle"}>A community’s fight against waves of environmental injustice and unjust development</p>
           </div>
         </div>

         <div className="home-story-pics" id={"HEALTHCARE"}>
           <div className={"clickme wh"} id="rcl">
             <Link className="cl-title" to={ "/road-to-recovery" }>
               <h5>READ THIS STORY</h5>
             </Link>
           </div>
           <div className={"left-title"}>
             <Link to={ "/road-to-recovery" }><h1 className="home-title" id={"HEALTHCARE-home-title"}>ROAD TO RECOVERY</h1></Link>
             <p className={"home-subtitle lsub"} id={"HEALTHCARE-subtitle"}>How one organization is working to address Puerto Rico’s worsening opioid crisis</p>
           </div>
         </div>
           </>
           
            : <>
            <div className="home-story-pics" id={"POWER"}>
            <div className={"clickme bl"} id="rcl">
              <Link className="cl-title" to={ "/paso-a-paso-esp" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"left-title"}>
              <Link to={ "/paso-a-paso-esp" }><h1 className="home-title" id={"POWER-home-title"}>PASO A PASO</h1></Link>
              <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
          <div className="home-story-pics" id={"COMMUNITY"}>
            <div className={"clickme bl"} id="lcl">
              <Link className="cl-title" to={ "/comunidad" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"right-title"}>
              <Link to={ "/comunidad" }><h1 className="home-title" id={"COMMUNITY-home-title"}>COMUNIDAD</h1></Link>
              <p className={"home-subtitle rsub"} id={"COMMUNITY-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
 
          <div className="home-story-pics" id={"GOVERNANCE"}>
            <div className={"clickme bl"} id="rcl">
              <Link className="cl-title" to={ "/gobernancia" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"left-title"}>
              <Link to={ "/gobernancia" }><h1 className="home-title" id={"GOVERNANCE-home-title"}>GOBERNANCIA</h1></Link>
              <p className={"home-subtitle lsub"} id={"POWER-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
 
          <div className="home-story-pics" id={"ENVIRONMENT"}>
            <div className={"clickme wh"} id="lcl">
              <Link className="cl-title" to={ "/ambiente" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"right-title"}>
              <Link to={ "/ambiente" }><h1 className="home-title" id={"ENVIRONMENT-home-title"}>LA PEQUEÑA GUERRA</h1></Link>
              <p className={"home-subtitle rsub"} id={"ENVIRONMENT-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
 
          <div className="home-story-pics" id={"HEALTHCARE"}>
            <div className={"clickme wh"} id="rcl">
              <Link className="cl-title" to={ "/salud" }>
                <h5>LEE ESTA HISTORIA</h5>
              </Link>
            </div>
            <div className={"left-title"}>
              <Link to={ "/salud" }><h1 className="home-title" id={"HEALTHCARE-home-title"}>SALUD</h1></Link>
              <p className={"home-subtitle lsub"} id={"HEALTHCARE-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu</p>
            </div>
          </div>
            </>}
              
              <Footer strI={0}/>
          </main>        
        )
      }
      
      export const Head = () => <title>Home Page</title>
      
      // Step 3: Export your component
      export default HomePage;
  
     