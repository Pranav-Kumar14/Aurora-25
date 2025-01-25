import { GamepadIcon, Sparkles } from "lucide-react";

const sponsors = [
    {
        id: 1,
        name: "Manna Rolls",
        image: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb-1_en9eof.jpg",
        description: "Manipal's go-to spot for delicious, affordable, and freshly prepared rolls. Conveniently located on End Point Road, it's a favorite among students for its quick service and flavorful menu. With a focus on quality ingredients and fast service, Manna Rolls ensures every meal is satisfying and budget-friendly.",
        highlights: ["Freshness Guaranteed", "Affordable pricing", "Convenient location", "Student favourite"],
        location: "End Point Road, Vidyaratna Nagar, Manipal 576104, KA",
        contact: "+91 72595 40905",
        delivery: "Available on Swiggy and Zomato for online food ordering"
    },
    {
        id: 2,
        name: "Radha Medicals",
        image: "https://res.cloudinary.com/daja3mrty/image/upload/e_improve,w_200,h_160,c_thumb,g_auto/v1737486420/radhamedicals_bjf9mt.jpg",
        description: "Radha Medicals is a renowned and trusted pharmacy located in the heart of MIT, Manipal, known for its exceptional service and commitment to community health. With a wide range of medicines, supplements, and personal care products, Radha Medicals has been a go-to destination for students and residents and visitors in the Manipal area.",
        highlights: ["Trusted Pharmacy", "Wide Range of Products", "Expert Advice", "Community Health",],
        location: "Manipal Commerical Complex, GF & Mezzane Floor, D.No 16,Eshwara Nagar, Manipal ",
        contact: "+91 8204299601",
        delivery: "Home delivery available for medicines and healthcare products"
    },
    {
        id: 3,
        name: "Trigger Gaming",
        image: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp1_c5whux.png",
        description: "Located in the heart of Vidyartha Nagar, Manipal, delivers exceptional gaming experiences, catering to both competitive and casual gamers. With high-end gaming PCs, consoles, and a wide selection of games, Trigger Gaming is the ultimate destination for all things gaming.",
        highlights: ["Exciting Tournaments", "Vibrant Gaming Communit", "Top-tier Gaming Setup", "Casual and Competitive Gaming"],
        location: "MS Apartments, Vidyartha Nagar, Manipal 576104, KA",
        contact: "+91 9663901700",
        delivery: "In-store gaming events available"
    },
    {
        id: 4,
        name: "Youstar",
        image: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb-2_mi7jpa.jpg",
        description: "Youstar is a comtemporary clothing brand offering trendy, high-quality, and affordable fashion for all. Focused on sustainability and style, Yousta redefines everyday wear with unique designs, comformatable fabrics, and a commitment to eco-friendly practices.",
        highlights: ["Stylish and Trendy Designs", "Affordable Fashion", "Customer-Centric Approach", "High-Quality Apparel"],
        location: "Pragati Buisness District,Manipal Road, Shivalli, Hayagreeva Nagar,Udupi,Manipal,Karnataka 576104",
        contact: "+91 88004 40469",
        delivery: "Online shopping available on their website"
    },
    {
        id: 5,
        name: "YRCAIRI",
        image: "/cairi.jpg",
        description: "We are a educational organization that offers online and offline training programs for students at various levels. They specialize in providing industry-oriented courses and research programs to help students at various levels.They specialize in providing industry-oriented courses and research programs to help students develop skills in information technology, data-analytics, and research.",
        highlights: ["Industry-Oriented Courses", "Research Programs", "Skill Development", "Online and Offline Training"],
        location: "Sector-18,Kharghar,Navi Mumbai, Maharashtra",
        contact: "+91 9771496998",
        delivery: "Online and Offline Training Programs available"
    },
    {
        id: 6,
        name: "Fitness Zone",
        image: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp6_ptjjoh.png",
        description: "Fitness Zone is Manipal's premier air-conditioned gym, located just a short ride away from the college. Equipped with state-of-the-art equipment, experienced trainers, and a variety of fitness classes, Fitness Zone is the perfect place to achieve your fitness goals.",
        highlights: ["Flexible and affordable membership plans", "High Quality Equipment", "Certified Trainers", "Hygiene and safety", "Convenient location"],
        location: "Distributed across Manipal",
        contact: "+91 9113697797",
        delivery: "Personal training and group classes available"
    },
    {
        id: 7,
        name: "RideAlly",
        image: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb3_ungkna.jpg",
        description: "RideAlly is a tech-driven startup providing GURANTEED CABS services in 6 Metro cities of India for scheduled travels.",
        highlights: ["Guaranteed Cabs", "Scheduled Travels", "Tech-Driven Startup", "6 Metro Cities"],
        location: "569/4, 2nd Floor, 24th Main, 7th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
        contact: "+91 9739826789",
        delivery: "Scheduled Travels available in 6 Metro Cities"
    }
];

function Sponsor() {
    return (
        <div className="min-h-screen bg-[#020617] text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden py-20 px-6">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1800')] bg-cover bg-center opacity-10" />
                <div className="relative container mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#0080ff]">
                            Our Sponsors
                        </h1>
                    </div>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                        Meet the amazing partners who made this tech event possible
                    </p>
                </div>
            </div>

            {/* Sponsors Grid */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ffff] to-[#0080ff] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-gray-900 border-0 rounded-lg overflow-hidden">
                                <div className="p-4">
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className="w-full h-32 object-cover rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sponsor Details */}
                <div className="space-y-12">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="bg-gray-900/50 border-0 overflow-hidden rounded-lg">
                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <img
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            className="w-full h-64 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-bold text-[#00ffff]">{sponsor.name}</h2>
                                        <p className="text-blue-100 leading-relaxed">
                                            {sponsor.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {sponsor.highlights.map((highlight) => (
                                                <span
                                                    key={highlight}
                                                    className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="space-y-2 text-blue-200">
                                            <p>📍 {sponsor.location}</p>
                                            <p>📞 {sponsor.contact}</p>
                                            <p>🚚 {sponsor.delivery}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sponsor;