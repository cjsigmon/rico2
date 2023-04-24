import * as React from "react";
import '../styles.css';
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import tellyHtml from '/static/telly.html';


function Telly() {
   



    
    
            return (

                <div className="photo-frame-container" id="book-container">           
                  <iframe className="photo-frame" src="/tellyp" title="Other Page" /> 
                  {/* <div className="cover-frame" ></div> */}
                </div>


            );
}

export default Telly;