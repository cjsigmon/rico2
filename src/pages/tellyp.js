import * as React from "react";
import '../styles.css';
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import tellyHtml from '/static/telly.html';


function Telly() {
   



    
    
            return (

                   
                  <div>
      <Helmet>
        <title>My HTML Page</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: tellyHtml }}></div>
    </div>
           


            );
}

export default Telly;