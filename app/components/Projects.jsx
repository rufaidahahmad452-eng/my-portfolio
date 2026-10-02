import styles from "./Projects.module.css";

const projects = [
    { title: "Roro Tv", 
      description:"A modern website for browsing and exploring movies and TV shows.",
      technologies: ["HTML", "CSS", "JavaScript"],image: "/projects/roro-tv.jpeg",
      link: "https://rufaidahahmad452-eng.github.io/RORO-TV/", },

    { title: "Roro-tv-2",
      description: "A modern movie and TV shows website built with React, TypeScript, and the TMDB API.",
        technologies: ["React","TypeScript", "CSS", "TMDB API"], image: "/projects/roro-tv-2.jpeg",
        link: "https://rufaidahahmad452-eng.github.io/roro-tv-2/", },

    { title: "Luffy Donuts",
      description: "Luffy Donuts is a modern and responsive donut shop website built with Next.js, React, TypeScript, and CSS. The project also includes automated testing with Vites",
      technologies: ["Next.js", "React", "TypeScript", "CSS", "Testing"],image: "/projects/luffy.jpeg",
      link: "https://luffy-donuts.vercel.app/", },

    
    
];

export default function Projects() {
    return(
        <section id="projects" className={styles.projects}>
            <p className={styles.sectionLabel}>MY WORK</p>
            <h2 className={styles.title}>Featured Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <div className={styles.card} key={project.title}>
                        <div className={styles.imageWrapper}>
                             <img src={project.image} alt={project.title} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.technologies}>
                                {project.technologies.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>
                        
                        <a href={project.link} target="_blank" rel="noreferrer" className={styles.projectLink}> View Project →</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}