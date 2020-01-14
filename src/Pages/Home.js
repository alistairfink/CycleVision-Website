// Libraries
import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// Resources
import meh from "../Resources/meh.png";
import Sergio from "../Resources/Sergio.png";
import Alistair from "../Resources/Alistair.png";
import Elijah from "../Resources/Elijah.jpg";
import Skye from "../Resources/Skye.jpg";
import Zaki from "../Resources/Zaki.jpg";
import Loading from "../Resources/loading.svg";
import NewsIcon from "../Resources/NewsIcon-Transparent.png";
import FrontModule from "../Resources/FrontModule.png";
import RearModule from "../Resources/RearModule.png";
import UnitSwitch from "../Resources/UnitSwitch.png";
import RideMapsWithCamera from "../Resources/RideMapsWithCamera.png";
import RideSummary from "../Resources/RideSummary.png";
import HamburgerMenu from "../Resources/Hamburger.png";
import HamburgerMenuClose from "../Resources/CloseMenu.png";

// CSS
import "../Styling/Home.css";
import "../Styling/Colours.css";
import "../Styling/Universal.css";

// JS
import NewsContent from "../Data/NewsContent.js";
import NavBarStyleHelper from "../Styling/NavBarStyling.js";
import UseWindowDimensions from "../Data/WindowDimensions.js";

function Home() {
  const [NavBarStyle, setNavBarStyle] = useState(NavBarStyleHelper(0));
  const { width } = UseWindowDimensions();
  const [IsSmallScreen, setSmallScreen] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (width <= 641) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  });

  useScrollPosition(({ prevPos, currPos }) => {
    setNavBarStyle(NavBarStyleHelper(currPos.y, window.innerHeight));
  });

  return (
    <div className="App">
      {!IsSmallScreen ? (
        <div className="Header" style={NavBarStyle}>
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
            <Link to="/news" className="HashLink">
              News
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <img
            className="Header-HamburgerMenu"
            src={HamburgerMenu}
            alt="Menu"
            onClick={() => {
              setMenuOpen(true);
            }}
          />
          {MenuOpen && (
            <div className="Header-HamburgerMenuExpanded">
              <img
                className="Header-HamburgerMenuExpanded-X"
                src={HamburgerMenuClose}
                alt="Close Menu"
                onClick={() => {
                  setMenuOpen(false);
                }}
              />
              <Link
                smooth
                to="#home"
                className="Header-HamburgerMenuLink"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Top
              </Link>
              <Link
                smooth
                to="#about"
                className="Header-HamburgerMenuLink"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                About
              </Link>
              <Link
                smooth
                to="#team"
                className="Header-HamburgerMenuLink"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Team
              </Link>
              <Link
                smooth
                to="#contact"
                className="Header-HamburgerMenuLink"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Contact
              </Link>
              <Link
                to="/news"
                className="Header-HamburgerMenuLink"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                News
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="Top" id="home">
        <div className="Top-Inner">
          <h1>iBlind</h1>
          <h2>A Better Way to Bike</h2>
        </div>
        <img className="Top-Inner-Img" alt="Top Product" src={meh} />
      </div>
      <About />
      <Team />
      <LatestNews />
      <Contact />
      <div className="Footer">
        <Link smooth to="#home" className="HashLink">
          Top
        </Link>
        <Link smooth to="#about" className="HashLink">
          About
        </Link>
        <Link smooth to="#team" className="HashLink">
          Team
        </Link>
        <Link smooth to="#contact" className="HashLink">
          Contact
        </Link>
        <Link to="/news" className="HashLink">
          News
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="Section About" id="about">
      <div className="About-Row About-Section">
        <div className="About-Image">
          <img src={RearModule} alt="Rear Module" />
        </div>
        <div className="About-Content">
          <h2>Be Safe</h2>
          <h3>
            With the iBlind rear module you can bike safer using the built in
            turning indicator lights and always on red indicator.
          </h3>
        </div>
      </div>
      <div className="About-Row-Reverse About-Section">
        <div className="About-Image">
          <img src={FrontModule} alt="Rear Module" />
        </div>
        <div className="About-Content">
          <h2>Be Aware</h2>
          <h3>
            With the iBlind front module you can be more ware of your
            surroundings. The cameras built into the rear module allow the red
            indicators to notify you of rear approaching vehicles.
          </h3>
        </div>
      </div>
      <div className="About-Row About-Section">
        <div className="About-Image">
          <img src={UnitSwitch} alt="Rear Module" />
        </div>
        <div className="About-Content">
          <h2>Be In Control</h2>
          <h3>
            The iBlind turn signal switch allows you to gain total control over
            your ride by allowing you to actively signal turns without taking
            your hands off the handles.
          </h3>
        </div>
      </div>
      <div className="About-Row-Reverse About-Section">
        <div className="About-Image">
          <img src={RideMapsWithCamera} alt="Rear Module" />
        </div>
        <div className="About-Content">
          <h2>Maximise Usability</h2>
          <h3>
            With the iBlind companion app you can maximise iBlind's usability by
            allowing you to directly access the rear camera while simultaneously
            allow you to use your phone for navigation.
          </h3>
        </div>
      </div>
      <div className="About-Row About-Section">
        <div className="About-Image">
          <img src={RideSummary} alt="Rear Module" />
        </div>
        <div className="About-Content">
          <h2>Maximise Potential</h2>
          <h3>
            The iBlind companion app tracks your riding statistics allowing you
            to actively analyze and improve your cycling.
          </h3>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="Section" id="team">
      <h2>The iBlind Team</h2>
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
          <h4>Electrical Engineer(?)</h4>
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

function LatestNews() {
  return (
    <div className="LatestNews">
      <div className="LatestNews-Left">
        <img src={NewsIcon} alt="Latest News" />
      </div>
      <div className="LatestNews-Right">
        <h3>Latest News</h3>
        <h2>{NewsContent[0].Title}</h2>
        <Link to="/news" className="LatestNews-Button">
          All News
        </Link>
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
      <h2>Contact Us</h2>
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
