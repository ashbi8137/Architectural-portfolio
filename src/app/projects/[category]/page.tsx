import { projects } from "@/data/projects";
import ProjectListClient from "./ProjectListClient";

export function generateStaticParams() {
    const categories = Array.from(new Set(projects.map(p => p.category.toLowerCase())));
    return categories.map(category => ({ category }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    
    const categoryProjects = projects.filter(
        (p) => p.category.toLowerCase() === decodedCategory.toLowerCase()
    );

    return <ProjectListClient categoryProjects={categoryProjects} decodedCategory={decodedCategory} />;
}
