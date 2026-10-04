import { GraduationCap, Heart, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import styles from"./page.module.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Currently from "./components/Currently";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main>
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>Rufaidah</h2>
        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>HELLO, I’M</p>
            <h1>Rufaidah <span>Ahmad</span></h1>
            <p className={styles.herotext}>I build modern and responsive websites using<br/> React, Next.js, TypeScript and more.</p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.primarybutton}> View My Work →</a>
              <a href="/projects/Rufaidah_Ahmed_Shawky_International_CV-1.pdf" download className={styles.secondarybutton}>↓ &nbsp; Download CV</a>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/rufaidahahmad452-eng" target="_blank" rel="noreferrer" aria-label="GitHub"> <FaGithub /></a>
              <a href="https://www.linkedin.com/in/rufaidah-ahmed-a77373309/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
               <a href="mailto:rufaidahahmad452@gmail.com" aria-label="Email"> <Mail/> </a>
            </div>
          </div>
        </div>
      </section>  

      <section id="about" className={styles.about}>
        <div className={styles.aboutleft}>
          <p className={styles.sectionlabel}>ABOUT ME</p>
          <h2>Building interfaces <br/></h2>
          <p className={styles.abouttext}>
            I'm a 3rd-year IT student and Frontend Developer focused on building responsive web applications with React, Next.js, and TypeScript. I enjoy turning ideas into practical interfaces and working with APIs, testing, 
            and modern frontend tools. I'm currently looking for internship or junior opportunities where I can contribute to real products and grow as a developer.
          </p>
        </div>
        <div className={styles.aboutRight}>

          <div className={styles.infoitem}>
            <GraduationCap className={styles.infoicon}/>
            <div>
              <h3>University Student</h3>
              <p>IT • 3rd Year</p>
            </div>
          </div>

          <div className={styles.infoitem}>
            <MapPin className={styles.infoicon}/>
            <div>
              <h3>Based in Egypt</h3>
              <p>Open to remote opportunities</p>
            </div>
          </div>

          <div className={styles.infoitem}>
            <Heart className={styles.infoicon}/>
            <div>
              <h3>Passionate about</h3>
              <p>Design • Web Development • Learning</p>
            </div>
          </div>
        </div>
      </section>
      <Skills/>
      <Projects/>
      <Currently/>
      <Contact/>
    </main>
  )
}