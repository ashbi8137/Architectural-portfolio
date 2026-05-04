import { categoriesData } from "@/data/projects";

export function generateStaticParams() {
    return categoriesData.map((cat) => ({
        category: cat.name.toLowerCase(),
    }));
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
    return children;
}
