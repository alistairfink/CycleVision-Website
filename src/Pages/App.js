import React from "react";
import ray from "../Resources/ray.jpg";
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
          <div className="Top-Inner-Left">
            <img src={ray} />
          </div>
          <div className="Top-Inner-Right">
            <h1>iBlind</h1>
            <h2>2 Blind 2 Furious</h2>
          </div>
        </div>
      </div>
      <div className="test">test</div>
    </div>
  );
}

export default App;
