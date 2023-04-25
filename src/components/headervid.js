import * as React from "react";
import '../styles.css';
import VideoComp from "./videoComp";

export default function HeaderVid() {

    return (
        <div className={"bg bg-home"} >
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/821024502?h=cdcad75069&autoplay=1&title=0&byline=0&portrait=0&controls=0" style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen muted playsinline poster="img/"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          </div>
    );
}