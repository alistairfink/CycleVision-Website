import React, { useState } from "react";
import meh from "../Resources/meh.png";
import Sergio from "../Resources/Sergio.png";
import Alistair from "../Resources/Alistair.png";
import Elijah from "../Resources/Elijah.png";
import Skye from "../Resources/Skye.png";
import Zaki from "../Resources/Zaki.png";
import Loading from "../Resources/loading.svg";
import "../Styling/App.css";

function App() {
  const [emailerName, setEmailerName] = useState("");
  const [emailerEmail, setEmailerEmail] = useState("");
  const [emailerSubject, setEmailerSubject] = useState("");
  const [emailerMessage, setEmailerMessage] = useState("");
  const [emailerSuccess, setEmailerSuccess] = useState(false);
  const [emailerLoading, setEmailerLoading] = useState(false);
  const [emailerSuccessMessage, setEmailerSuccessMessage] = useState("");

  const sendEmail = () => {
    if (
      emailerName == "" ||
      emailerSubject == "" ||
      emailerSubject == "" ||
      emailerMessage == ""
    ) {
      setEmailerSuccessMessage("All Fields Required.");
      setEmailerSuccess(true);
      setTimeout(() => {
        setEmailerSuccess(false);
        setEmailerSuccessMessage("");
      }, 1500);
    } else {
      setEmailerLoading(true);
      fetch(
        "https://us-central1-stoked-flame-246007.cloudfunctions.net/iBlind-Emailer",
        {
          method: "POST",
          body: JSON.stringify({
            name: emailerName,
            email: emailerEmail,
            subject: emailerSubject,
            message: emailerMessage
          })
        }
      )
        .then(response => response.text())
        .then(responseJson => {
          setEmailerSuccessMessage(responseJson);
          setEmailerSuccess(true);
          setEmailerLoading(false);
          setTimeout(() => {
            setEmailerSuccess(false);
            setEmailerSuccessMessage("");
          }, 1500);
        });
    }
  };

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
        <h2>About iBlind</h2>
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
      <div className="Section Contact">
        <h2>Contact</h2>
        <p>
          Contact us using the contact form below or by emailing us at
          sergiorodriguez2003@gmail.com.
        </p>
        <div className="Contact-Field">
          <input
            type="text"
            value={emailerName}
            placeholder="Name"
            onChange={e => setEmailerName(e.target.value)}
          />
        </div>
        <div className="Contact-Field">
          <input
            type="text"
            value={emailerEmail}
            placeholder="Email"
            onChange={e => setEmailerEmail(e.target.value)}
          />
        </div>
        <div className="Contact-Field">
          <input
            type="text"
            value={emailerSubject}
            placeholder="Subject"
            onChange={e => setEmailerSubject(e.target.value)}
          />
        </div>
        <div className="Contact-Field">
          <textarea
            type="text"
            value={emailerMessage}
            placeholder="Message"
            onChange={e => setEmailerMessage(e.target.value)}
          />
        </div>
        {emailerLoading ? (
          <img className="Contact-Loading" src={Loading} />
        ) : (
          <button onClick={() => sendEmail()}>Send</button>
        )}
      </div>
      <div
        className={
          emailerSuccess ? "Contact-Email-Shown" : "Contact-Email-Hidden"
        }
      >
        <h3>{emailerSuccessMessage}</h3>
      </div>
    </div>
  );
}

export default App;
