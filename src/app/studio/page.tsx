import Navbar from "@/components/Navbar";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import styles from "./studio.module.css";

export default function StudioPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Manifesto />
      </div>
    </main>
  );
}
