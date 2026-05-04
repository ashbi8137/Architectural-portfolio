import { projects } from "@/data/projects";

export function generateStaticParams() {
    return projects.map((p) => ({
        category: p.category.toLowerCase(),
        slug: p.slug,
    }));
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    return children;
}
