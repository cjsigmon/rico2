import * as React from "react";
import '../styles.css';
import { useRef, useState, useEffect } from "react";
import MyComponentHTML from "./telly.html";
import { Helmet } from "react-helmet";

function Telly() {
   


    
    
            return (
                <div className="photo-frame-container" id="book-container">           
                  return <div dangerouslySetInnerHTML={{ __html: MyComponentHTML }} />;
                </div>


            );
}

export default Telly;