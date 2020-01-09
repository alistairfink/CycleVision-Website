import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import meh from "../Resources/meh.png";
import Sergio from "../Resources/Sergio.png";
import Alistair from "../Resources/Alistair.png";
import Elijah from "../Resources/Elijah.jpg";
import Skye from "../Resources/Skye.jpg";
import Zaki from "../Resources/Zaki.jpg";
import Loading from "../Resources/loading.svg";
import "../Styling/Home.css";
import "../Styling/Colours.css";

function Home() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Header-Left">
          <Link smooth to="#home" className="HashLink">
            iBlind
          </Link>
        </div>
        <div className="Header-Right">
          <Link smooth to="#about" className="HashLink">
            About
          </Link>
          <Link smooth to="#team" className="HashLink">
            Team
          </Link>
          <Link smooth to="#contact" className="HashLink">
            Contact
          </Link>
          <Link to="/blog" className="HashLink">
            Blog
          </Link>
        </div>
      </div>
      <div className="Top" id="home">
        <div className="Top-Inner">
          <h1>iBlind</h1>
          <h2>A Better Way to Bike</h2>
        </div>
        <img className="Top-Inner-Img" alt="Top Product" src={meh} />
      </div>
      <About />
      <Team />
      <Contact />
    </div>
  );
}

function About() {
  return (
    <div className="Section" id="about">
      <h2>About iBlind</h2>
    </div>
  );
}

function Team() {
  return (
    <div className="Section" id="team">
      <h2>Team</h2>
      <div className="Team">
        <div className="Team-Member">
          <img src={Alistair} alt="Alistair Fink Profile" />
          <h3>Alistair Fink</h3>
          <h4>Software Engineer</h4>
        </div>
        <div className="Team-Member">
          <img src={Elijah} alt="Elijah Erb Profile" />
          <h3>Elijah Erb</h3>
          <h4>Mechanical Engineer</h4>
        </div>
        <div className="Team-Member">
          <img src={Sergio} alt="Sergio Rodriguez Profile" />
          <h3>Sergio Rodriguez</h3>
          <h4>Electrical Engineer</h4>
        </div>
        <div className="Team-Member">
          <img src={Skye} alt="Skye HoSue Profile" />
          <h3>Skye HoSue</h3>
          <h4>Mascot</h4>
        </div>
        <div className="Team-Member">
          <img src={Zaki} alt="Zaki Ahmed Profile" />
          <h3>Zaki Ahmed</h3>
          <h4>Software Engineer</h4>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [emailerName, setEmailerName] = useState("");
  const [emailerEmail, setEmailerEmail] = useState("");
  const [emailerSubject, setEmailerSubject] = useState("");
  const [emailerMessage, setEmailerMessage] = useState("");
  const [emailerSuccess, setEmailerSuccess] = useState(false);
  const [emailerLoading, setEmailerLoading] = useState(false);
  const [emailerSuccessMessage, setEmailerSuccessMessage] = useState("");

  const sendEmail = () => {
    if (
      emailerName === "" ||
      emailerSubject === "" ||
      emailerSubject === "" ||
      emailerMessage === ""
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
    <div className="Section Contact" id="contact">
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
        <img
          className="Contact-Loading"
          src={Loading}
          alt="Send Email Loading"
        />
      ) : (
        <button onClick={() => sendEmail()}>Send</button>
      )}
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

export default Home;
