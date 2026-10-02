import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";


export default function Contact() {
    return(
        <>
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.contactText}>
                    <p className={styles.sectionLabel}>CONTACT</p>
                    <h2>Let’s work together</h2>
                    <p className={styles.description}>  I’m currently looking for frontend opportunities and projects where I can continue learning and growing.</p>
                </div>

                <div className={styles.contactLink}>
                    <a href="mailto:rufaidahahmad452@gmail.com" className={styles.contactitem}>
                        <Mail className={styles.icon}/>
                        <div>
                            <span>Email</span>
                            <p>rufaidahahmad452@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://github.com/rufaidahahmad452-eng" target="_blank" rel="noreferrer" className={styles.contactitem}>
                        <FaGithub className={styles.icon}/>
                        <div>
                            <span>GitHub</span>
                            <p>github.com/rufaidahahmad452-eng</p>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/rufaidah-ahmed-a77373309" target="_blank" rel="noreferrer" className={styles.contactitem}>
                        <FaLinkedin className={styles.icon}/>
                        <div>
                            <span>LinkedIn</span>
                            <p>linkedin.com/in/rufaidah-ahmed-a77373309</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <footer className={styles.footer}> © 2026 Rufaidah Ahmed. All rights reserved. </footer>
        </>
    )
}