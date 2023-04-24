import * as React from "react";
import '../styles.css';
import { useRef, useState, useEffect } from "react";
import MyComponentHTML from "./telly.html";
import { Helmet } from "react-helmet";
import tellyHtml from '../../static/telly.html';

// const html = require('../static/telly.html');

function Telly() {
   



    
    
            return (

                <div className="photo-frame-container" id="book-container">           
                  <div>
      <Helmet>
        <title>My HTML Page</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: tellyHtml }} />
    </div>
                </div>


            );
}

export default Telly;