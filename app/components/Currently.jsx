
import styles from "./Currently.module.css";

const learningItems = [ 
    "AI for Web", "Data Structures & Algorithms","Backend Fundamentals",
];

export default function CurrentLearning() {
    return (
        <section className={styles.learning}>
            <div className={styles.learningContent}>
                <div>
                    <p className={styles.sectionLabel}> CURRENTLY LEARNING</p>
                    <h2 className={styles.title}>Always learning, always improving</h2>
                    <div className={styles.tags}>
                        {learningItems.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.githubCard}>
                    <h3>My GitHub</h3>
                    <p> Check out my repositories and see more of
                        my work, code and contributions.
                    </p>

                    <a href="https://github.com/rufaidahahmad452-eng" target="_blank" rel="noreferrer">View My Repositories ↗</a>
                </div>
 
            </div>
        </section>
    );
}

