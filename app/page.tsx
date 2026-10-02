import { GraduationCap, Heart, MapPin } from "lucide-react";
import styles from"./page.module.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
      <section id="home" className={styles.hero}>
        <div className={styles.herocontent}>
          <p className={styles.eyebrow}>HELLO, I'M</p>
          <h1>Rufaidah <span>Ahmad</span></h1>
          <h2>Frontend Developer</h2>
          <p className={styles.herotext}>
            I build modern and responsive websites using React, Next.js,TypeScript, and CSS.</p>
        </div>
        <div className={styles.herobutton}>
          <a href="#projects" className={styles.primarybutton}>View My Work</a>
          <a href="#contact" className={styles.secondarybutton}>Contact Me</a>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.aboutleft}>
          <p className={styles.sectionlabel}>ABOUT ME</p>
          <h2>Building interfaces <br/>I enjoy creating</h2>
          <p className={styles.abouttext}>
            I’m a Frontend Developer interested in creating clean, responsive, and user-friendly interfaces. I enjoy working
            with React and TypeScript and I’m continuously improving my frontend skills by building real projects.
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
      <Contact/>
    </main>
  )
}