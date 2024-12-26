import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import { SlArrowDown } from "react-icons/sl";
import AboutImage from "../../assets/Images/about.webp";

import React from "react";
import Services from "../../components/Services/Services";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Landing = () => {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <header>
        <p>Gentlemen's</p>
        <h1>Barbershop</h1>
        <SlArrowDown size={80} className="arrow-down" />
      </header>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src={AboutImage} alt="About us" />
          </div>
          <div className="about-content">
            <h2>Történetünk</h2>
            <p>
              Szenvedélyünk a férfiak ápoltsága, és hiszünk abban, hogy egy jó
              hajvágás vagy borotválkozás nem csupán rutin, hanem igazi rituálé.
              Célunk, hogy minden vendégünk számára egyedi élményt nyújtsunk –
              egy helyet, ahol kikapcsolódhatsz, feltöltődhetsz, és magabiztosan
              távozhatsz.
            </p>
            <p>
              Történetünk a szakmánk iránti elkötelezettségről és a közösség
              iránti tiszteletről szól. Minden ollóvágásban, minden sima
              borotvahúzásban ott van a múlt mestereinek hagyatéka, amit a
              modern férfi igényeivel ötvözünk.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Contact />
      <GoogleMap />
      <footer></footer>
    </main>
  );
};

export default Landing;
