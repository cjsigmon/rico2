import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import HeaderImg from "../components/header"
import Tagline from "../components/tagline"
import CustomImage from "../components/customImage";
import Parser from "html-react-parser";
import VideoComp from "../components/videoComp"
import Footer from "../components/footer"
import Section from "../components/section"
import PullQuote from "../components/pullquote"
import ReadMore from "../components/readMore"
import { useContext, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import MyContext from "../MyContext"
import Interactive from "../components/Interactive"
import Timeline from "../components/Timeline"
import About from "../components/about"
import Coast from "../components/coast"
import Population from "../components/population"
import Book from "../components/book"
import Telly from "../components/telly"



function BlogPostTemplate ({ data: { post } }) {
  const htmlString = post.content;
  const [myBoolean, setMyBoolean] = useState(MyContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const covRef = useRef(null);
  const frameRef = useRef(null);
  const aboveRef = useRef(null);
  const headRef = useRef(null);
  const [first, setFirst] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [strI, setStrI] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  


  const handleMouseEnter = () => {
    setIsVisible(false);
  };

  const handleMouseLeave = () => {
    setIsVisible(true);
  };

  var altSlug = "";



  var storyTeam = {};
  var color = {};
if (first) {
  switch(post.title) {
    case ('SHIFTING TIDES'):
      storyTeam.reporter = 'Thomas Moody-Jones';
      storyTeam.photo = 'Dylan Thiessen';
      storyTeam.video1 = 'Ann Licharew';
      storyTeam.video2 = 'Taylor Holbrooks';
      storyTeam.inter = 'Gina Flow';
      storyTeam.adpr = 'Florencia Loncán';
      storyTeam.upr = 'Karina Torres';
      storyTeam.theme = 'ENVIRONMENT';
      storyTeam.slug = '/against-the-current';
      storyTeam.altSlug = '/ambiente';
      storyTeam.phoSlug = '/envphoto';
      color =  {color: '#3EAAA7'};
      if (strI !== 4) {
        setStrI(4);
      }
      
      break;
    case ('A CULTURAL ANCHOR'):
      storyTeam.reporter = 'Liv Reilly';
      storyTeam.photo = 'Anna Connors';
      storyTeam.video1 = 'Cynthia Liu';
      storyTeam.video2 = 'Fallon Maher';
      storyTeam.inter = 'Nina Scott';
      storyTeam.upr = 'Carlos Ramírez Brito';
      storyTeam.theme = 'COMMUNITY';
      storyTeam.slug = '/community';
      storyTeam.altSlug = '/comunidad';
      storyTeam.phoSlug = '/comphoto';
      color = {color: '#FFAD00'};
      if (strI !== 2) {
        setStrI(2);
      }

      break;
    case 'RESISTANT, NOT RESILIENT':
      storyTeam.reporter = 'Emily Gajda';
      storyTeam.photo = 'Samantha Lewis';
      storyTeam.video1 = 'Allyson Rabon';
      storyTeam.video2 = 'Quincy Marks';
      storyTeam.inter = 'Giuli Hoffmann';
      storyTeam.upr = 'Amanda Jiménez Berríos';
      storyTeam.theme = 'GOVERNANCE';
      storyTeam.slug = '/governance';
      storyTeam.altSlug = '/gobernancia';
      storyTeam.phoSlug = '/govphoto';
      color = {color: '#FF6600'};
      if (strI !== 3) {
        setStrI(3);
      }
      break;
    case 'STEP BY STEP':
      storyTeam.reporter = 'Preston Fore';
      storyTeam.video1 = 'Gerard Millman';
      storyTeam.video2 = 'Lauren Cmiel';
      storyTeam.inter = 'Clara Mello';
      storyTeam.inter2 = 'Jacob Turner';
      storyTeam.photo = "Dylan Thiessen";
      storyTeam.upr = 'Yondy Agosto García';
      storyTeam.theme = 'POWER';
      storyTeam.slug = '/paso-a-paso';
      storyTeam.altSlug = '/fuerza';
      storyTeam.phoSlug = '/powphoto';
      color = {color: '#F3CB47'};
      if (strI !== 1) {
        setStrI(1);
      }
      
      break;
    case 'ROAD TO RECOVERY':
      storyTeam.reporter = 'Lucas Thomae';
      storyTeam.photo = 'Heather Diehl';
      storyTeam.video1 = 'Angelina Katsanis';
      storyTeam.video2 = 'Jennifer Tran';
      storyTeam.inter = 'Caleb Sigmon';
      storyTeam.adpr = 'Bella Cankurtaran';
      storyTeam.theme = 'HEALTHCARE';
      storyTeam.slug = '/road-to-recovery';
      storyTeam.altSlug = '/salud';
      storyTeam.phoSlug = '/heaphoto';
      altSlug = "/salud";
      color = {color: '#004E65'};
      if (strI !== 5) {
        setStrI(5);
      }
      break;

      case 'LA PEQUEÑA GUERRA':
      storyTeam.reporter = 'Thomas Moody-Jones';
      storyTeam.photo = 'Dylan Thiessen';
      storyTeam.video1 = 'Ann Licharew';
      storyTeam.video2 = 'Taylor Holbrooks';
      storyTeam.inter = 'Gina Flow';
      storyTeam.adpr = 'Florencia Loncán';
      storyTeam.upr = 'Karina Torres';
      storyTeam.theme = 'ENVIRONMENT';
      storyTeam.slug = '/ambiente';
      storyTeam.altSlug = '/against-the-current';
      color =  {color: '#3EAAA7'};  
      if (strI !== 9) {
        setStrI(9);
      }
      break;
    case 'COMUNIDAD':
      storyTeam.reporter = 'Liv Reilly';
      storyTeam.photo = 'Anna Connors';
      storyTeam.video1 = 'Cynthia Liu';
      storyTeam.video2 = 'Fallon Maher';
      storyTeam.inter = 'Nina Scott';
      storyTeam.upr = 'Carlos Ramírez Brito';
      storyTeam.theme = 'COMMUNITY';
      storyTeam.slug = '/comunidad';
      storyTeam.altSlug = '/community';
      color = {color: '#FFAD00'};
      if (strI !== 7) {
        setStrI(7);
      }
      break;
    case 'GOBERNANCIA':
      storyTeam.reporter = 'Emily Gajda';
      storyTeam.photo = 'Samantha Lewis';
      storyTeam.video1 = 'Allyson Rabon';
      storyTeam.video2 = 'Quincy Marks';
      storyTeam.inter = 'Giuli Hoffmann';
      storyTeam.upr = 'Amanda Jiménez Berríos';
      storyTeam.theme = 'GOVERNANCE';
      storyTeam.slug = '/gobernancia';
      storyTeam.altSlug = '/governance';
      color = {color: '#FF6600'};
      if (strI !== 8) {
        setStrI(8);
      }
      break;
    case 'PASO A PASO':
      storyTeam.reporter = 'Preston Fore';
      storyTeam.video1 = 'Gerard Millman';
      storyTeam.video2 = 'Lauren Cmiel';
      storyTeam.inter = 'Clara Mello';
      storyTeam.inter2 = 'Jacob Turner';
      storyTeam.upr = 'Yondy Agosto García';
      storyTeam.theme = 'POWER';
      storyTeam.slug = '/fuerza';
      storyTeam.altSlug = '/paso-a-paso';
      color = {color: '#F3CB47'};
      if (strI !== 6) {
        setStrI(6);
      }
      break;
    case 'SALUD':
      storyTeam.reporter = 'Lucas Thomae';
      storyTeam.photo = 'Heather Diehl';
      storyTeam.video1 = 'Angelina Katsanis';
      storyTeam.video2 = 'Jennifer Tran';
      storyTeam.inter = 'Caleb Sigmon';
      storyTeam.adpr = 'Bella Cankurtaran';
      storyTeam.theme = 'HEALTHCARE';
      storyTeam.slug = '/salud';
      storyTeam.altSlug = '/road-to-recovery';
      color = {color: '#004E65'};
      if (strI !== 10) {
        setStrI(10);
      }
      break;
      case 'ABOUT':
      if (strI !== 11) {
        setStrI(11);
      }
      break;
      case 'SOBRE':
      if (strI !== 12) {
        setStrI(12);
      }
      break;


      setFirst(false);
  }
}
useEffect(() => {
  setIsLoading(false);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const div = covRef.current;

      if (div) {
   
        const rect = div.getBoundingClientRect();
        const visibleHeight = window.innerHeight - rect.top;
        const visibleRatio = visibleHeight / div.offsetHeight;
        // const curH = div.offsetHeight;
      

        if (visibleRatio >= 1 && visibleRatio < 5) {
          console.log('The div is at least 100% visible!');
          div.style.display = 'none';
          frameRef.current.style.position = 'relative';
   
          
          setTimeout(() => {
            frameRef.current.scrollIntoView({ behavior: 'smooth' });
          }, 1000);
        
        } 

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const photoDiv =
  <>
  <p className="stickyP" ref={aboveRef}> </p>
  <div ref={frameRef} className="photo-frame-container" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <iframe className="photo-frame" src={storyTeam.phoSlug} title="Other Page" />
      <div className="cover-frame" ref={covRef}>
      </div>
    </div>
  </>;
    

  const options = {
    replace: (node) => {
     if (node.attribs && node.attribs.class === "replace-video") {
        switch(node.attribs.id) {
          case "health-vid":
            return <VideoComp color={color.color} link={"https://player.vimeo.com/video/820373058?h=0cfc9e7787&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"} />;
          case "power-vid":
            return <VideoComp color={color.color} link={"https://player.vimeo.com/video/820864647?h=3d0afd428d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"} />;
          case "env-vid":
            return <VideoComp color={color.color} link={"https://player.vimeo.com/video/291295858?h=fee30cc906"} />;
          case "com-vid":
            return <VideoComp color={color.color} link={"https://player.vimeo.com/video/291295858?h=fee30cc906"} />;
          case "gov-vid":
            return <VideoComp color={color.color} link={"https://player.vimeo.com/video/820767365?h=dcd896c0d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"} />;
            
        }
      }
      else if (node.attribs && node.attribs.class === "replace-gall") {
        return photoDiv;
      }
      else if (node.attribs && node.attribs.class === "replace-book") {
        return <Book />;
      }
      else if (node.attribs && node.attribs.class === "replace-telly") {
        return <Telly />
      }
      else if (node.attribs && node.attribs.class === "replace-pop") {
        return <Population />
      }
      else if (node.attribs && node.attribs.class === "replace-coast") {
        return <Coast />;
      }
      else if (node.attribs && node.attribs.class === "replace-timeline") {
        return <Timeline />;
      }
      else if (node.attribs && node.attribs.class === "replace-interactive") {
        return <Interactive title={node.attribs.id}></Interactive>;
      }
      else if (node.attribs && node.attribs.class === "replace-section") {
        return <Section title={node.children[0].data} team={storyTeam.theme}></Section>;
      }
      else if (node.attribs && node.attribs.class === "replace-quote") {
        return <PullQuote what={node.children[0].data} who={node.attribs.id} color={color.color} />
      }
    },
  };






  const componentTree = Parser(htmlString, options);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MyContext.Provider value={{ myBoolean, setMyBoolean }}>
    <main>
    {/* <Seo title={post.title} description={post.excerpt} /> */}
    {isVisible && <Navbar strI={strI}/>}
    <HeaderImg ref={headRef} title={post.title} tagline={parse(post.excerpt)} theme={storyTeam.theme} />

    {storyTeam.theme ? <><div className="post-grid" id="stry">
      <div className="l-mar"></div>
    <Tagline reporter={storyTeam.reporter} photo={storyTeam.photo} video1={storyTeam.video1} video2={storyTeam.video2} inter={storyTeam.inter} inter2={storyTeam.inter2} adpr={storyTeam.adpr} upr={storyTeam.upr} />
      <div className="post-text">
      {componentTree}
      </div>
      <div className="r-stry-mar"></div>
      <div className="r-mar"></div>
    </div>
    <ReadMore strI={strI}/> </> : <About strI={strI} />}
    
    <Footer strI={strI} />
    </main>
    </MyContext.Provider>
    
  )
}



// function replaceImgWithCustomImage(htmlString) {
//   const customImageRegex = /<figure[^>]+class="wp-block-image size-large"[^>]*>([\s\S]*?)<\/figure>/g;
//   const replacedHtmlString = htmlString.replace(customImageRegex, '<img src="https://picsum.photos/id/237/200/300" />'); // Replace <img> tags with <CustomImage> component

//   return { __html: replacedHtmlString }; // Set the dangerouslySetInnerHTML attribute with the new HTML string
// }


export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`