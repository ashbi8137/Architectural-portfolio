import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProjectsTimeline from "@/components/ProjectsTimeline";
// Materiality removed per user request
import Manifesto from "@/components/Manifesto";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import TransitionStrip from "@/components/TransitionStrip";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Philosophy />
      <ProjectsTimeline />
      {/* Materiality removed */}
      <TransitionStrip />
      <Manifesto />
      <Impact />
      <Contact />
    </main>
  );
}
