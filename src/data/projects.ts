export interface Project {
    id: number;
    category: string;
    client: string;
    title: string;
    area: string;
    location: string;
    year: string;
    description: string;
    images: string[];
}

export interface Category {
    name: string;
    image: string;
}

export const categoriesData: Category[] = [
    { name: "Residence", image: "/images/shinu-night.jpg" },
    { name: "Commercial", image: "/images/abdurahiman-exterior-v2.jpg" },
    { name: "Institute", image: "/images/subin-night-v2.jpg" },
    { name: "Hospitality", image: "/images/shinu-facade.jpg" },
    { name: "Interior", image: "/images/subin-living.jpg" },
    { name: "Masterplan", image: "/images/pavilla-3.jpg" }
];

export const projects: Project[] = [
    {
        id: 1,
        category: "Residence",
        client: "Mr. Abdurahiman & Ms. Shareena",
        title: "P A VILLA",
        area: "4000 SQFT",
        location: "Areekode, Malappuram",
        year: "2023",
        description: "A modern villa that balances bold geometry with soft natural textures. The design creates fluid transitions between indoor and outdoor spaces while maintaining a calm, private living environment.",
        images: [
            "/images/pavilla-1.jpg",
            "/images/pavilla-2.jpg",
            "/images/pavilla-3.jpg",
            "/images/pavilla-5.jpg",
            "/images/pavilla-4.jpg",
            "/images/pavilla-6.jpg"
        ]
    },
    {
        id: 2,
        category: "Residence",
        client: "Mr. Subin & Dr. Jahana",
        title: "The Green Core House",
        area: "3200 SQFT",
        location: "Mukkam, Kozhikode",
        year: "2023",
        description: "A sanctuary designed around a central green core, allowing nature to permeate every living space. The architecture fosters a constant dialogue between the interior comfort and the serenity of the outdoors.",
        images: [
            "/images/subin-night-v2.jpg",
            "/images/subin-day-final.jpg",
            "/images/subin-living.jpg",
            "/images/subin-day-final.jpg",
            "/images/subin-night-v2.jpg"
        ]
    },
    {
        id: 3,
        category: "Residence",
        client: "Mr. Namshad & Family",
        title: "The Nilambur House",
        area: "3800 SQFT",
        location: "Nilambur",
        year: "2024",
        description: "A contemporary residence designed to embrace the lush landscapes of Nilambur. The spatial organization prioritizes natural light and cross-ventilation, creating a seamless connection between the modern interior living spaces and the serenity of the outdoors.",
        images: [
            "/images/shinu-night.jpg",
            "/images/shinu-facade.jpg",
            "/images/shinu-patio.jpg",
            "/images/shinu-facade.jpg"
        ]
    }
];
