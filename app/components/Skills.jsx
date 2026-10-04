import styles from "./Skills.module.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaJava, FaCode, } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMysql, SiC, SiCplusplus, SiPython, SiVitest, } from "react-icons/si";

const skillGroups = [
    { title: "Frontend", skills: [
            { name: "HTML", icon: FaHtml5, color: "#E34F26", },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6", },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E", },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6", },
            { name: "React", icon: FaReact, color: "#61DAFB",},
            { name: "Next.js", icon: SiNextdotjs, color: "#171717", },
        ],
    },

    { title: "Testing", skills: [
            { name: "Vitest", icon: SiVitest, color: "#729B1B", },
            { name: "React Testing Library", icon: FaCode, color: "#E33332", },
            { name: "Playwright", icon: FaCode, color: "#45BA4B",},
        ],
    },

    { title: "Tools", skills: [
            { name: "Git", icon: FaGitAlt, color: "#F05032", },
            { name: "GitHub", icon: FaGithub, color: "#171717", },
        ],
    },

    { title: "Backend / Data", skills: [
            { name: "REST APIs", icon: FaCode, color: "#7566A8", },
            { name: "SQL", icon: SiMysql, color: "#4479A1", },
        ],
    },

    { title: "Programming", skills: [
            { name: "Python", icon: SiPython, color: "#3776AB", },
            { name: "C", icon: SiC, color: "#A8B9CC", },
            { name: "C++", icon: SiCplusplus, color: "#00599C", },
            { name: "Java", icon: FaJava, color: "#ED8B00",},
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <p className={styles.sectionLabel}> MY SKILLS </p>
            <h2 className={styles.title}> Technologies I work with</h2>

            <div className={styles.skillsGrid}>
                {skillGroups.map((group) => (
                    <div className={styles.skillCard} key={group.title}>
                        <h3 className={styles.groupTitle}> {group.title}</h3>
                        <div className={styles.skillList}>
                            {group.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div className={styles.skillItem} key={skill.name}>
                                        <Icon className={styles.skillIcon} style={{ color: skill.color, }}/>
                                        <span>{skill.name}</span>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}