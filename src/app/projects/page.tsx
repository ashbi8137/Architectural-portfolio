import ProjectFilterGrid from "@/components/ProjectFilterGrid";

export const metadata = {
    title: "Projects | Shamil Puthusseri Architects",
    description: "Explore our portfolio of architectural projects across various categories.",
};

export default function ProjectsPage() {
    return (
        <main style={{ paddingTop: "80px" }}>
            <ProjectFilterGrid />
        </main>
    );
}
