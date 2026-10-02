import styles from "./Skills.module.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub,} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMysql, SiC, SiCplusplus, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
    { name: "HTML", icon: FaHtml5,  color: "#E34F26", },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6", },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", },
    { name: "React", icon: FaReact, color: "#61DAFB", },
    { name: "Next.js", icon: SiNextdotjs, color: "#171717", },
    { name: "Git", icon: FaGitAlt, color: "#F05032", },
    { name: "GitHub", icon: FaGithub, color: "#171717", },
    { name: "SQL", icon: SiMysql, color: "#4479A1", },
    { name: "C", icon: SiC, color: "#A8B9CC", },
    { name: "C++", icon: SiCplusplus, color: "#00599C", },
    { name: "Python", icon: SiPython,color: "#3776AB", },
    { name: "Java" , icon: FaJava , color: "#ED8B00", },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <p className={styles.sectionlable}>MY SKILLS</p>
            <h2 className={styles.title}>Technologies I work with</h2>
            <div className={styles.skillslist}>
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                    <div className={styles.skill} key={skill.name}>
                        <Icon className={styles.skillicon} style={{ color: skill.color }}/>
                        <span>{skill.name}</span>
                    </div>
                   );
            })}
            </div>
        </section>
    );
}