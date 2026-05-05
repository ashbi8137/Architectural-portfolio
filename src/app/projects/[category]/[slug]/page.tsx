import { projects } from "@/data/projects";
import Link from "next/link";
import styles from "./ProjectDetail.module.css";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
    const params = projects.map((project) => ({
        category: project.category.toLowerCase(),
        slug: project.slug,
    }));
    
    // Temporarily including old slug to prevent crash if user refreshes old page
    params.push({ category: 'residence', slug: 'pavilla' });
    
    return params;
}

export default async function ProjectPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const { category, slug } = await params;
    const decodedCategory = decodeURIComponent(category);
    
    const activeProject = projects.find(
        (p) => p.slug === slug && p.category.toLowerCase() === decodedCategory.toLowerCase()
    );

    if (!activeProject) {
        return (
            <main className={styles.main}>
                <div className={styles.galleryHeader}>
                    <Link href={`/projects/${decodedCategory.toLowerCase()}`} className={styles.backButton}>
                        ← Back to {decodedCategory}
                    </Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <h1>Project Not Found</h1>
                </div>
            </main>
        );
    }

    return <ProjectDetailClient activeProject={activeProject} decodedCategory={decodedCategory} />;
}
