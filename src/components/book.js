import * as React from "react";
import '../styles.css';
import { useRef, useState, useEffect } from "react";

function Book() {
   


    
    
            return (
                <div className="photo-frame-container" id="book-container">           
                  <iframe className="photo-frame" src="/bookpage" title="Other Page" /> 
                  {/* <div className="cover-frame" ></div> */}
                </div>


            );
}

export default Book;