import * as React from "react";
import '../styles.css';
import VideoComp from "./videoComp";
import ReactPlayer from "react-player";

export default function HeaderVid() {

    return (
        <div className={"bg bg-home"} >
            <ReactPlayer
                  
                 
                  style={{ position: 'absolute', top:'0', left:'0', width: '100%', height:'100%'}}
                  url={"https://player.vimeo.com/video/821024502?h=cdcad75069&autoplay=1&title=0&byline=0&portrait=0&controls=0"}
                  
                  
                  
                  
              />
            
          </div>
    );
}