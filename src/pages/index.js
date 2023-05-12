import * as React from "react";
import { useState } from "react";
import '../styles.css';
import MyContext from "../MyContext";
import HomePage from "../components/realHome";


const Index = () =>  {
  const [myBoolean, setMyBoolean] = useState(MyContext);

      return (
        <MyContext.Provider value={{ myBoolean, setMyBoolean }}>
          <HomePage />
        </MyContext.Provider>
        
      )
    }
    
    export const Head = () => <title>Home Page</title>
    
    // Step 3: Export your component
    export default Index;

   