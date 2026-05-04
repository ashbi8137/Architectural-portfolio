import Hero from "@/components/Hero";

import ProjectsTimeline from "@/components/ProjectsTimeline";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProjectsTimeline />
    </main>
  );
}
