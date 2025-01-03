import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import { SlArrowDown } from "react-icons/sl";
import AboutImage from "../../assets/Images/about.webp";
import Services from "../../components/Services/Services";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger); // Regisztráljuk a ScrollTrigger plugint

  useEffect(() => {
    const header = document.querySelector(".about-container");
    header.classList.add("loaded"); // Ez fogja a láthatóságot vezérelni

    // Animálás a h1 elemekre
    const titleText = document.querySelector("#title-text h1");
    const chars = titleText.textContent.split(""); // Szöveg karakterekre bontása
    titleText.innerHTML = chars.map((char) => `<span>${char}</span>`).join(""); // Minden karaktert span-ba csomagol

    const charSpans = document.querySelectorAll("#title-text h1 span");

    gsap.set("#title-text", { perspective: 400 });

    gsap.from(charSpans, {
      duration: 1.5,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.1,
    });

    // Animálás a #title-text <p> elemre
    const titleParagraph = document.querySelector("#title-text p");

    gsap.fromTo(
      titleParagraph,
      { opacity: 0, y: 50 }, // Kezdő állapot
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    // Animálás az about-content <p> elemeire scroll trigger-rel
    const aboutParagraphs = document.querySelectorAll(".about-content p");

    gsap.fromTo(
      aboutParagraphs,
      {
        opacity: 0, // Kezdő érték: az elem láthatatlan
        y: 50, // Kezdő pozíció: 50px lefelé
      },
      {
        opacity: 1, // Végállapot: az elem láthatóvá válik
        y: 0, // Végállapot: az elem visszatér a normál pozícióba
        stagger: 0.3, // Késleltetés az animációk között
        ease: "power2.out", // Az animáció gyorsulása
        duration: 1.5, // Az animáció hossza
        scrollTrigger: {
          trigger: ".about-content", // A szekció lesz az aktiváló trigger
          start: "top 60%", // Az animáció akkor indul, amikor a szekció teteje a viewport 60%-ában van
          end: "bottom 20%", // Az animáció vége, amikor a szekció alja a viewport 20%-ánál
          toggleActions: "restart none none none", // Az animáció indítása
        },
      }
    );

    // Animálás az about-image elemre scroll trigger-rel
    const aboutImage = document.querySelector(".about-image img");

    gsap.fromTo(
      aboutImage,
      {
        autoAlpha: 0, // Kezdő érték: az elem átlátszatlan
        x: -100, // Kezdő pozíció
      },
      {
        autoAlpha: 1,
        x: 0, // Végállapot
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-image", // A képre alkalmazzuk a scroll trigger-t
          start: "top 80%", // Az animáció akkor indul, amikor a kép teteje a viewport 80%-ában van
          end: "bottom 20%", // Az animáció vége, amikor a kép alja a viewport 20%-ánál
          toggleActions: "restart none none none", // Az animáció újraindítása
        },
      }
    );
  }, []);

  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <header id="title-text">
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
