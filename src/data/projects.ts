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
    slug: string;
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
        slug: "pavilla",
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
        slug: "thegreencorehouse",
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
        slug: "thenilamburhouse",
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
    },
    {
        id: 4,
        category: "Commercial",
        client: "Lumina Retail Group",
        title: "Lumina Grand Mall",
        slug: "luminagrandmall",
        area: "150000 SQFT",
        location: "Kozhikode City",
        year: "2025",
        description: "A state-of-the-art commercial complex featuring dynamic retail spaces and a central atrium. Designed to maximize natural light and foster an engaging shopping experience.",
        images: [
            "/images/abdurahiman-exterior-v2.jpg",
            "/images/pavilla-2.jpg",
            "/images/pavilla-3.jpg",
            "/images/pavilla-5.jpg"
        ]
    },
    {
        id: 5,
        category: "Institute",
        client: "Apex Educational Trust",
        title: "Apex Design Academy",
        slug: "apexdesignacademy",
        area: "45000 SQFT",
        location: "Wayanad",
        year: "2024",
        description: "An educational facility built to inspire creativity. The campus features open studios, collaborative zones, and a design that integrates with the surrounding natural topography.",
        images: [
            "/images/subin-night-v2.jpg",
            "/images/subin-day-final.jpg",
            "/images/subin-living.jpg"
        ]
    },
    {
        id: 6,
        category: "Hospitality",
        client: "Serene Resorts Ltd.",
        title: "Serene Valley Resort",
        slug: "serenevalleyresort",
        area: "80000 SQFT",
        location: "Munnar",
        year: "2026",
        description: "A luxury resort nested in the hills. The project focuses on sustainable materials and offers panoramic views from every suite, creating a perfect retreat from city life.",
        images: [
            "/images/shinu-facade.jpg",
            "/images/shinu-night.jpg",
            "/images/shinu-patio.jpg"
        ]
    },
    {
        id: 7,
        category: "Interior",
        client: "Dr. Ayesha",
        title: "Modern Minimalist Clinic",
        slug: "modernminimalistclinic",
        area: "1200 SQFT",
        location: "Malappuram",
        year: "2023",
        description: "A calming interior design for a private clinic. Soft curves, warm lighting, and a neutral palette were used to reduce patient anxiety and create a welcoming environment.",
        images: [
            "/images/subin-living.jpg",
            "/images/pavilla-4.jpg",
            "/images/pavilla-6.jpg"
        ]
    },
    {
        id: 8,
        category: "Masterplan",
        client: "Oasis Developers",
        title: "Oasis Eco Township",
        slug: "oasisecotownship",
        area: "15 Acres",
        location: "Palakkad",
        year: "2027",
        description: "A comprehensive masterplan for a sustainable township. It includes residential zones, commercial hubs, and extensive green corridors designed to promote a holistic community lifestyle.",
        images: [
            "/images/pavilla-3.jpg",
            "/images/abdurahiman-exterior-v2.jpg",
            "/images/shinu-facade.jpg"
        ]
    }
];
