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
    { name: "Commercial", image: "/images/abdurahiman-5.jpg" },
    { name: "Institute", image: "/images/subin-night-v2.jpg" },
    { name: "Hospitality", image: "/images/shinu-facade.jpg" },
    { name: "Interior", image: "/images/subin-living.jpg" },
    { name: "Masterplan", image: "/images/pavilla-3.jpg" }
];

export const projects: Project[] = [
    {
        id: 11,
        category: "Masterplan",
        client: "Institutional Hub",
        title: "Medical Campus Masterplan",
        slug: "medical-campus-masterplan",
        area: "4.8 Acres",
        location: "Kozhikode, Kerala",
        year: "2024",
        description: "A comprehensive masterplan for a medical facility, optimizing car and emergency accessibility while preserving natural swamp areas and integrating rain water harvesting. The design prioritizes efficient circulation and zoning for high-density public use.",
        images: ["/images/masterplan-1.jpg"]
    },
    {
        id: 12,
        category: "Masterplan",
        client: "Aviation Authority",
        title: "Regional Airport Hub",
        slug: "regional-airport-masterplan",
        area: "250 Acres",
        location: "India",
        year: "2024",
        description: "A large-scale strategic masterplan for a regional airport hub, featuring runway optimization, terminal zoning, and integrated logistics infrastructure. The plan balances technical aviation requirements with environmental topography.",
        images: ["/images/masterplan-2.jpg"]
    },
    {
        id: 13,
        category: "Masterplan",
        client: "Urban Development",
        title: "Linear Mixed-Use Strip",
        slug: "linear-urban-masterplan",
        area: "12 Acres",
        location: "Kerala",
        year: "2023",
        description: "An urban masterplan designed for a linear site, integrating commercial, residential, and green zones along a primary transit corridor. The project focuses on high-density development while maintaining quality pedestrian environments.",
        images: ["/images/masterplan-3.jpg"]
    },
    {
        id: 14,
        category: "Masterplan",
        client: "Terraced Residential",
        title: "Hillside Community Development",
        slug: "hillside-masterplan",
        area: "8.5 Acres",
        location: "Wayanad, Kerala",
        year: "2024",
        description: "A sensitive masterplan for a hillside site, utilizing natural contours to create a terraced residential community. The plan includes a kindergarten, sports zones, and residential apartments designed to minimize environmental impact.",
        images: ["/images/masterplan-4.jpg"]
    },
    {
        id: 10,
        category: "Residence",
        client: "MR. RAZIK & SINU",
        title: "RESIDENCE AT FAROOK",
        slug: "razik-farook",
        area: "12500 SQFT",
        location: "Farook, Kozhikode",
        year: "2024",
        description: "An elegant, minimalist residence that emphasizes light and spatial fluidly. The design integrates large glass openings with solid masonry to create a balanced sense of openness and privacy, perfectly suited for a modern family lifestyle.",
        images: [
            "/images/razik-1.png",
            "/images/razik-2.png",
            "/images/razik-3.png",
            "/images/razik-4.png",
            "/images/razik-5.png",
            "/images/razik-6.png",
            "/images/razik-7.png",
            "/images/razik-8.png",
            "/images/razik-9.png"
        ]
    },
    {
        id: 9,
        category: "Residence",
        client: "MR. SUJITH & SAVITHA",
        title: "RESIDENCE AT TIRUR",
        slug: "sujith-tirur",
        area: "2500 SQFT",
        location: "Tirur, Malappuram",
        year: "2024",
        description: "A contemporary residence featuring warm, earth-toned interiors and a seamless connection to private outdoor courts. The design emphasizes natural light and tactile materials to create a deeply personal and tranquil home environment.",
        images: [
            "/images/sujith-4.jpg",
            "/images/sujith-1.jpg",
            "/images/sujith-2.jpg",
            "/images/sujith-3.jpg",
            // "/images/sujith-5.jpg",
            "/images/sujith-6.png",
            "/images/sujith-7.png",
            "/images/sujith-8.png",
            "/images/sujith-9.png",
            "/images/sujith-10.png",
            "/images/sujith-11.png",
            "/images/sujith-12.png",
            "/images/sujith-13.png",
            "/images/sujith-14.png",
            "/images/sujith-15.png",

        ]
    },
    {
        id: 1,
        category: "Residence",
        client: "Mr. Abdurahiman & Ms. Shareena",
        title: "RESIDENCE AT AREEKODE",
        slug: "abdurahiman-areekode",
        area: "4000 SQFT",
        location: "Areekode, Malappuram",
        year: "2023",
        description: "A modern residence that balances bold geometry with soft natural textures. The design creates fluid transitions between indoor and outdoor spaces while maintaining a calm, private living environment.",
        images: [
            "/images/abdurahiman-5.jpg",

            "/images/abdurahiman-4.jpg",
            "/images/abdurahiman-3.jpg",
            "/images/abdurahiman-6.jpg",
            "/images/abdurahiman-2.jpg",
            "/images/abdurahiman-1.jpg"


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
            "/images/shinu-facade2.png"
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
