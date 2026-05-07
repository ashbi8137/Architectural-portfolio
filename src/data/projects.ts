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
    { name: "Residence", image: "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-1.png" },
    { name: "Interior", image: "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-1.jpg" },
    { name: "Hospitality", image: "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-1.jpg" },
    { name: "Healthcare", image: "/images/HEALTHCARE/newlife-2.jpg" },
    { name: "Institute", image: "/images/INSTITUTE/INTERNATIONAL SCHOOL MANJERI/manjerischool-1.jpg" },
    { name: "Masterplan", image: "/images/MASTER PLAN/masterplan-1.jpg" }
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
        images: ["/images/MASTER PLAN/masterplan-1.jpg"]
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
        images: ["/images/MASTER PLAN/masterplan-2.jpg"]
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
        images: ["/images/MASTER PLAN/masterplan-3.jpg"]
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
        images: ["/images/MASTER PLAN/masterplan-4.jpg"]
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
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-1.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-2.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-3.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-4.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-5.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-6.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-7.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-8.png",
            "/images/RESIDENTIAL/MR. RAZIK FAROOK/razik-9.png"
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
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-4.jpg",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-1.jpg",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-2.jpg",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-3.jpg",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-6.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-7.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-8.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-9.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-10.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-11.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-12.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-13.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-14.png",
            "/images/RESIDENTIAL/MR. SUJITH & SAVITHA TIRUR/sujith-15.png"
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
            "/images/RESIDENTIAL/MR. ABDURAHIMAN AREEKODE/abdurahiman-5.jpg",
            "/images/RESIDENTIAL/MR. ABDURAHIMAN AREEKODE/abdurahiman-4.jpg",
            "/images/RESIDENTIAL/MR. ABDURAHIMAN AREEKODE/abdurahiman-3.jpg",
            "/images/RESIDENTIAL/MR. ABDURAHIMAN AREEKODE/abdurahiman-6.jpg",
            "/images/RESIDENTIAL/MR. ABDURAHIMAN AREEKODE/abdurahiman-2.jpg",
            "/images/RESIDENTIAL/MR. ABDURAHIMAN AREEKODE/abdurahiman-1.jpg"
        ]
    },
    {
        id: 2,
        category: "Interior",
        client: "Mr. Subin & Dr. Jahana",
        title: "INTERIOR AT MUKKAM",
        slug: "interior-at-mukkam",
        area: "3200 SQFT",
        location: "Mukkam, Kozhikode",
        year: "2023",
        description: "A sanctuary designed around a central green core, allowing nature to permeate every living space. The architecture fosters a constant dialogue between the interior comfort and the serenity of the outdoors.",
        images: [
            "/images/INTERIOR/MR. SUBIN MUKKAM/subin-living.jpg"
        ]
    },
    {
        id: 30,
        category: "Interior",
        client: "MR. RAZIK & SINU",
        title: "INTERIOR AT FAROOK",
        slug: "interior-at-farook",
        area: "12500 SQFT",
        location: "Farook, Kozhikode",
        year: "2024",
        description: "Minimalist and elegant interior design that focuses on material honesty and spatial clarity. The interiors feature a sophisticated palette of natural stone, wood, and light.",
        images: [
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-2.png",
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-3.png",
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-4.png",
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-5.png",
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-6.png",
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-7.png",
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-8.png",
            "/images/INTERIOR/MR. RAZIK FAROOK/razik-9.png"
        ]
    },
    {
        id: 31,
        category: "Interior",
        client: "MR. SUJITH & SAVITHA",
        title: "INTERIOR AT TIRUR",
        slug: "interior-at-tirur",
        area: "2500 SQFT",
        location: "Tirur, Malappuram",
        year: "2024",
        description: "Warm, earth-toned interior design that emphasizes comfort and tranquility. The design uses tactile materials and soft lighting to create a deeply personal home environment.",
        images: [
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-1.jpg",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-2.jpg",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-3.jpg",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-4.jpg",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-6.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-7.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-8.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-9.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-10.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-11.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-12.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-13.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-14.png",
            "/images/INTERIOR/MR. SUJITH & SAVITHA TIRUR/sujith-15.png"
        ]
    },
    {
        id: 32,
        category: "Interior",
        client: "Mr. Abdurahiman & Ms. Shareena",
        title: "INTERIOR AT AREEKODE",
        slug: "interior-at-areekode",
        area: "4000 SQFT",
        location: "Areekode, Malappuram",
        year: "2023",
        description: "Modern interior design balancing bold geometry with soft natural textures. The interiors are designed to be fluid and connected, creating a sense of openness and calm.",
        images: [
            "/images/INTERIOR/MR. ABDURAHIMAN AREEKODE/abdurahiman-1.jpg",
            "/images/INTERIOR/MR. ABDURAHIMAN AREEKODE/abdurahiman-2.jpg",
            "/images/INTERIOR/MR. ABDURAHIMAN AREEKODE/abdurahiman-6.jpg"
        ]
    },
    {
        id: 33,
        category: "Interior",
        client: "MR. ABOOBACKER",
        title: "INTERIOR AT CHAVAKKAD",
        slug: "interior-at-chavakkad",
        area: "4500 SQFT",
        location: "Chavakkad, Thrissur",
        year: "2024",
        description: "Grand interior spaces that combine traditional motifs with modern luxury. The design focuses on rich materials and detailed craftsmanship.",
        images: [
            "/images/INTERIOR/MR. ABOOBACKER CHAVAKKAD/aboobaker-1.jpg",
            "/images/INTERIOR/MR. ABOOBACKER CHAVAKKAD/aboobaker-2.jpg",
            "/images/INTERIOR/MR. ABOOBACKER CHAVAKKAD/aboobaker-3.jpg",
            "/images/INTERIOR/MR. ABOOBACKER CHAVAKKAD/aboobaker-5.jpg",
            "/images/INTERIOR/MR. ABOOBACKER CHAVAKKAD/aboobaker-6.jpg"
        ]
    },
    {
        id: 34,
        category: "Interior",
        client: "MR. ANAS & DR. VIMI",
        title: "INTERIOR AT TRIVANDRUM",
        slug: "interior-at-trivandrum",
        area: "3200 SQFT",
        location: "Trivandrum",
        year: "2023",
        description: "Compact and efficient interior design for urban living. The spaces are designed to be multifunctional and bright, utilizing every square inch effectively.",
        images: [
            "/images/INTERIOR/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-1.png",
            "/images/INTERIOR/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-2.png",
            "/images/INTERIOR/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-3.png",
            "/images/INTERIOR/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-4.png",
            "/images/INTERIOR/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-5.png"
        ]
    },

    {
        id: 3,
        category: "Residence",
        client: "Mr. Namshad & Family",
        title: "RESIDENCE AT NILAMBUR",
        slug: "residence-at-nilambur",
        area: "3800 SQFT",
        location: "Nilambur",
        year: "2024",
        description: "A contemporary residence designed to embrace the lush landscapes of Nilambur. The spatial organization prioritizes natural light and cross-ventilation, creating a seamless connection between the modern interior living spaces and the serenity of the outdoors.",
        images: [
            "/images/RESIDENTIAL/MR. SHINU PERINTHALMANNA/shinu-1.png",
            "/images/RESIDENTIAL/MR. SHINU PERINTHALMANNA/shinu-2.jpg",
            "/images/RESIDENTIAL/MR. SHINU PERINTHALMANNA/shinu-3.jpg"
        ]
    },
    {
        id: 36,
        category: "Residence",
        client: "Mr. Subin & Dr. Jahana",
        title: "RESIDENCE AT MUKKAM",
        slug: "residence-at-mukkam",
        area: "3200 SQFT",
        location: "Mukkam, Kozhikode",
        year: "2023",
        description: "A sanctuary designed around a central green core, allowing nature to permeate every living space. The architecture fosters a constant dialogue between the interior comfort and the serenity of the outdoors.",
        images: [
            "/images/RESIDENTIAL/MR. SUBIN MUKKAM/subin-day-final.jpg",
            "/images/RESIDENTIAL/MR. SUBIN MUKKAM/subin-living.jpg"
        ]
    },

    {
        id: 16,
        category: "Residence",
        client: "MR. ABOOBACKER",
        title: "RESIDENCE AT CHAVAKKAD",
        slug: "aboobacker-chavakkad",
        area: "4500 SQFT",
        location: "Chavakkad, Thrissur",
        year: "2024",
        description: "A grand residence that combines traditional architectural elements with modern spatial planning. The design features a sprawling layout with emphasis on natural light and cross-ventilation.",
        images: [
            "/images/RESIDENTIAL/MR. ABOOBACKER CHAVAKKAD/aboobaker-1.jpg",
            "/images/RESIDENTIAL/MR. ABOOBACKER CHAVAKKAD/aboobaker-2.jpg",
            "/images/RESIDENTIAL/MR. ABOOBACKER CHAVAKKAD/aboobaker-3.jpg",
            "/images/RESIDENTIAL/MR. ABOOBACKER CHAVAKKAD/aboobaker-4.jpg",
            "/images/RESIDENTIAL/MR. ABOOBACKER CHAVAKKAD/aboobaker-5.jpg",
            "/images/RESIDENTIAL/MR. ABOOBACKER CHAVAKKAD/aboobaker-6.jpg"
        ]
    },
    {
        id: 17,
        category: "Residence",
        client: "MR. ANAS & DR. VIMI",
        title: "RESIDENCE AT TRIVANDRUM",
        slug: "anas-vimi-trivandrum",
        area: "3200 SQFT",
        location: "Trivandrum",
        year: "2023",
        description: "A compact yet luxurious urban residence. The design utilizes vertical space effectively, creating a series of interconnected living areas that feel open and airy despite the tight site.",
        images: [
            "/images/RESIDENTIAL/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-1.png",
            "/images/RESIDENTIAL/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-2.png",
            "/images/RESIDENTIAL/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-3.png",
            "/images/RESIDENTIAL/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-4.png",
            "/images/RESIDENTIAL/MR. ANAS & DR. VIMI TRIVANDRUM/vimi-5.png"
        ]
    },
    {
        id: 18,
        category: "Institute",
        client: "Government of Kerala",
        title: "GLPS THACHANNA",
        slug: "glps-thachanna",
        area: "12000 SQFT",
        location: "Thachanna",
        year: "2024",
        description: "A vibrant and inclusive primary school design. The architecture uses color and form to create a stimulating learning environment that encourages play and exploration.",
        images: [
            "/images/INSTITUTE/GLPS THACHANNA/thachanna-1.jpg",
            "/images/INSTITUTE/GLPS THACHANNA/thachanna-2.jpg",
            "/images/INSTITUTE/GLPS THACHANNA/thachanna-3.jpg",
            "/images/INSTITUTE/GLPS THACHANNA/thachanna-4.jpg",
            "/images/INSTITUTE/GLPS THACHANNA/thachanna-5.jpg"
        ]
    },
    {
        id: 19,
        category: "Institute",
        client: "Educational Trust",
        title: "INTERNATIONAL SCHOOL MANJERI",
        slug: "international-school-manjeri",
        area: "85000 SQFT",
        location: "Manjeri, Malappuram",
        year: "2024",
        description: "A modern international school campus featuring world-class facilities. The design prioritizes student safety, accessibility, and a seamless connection to outdoor learning spaces.",
        images: [
            "/images/INSTITUTE/INTERNATIONAL SCHOOL MANJERI/manjerischool-1.jpg",
            "/images/INSTITUTE/INTERNATIONAL SCHOOL MANJERI/manjerischool-2.jpg",
            "/images/INSTITUTE/INTERNATIONAL SCHOOL MANJERI/manjerischool-3.jpg",
            "/images/INSTITUTE/INTERNATIONAL SCHOOL MANJERI/manjerischool-4.png",
            "/images/INSTITUTE/INTERNATIONAL SCHOOL MANJERI/manjerischool-5.png"
        ]
    },

    {
        id: 21,
        category: "Hospitality",
        client: "Transport Authority",
        title: "MALAPARAMBA BUS TERMINAL",
        slug: "malaparamba-bus-terminal",
        area: "45000 SQFT",
        location: "Malaparamba, Kozhikode",
        year: "2025",
        description: "A modern transit hub designed for high-volume pedestrian and vehicular flow. The architecture focuses on durability, clarity of movement, and passenger comfort.",
        images: [
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-1.jpg",
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-2.jpg",
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-3.jpg",
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-4.jpg",
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-5.jpg",
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-6.jpg",
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-7.jpg",
            "/images/HOSPITALITY/02. MALAPARAMBA BUS TERMINAL/buss-8.jpg"
        ]
    },
    {
        id: 20,
        category: "Hospitality",
        client: "Private Developer",
        title: "CLUB HOUSE MINI OOTY",
        slug: "club-house-mini-ooty",
        area: "15000 SQFT",
        location: "Arimbra, Malappuram",
        year: "2024",
        description: "A luxury club house nested in the hills of Mini Ooty. The design offers panoramic views of the valley and features premium amenities for recreation and social gatherings.",
        images: [
            "/images/HOSPITALITY/01. CLUB HOUSE MINI OOTY/clubhouse-1.png",
            "/images/HOSPITALITY/01. CLUB HOUSE MINI OOTY/clubhouse-2.png",
            "/images/HOSPITALITY/01. CLUB HOUSE MINI OOTY/clubhouse-3.jpg",
            "/images/HOSPITALITY/01. CLUB HOUSE MINI OOTY/clubhouse-4.jpg"
        ]
    },
    {
        id: 22,
        category: "Hospitality",
        client: "Aviation Concept",
        title: "GOA AIRPORT CONCEPT",
        slug: "goa-airport-concept",
        area: "120 Acres",
        location: "Goa",
        year: "2026",
        description: "A visionary concept for a greenfield airport in Goa. The design integrates sustainable aviation technology with a terminal that celebrates Goa's unique cultural and natural heritage.",
        images: [
            "/images/HOSPITALITY/03. GREENFEILD INTERNATIONAL AIRPORT GOA CONCEPT/airport-1.jpg",
            "/images/HOSPITALITY/03. GREENFEILD INTERNATIONAL AIRPORT GOA CONCEPT/airport-2.jpg",
            "/images/HOSPITALITY/03. GREENFEILD INTERNATIONAL AIRPORT GOA CONCEPT/airport-3.jpg",
            "/images/HOSPITALITY/03. GREENFEILD INTERNATIONAL AIRPORT GOA CONCEPT/airport-4.jpg",
            "/images/HOSPITALITY/03. GREENFEILD INTERNATIONAL AIRPORT GOA CONCEPT/airport-5.jpg"
        ]
    },

    {
        id: 15,
        category: "Healthcare",
        client: "Newlife Medical Group",
        title: "Newlife Hospital",
        slug: "newlife-hospital",
        area: "250000 SQFT",
        location: "Kochi, Kerala",
        year: "2024",
        description: "A state-of-the-art multi-specialty hospital designed with a focus on patient well-being and efficient medical workflows. The facility integrates advanced medical infrastructure with calming, nature-inspired interiors and healing gardens.",
        images: [
            "/images/HEALTHCARE/newlife-2.jpg",
            "/images/HEALTHCARE/newlife-1.mp4",
            "/images/HEALTHCARE/newlife-3.jpg",
            "/images/HEALTHCARE/newlife-4.jpg",
            "/images/HEALTHCARE/newlife-5.jpg",
            "/images/HEALTHCARE/newlife-6.jpg",
            "/images/HEALTHCARE/newlife-7.jpg",
            "/images/HEALTHCARE/newlife-8.jpg",
            "/images/HEALTHCARE/newlife-9.jpg"
        ]
    }
];

