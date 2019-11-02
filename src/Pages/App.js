import React from "react";
import meh from "../Resources/meh.png";
import Sergio from "../Resources/Sergio.png";
import Alistair from "../Resources/Alistair.png";
import Elijah from "../Resources/Elijah.png";
import Skye from "../Resources/Skye.png";
import Zaki from "../Resources/Zaki.png";
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
        <img className="Top-Inner-Img" src={meh} />
      </div>
      <div className="Section">
        <h2>About iBline</h2>
      </div>
      <div className="Section">
        <h2>Team</h2>
        <div className="Team">
          <div className="Team-Member">
            <img src={Alistair} />
            <h3>Alistair Fink</h3>
          </div>
          <div className="Team-Member">
            <img src={Elijah} />
            <h3>Elijah Erb</h3>
          </div>
          <div className="Team-Member">
            <img src={Sergio} />
            <h3>Sergio Rodriguez</h3>
          </div>
          <div className="Team-Member">
            <img src={Skye} />
            <h3>Skye HoSue</h3>
          </div>
          <div className="Team-Member">
            <img src={Zaki} />
            <h3>Zaki Ahmed</h3>
          </div>
        </div>
      </div>
      <div className="Section">
        <h2>Contact</h2>
      </div>
    </div>
  );
}

export default App;
