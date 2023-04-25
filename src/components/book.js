import * as React from "react";
import '../styles.css';
import { useRef, useState, useEffect } from "react";

function Book() {
   


    
    
            return (
                <div className="photo-frame-container make-90-cont" id="book-container">           
                  <iframe className="photo-frame make-90" src="/bookpage" title="Other Page" /> 
                  {/* <div className="cover-frame" ></div> */}
                </div>


            );
}

export default Book;