import Hero from "@/components/Hero";

import ProjectsTimeline from "@/components/ProjectsTimeline";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProjectsTimeline />
      <Contact />
    </main>
  );
}
