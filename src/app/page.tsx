import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProjectsTimeline from "@/components/ProjectsTimeline";
import Materiality from "@/components/Materiality";
import Manifesto from "@/components/Manifesto";
import Process from "@/components/Process";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import TransitionStrip from "@/components/TransitionStrip";
import Cursor from "@/components/Cursor";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Cursor />
      <Hero />
      <Philosophy />
      <ProjectsTimeline />
      <Materiality />
      <TransitionStrip />
      <Manifesto />
      <Process />
      <Impact />
      <Contact />
    </main>
  );
}
