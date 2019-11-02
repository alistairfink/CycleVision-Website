import React from "react";
import meh from "../Resources/meh.png";
import "../Styling/App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Header-Left">
          <a>iBlind</a>
        </div>
        <div className="Header-Right">
          <a>About</a>
          <a>Team</a>
          <a>Contact</a>
          <a>News</a>
        </div>
      </div>
      <div className="Top">
        <div className="Top-Inner">
          <h1>iBlind</h1>
          <h2>A Better Way to Bike</h2>
        </div>
        <img className="Top-Inner-Img" src={meh}/>
      </div>
      <div className="Section">
        
      </div>
      <div className="test">test</div>
    </div>
  );
}

export default App;
