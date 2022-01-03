import * as React from "react";
import './App.css';
//import { ethers } from "ethers";

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
           <span role="img" aria-label="waving hand">
             👋🏽
           </span>{" "}
           Hey there!
         </div>

        <div className="bio">
          My name is Taylor, and I'm learning about Web3. Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}