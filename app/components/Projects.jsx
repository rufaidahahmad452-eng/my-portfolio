import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
    {   title: "Roro TV",
        description:"A movie and TV shows discovery application built with React, TypeScript and the TMDB API, with dynamic routing, favorites, watchlist, loading/error states and reusable components.",
        technologies: ["React", "TypeScript", "TMDB API"], image: "/projects/roro-tv.jpeg",
        demo: "https://rufaidahahmad452-eng.github.io/RORO-TV/",
        github: "https://github.com/rufaidahahmad452-eng/RORO-TV",},

    {   title: "Roro TV 2",
        description: "A modern and responsive movie and TV shows platform built with React and TypeScript, integrated with the TMDB API to provide dynamic movie data. The application allows users to explore and discover movies and TV shows through a clean and intuitive interface, with a focus on responsive design, reusable components, and smooth user experience.",
        technologies: ["React", "TypeScript", "CSS", "TMDB API"], image: "/projects/roro-tv-2.jpeg",
        demo:"https://rufaidahahmad452-eng.github.io/roro-tv-2/",
        github: "https://github.com/rufaidahahmad452-eng/roro-tv-2", },

    {   title: "Luffy Donuts",
        description: "A modern donut shop website built with Next.js, TypeScript and responsive CSS. Includes product filtering, cart functionality and smooth animations.",
        technologies: ["Next.js", "TypeScript", "CSS"], image: "/projects/luffy.jpeg",
        demo: "https://luffy-donuts.vercel.app/",
        github: "https://github.com/rufaidahahmad452-eng/luffy-donuts",
    },

    {
        title: "My Portfolio",
        description: "A personal portfolio website built with Next.js and TypeScript, with smooth animations, responsive design and optimized performance.",
        technologies: ["Next.js", "TypeScript", "CSS"], image: "/projects/profile.jpeg",
        demo: "https://my-portfolio-sigma-sandy-83.vercel.app/",
        github: "https://github.com/rufaidahahmad452-eng/my-portfolio",
    },
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsHeader}>
                <div>
                    <p className={styles.sectionLabel}>MY WORK</p>
                    <h2 className={styles.title}>My Projects</h2>
                </div>
                <a href="#projects" className={styles.viewAll}> View All Projects →</a>
            </div>

            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <div className={styles.card} key={project.title}>
                        <div className={styles.imageWrapper}>
                            <img src={project.image} alt={project.title}/>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.technologies}>
                                {project.technologies.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>

                            <div className={styles.projectLinks}>
                                <a href={project.demo} target="_blank" rel="noreferrer" className={styles.demoLink}><ExternalLink />Live Demo</a>
                                <a href={project.github} target="_blank" rel="noreferrer" className={styles.githubLink}><FaGithub />GitHub</a>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}