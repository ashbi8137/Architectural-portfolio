import Manifesto from "@/components/Manifesto";
import styles from "./studio.module.css";

export default function StudioPage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Manifesto />
      </div>
    </main>
  );
}
