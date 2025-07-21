"use client";
import Image from "next/image";
import ProjectsSection from "@/components/ProjectsSection";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Programmer", "Tech Enthusiast"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });


    return () => {
      typed.destroy();  // clean up when component unmounts
    };
  }, []);


  return (
    <>
      <header>
        <nav>
          <div className="left">Moiz's Portfolio</div>

          <button className="hamburger" onClick={toggleMenu}>
            &#9776; {/* This is the ☰ symbol */}
          </button>
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li> <a href="#home-section-id">Home </a> </li>
              <li> <a href="#project-section-id">Projects </a> </li>
              <li> <a href="#about-section-id">About Me </a> </li>
              <li> <a href="#contact-section-id">Contact Info </a> </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="firstsection" id="home-section-id">
          <div className="leftsection">
            Hi! My Name Is
            <div><span className="purple">Moiz Ahmed</span></div>
            <div>And I Am A Passionate
              <div className="typed-wrapper">
                <span id="element" ref={typedElement}></span>
              </div>
            </div>
          </div>
          <div className="rightsection">
            <img src="bg.png" alt="" />
          </div>
        </section>


        <section className="secondsection" id="project-section-id">

          <hr />
          <span className="textpurple">What I Have Done So Far</span>
          <ProjectsSection />
        </section>



        <section className="thirdsection" id="about-section-id">
          <hr />
          <span className="textpurple">My Background</span>
          <br />
          <div className="about-content">

            <div className="about-image">
              <img src="/projects/profilepic.jpg" alt="Your photo" />
            </div>
            <div className="about-text">

              <p>
                I am a passionate and dedicated developer with experience in building full-stack applications.
                I specialize in React, Django, and modern web technologies. I love creating efficient, scalable, and visually appealing solutions.
              </p>

              <ul>
                <li><strong>🎓 Qualification:</strong> Advance Diploma in Software Engineering (Aptech Pakistan.)</li>
                <li><strong> 📍 Location:</strong> Precinct 8, Bahria Town, Karachi</li>
                <li><strong>🛠️ Skills:</strong> React, Django, JavaScript, Python, SQL, Git</li>
              </ul>
              <a className="btn" href="/Moiz Ahmed Khan(Scv).pdf" download>Download CV</a>
            </div>
          </div>
        </section>


      </main>
      <footer className="footer">

        <div className="footerfirst">
          <div>Moiz's Portfolio</div>
        </div>

        <div className="footersecond" id="contact-section-id">
          <h3>Contact Info:</h3>
          <p>
            📞 <strong>Phone:</strong>{" "} 
            <a href="tell:+923312512445"> 0331-2512445</a>
          </p>
          <p>
            📧 <strong>Email:</strong>{" "} 
            <a href="mailto:moizahmedkhan15@gmail.com"> moizahmedkhan15@gmail.com</a>
          </p>
          <p>
            📍 <strong>Location:</strong> House No. 498, Precinct 8, Bahria Town Karachi.
          </p>
        </div>

        <div className="footer-copyrights">
          &copy; 2025 Moiz Ahmed. All rights reserved.
        </div>
      </footer>
    </>
  );
}
