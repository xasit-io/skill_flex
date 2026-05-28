import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import house from "../../assests/house.svg";
import Vector from "../../assests/Vector.svg";
import Header from "../../components/Header.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import briefcase from "../../assests/briefcase.svg";
import Filters from '../../components/Filters.jsx';
import SearchBar from '../../components/SearchBar.jsx';

function CareerListing() {

    const GradientButton = ({ onClick, children, className = "" }) => (
        <button onClick={onClick} className={`group relative flex w-full min-h-[44px] items-center justify-center overflow-hidden rounded-full border-2 border-[#75E07D] bg-[#21231D] py-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 ${className}`} >
            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 font-space-grotesk font-semibold bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent transition-all duration-500 group-hover:text-[#21231D] group-hover:[background:none]">
                {children}
            </span>
        </button>
    );


    const navigate = useNavigate();

    // 12 career paths with custom colors mapping back to your card format
    const [roles] = useState([
        {
            id: 1,
            title: "Product Designer",
            salary: "$128k",
            vibe: "80%",
            description: "Creates new product concepts focused on functionality, interface accessibility, and user experience.",
            skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
            cardBg: "#F7EAD3",    // Beige
            boxBg: "#EADCC5",
            cardBg1: "#DFD2BB"
        },
        {
            id: 2,
            title: "Data Analyst",
            salary: "$115k",
            vibe: "85%",
            description: "Examines complex numbers and variables to help organizations synthesize information and make decisions.",
            skills: ["SQL", "Tableau", "Python", "Data Modeling"],
            cardBg: "#F3D7EC",    // Pink
            boxBg: "#E5C8DE",
            cardBg1: "#D8BCD1"
        },
        {
            id: 3,
            title: "Product Associate",
            salary: "$95k",
            vibe: "90%",
            description: "Helps implement product strategy and supports product managers in delivering project milestones.",
            skills: ["Jira", "Market Research", "Agile", "Roadmapping"],
            cardBg: "#D6F0DB",    // Light Green
            boxBg: "#C7E1CC",
            cardBg1: "#B9D3BE"
        },
        {
            id: 4,
            title: "Full Stack Engineer",
            salary: "$145k",
            vibe: "75%",
            description: "Designs, maintains, and implements front-end interfaces along with secure database architectures.",
            skills: ["React.js", "Node.js", "PostgreSQL", "API Design"],
            cardBg: "#D4EBF8",    // Light Blue
            boxBg: "#C4DCED",
            cardBg1: "#B5CDDE"
        },
        {
            id: 5,
            title: "DevOps Engineer",
            salary: "$150k",
            vibe: "80%",
            description: "Automates development pipelines, system configurations, and manages scalable cloud infrastructures.",
            skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
            cardBg: "#E2DBF0",    // Lavender
            boxBg: "#D2CADF",
            cardBg1: "#C3BBD0"
        },
        {
            id: 6,
            title: "UX Researcher",
            salary: "$110k",
            vibe: "95%",
            description: "Conducts studies and user interviews to inform design and development cycles with real customer feedback.",
            skills: ["Interviews", "Usability Testing", "Personas", "Analytics"],
            cardBg: "#F9EFC7",    // Soft Yellow
            boxBg: "#E9DFB8",
            cardBg1: "#DAD0AA"
        },
        {
            id: 7,
            title: "Mobile App Developer",
            salary: "$130k",
            vibe: "82%",
            description: "Builds high-performance native and cross-platform mobile applications for iOS and Android.",
            skills: ["Flutter", "Swift", "Kotlin", "State Management"],
            cardBg: "#D4EBF8",    // Light Blue
            boxBg: "#C4DCED",
            cardBg1: "#B5CDDE"
        },
        {
            id: 8,
            title: "Cybersecurity Analyst",
            salary: "$135k",
            vibe: "78%",
            description: "Protects networks, computer systems, and user data from security breaches and malicious system access.",
            skills: ["Pen Testing", "Network Security", "Linux", "Ethical Hacking"],
            cardBg: "#F7EAD3",    // Beige
            boxBg: "#EADCC5",
            cardBg1: "#DFD2BB"
        },
        {
            id: 9,
            title: "Product Manager",
            salary: "$140k",
            vibe: "88%",
            description: "Owns the overall product lifecycle from discovery, business modeling, to release execution.",
            skills: ["Strategy", "KPIs", "Stakeholder Mgmt", "SCRUM"],
            cardBg: "#F3D7EC",    // Pink
            boxBg: "#E5C8DE",
            cardBg1: "#D8BCD1"
        },
        {
            id: 10,
            title: "QA Automation Tester",
            salary: "$105k",
            vibe: "87%",
            description: "Develops Automated testing scripts to run end-to-end user checks on platforms prior to product deployment.",
            skills: ["Selenium", "Cypress", "JavaScript", "Writing Test Cases"],
            cardBg: "#D6F0DB",    // Light Green
            boxBg: "#C7E1CC",
            cardBg1: "#B9D3BE"
        },
        {
            id: 11,
            title: "AI Engineer",
            salary: "$165k",
            vibe: "70%",
            description: "Creates machine learning pipelines, predictive engines, and neural models for intelligent decision making.",
            skills: ["PyTorch", "TensorFlow", "NLP", "Data Pipelines"],
            cardBg: "#E2DBF0",    // Lavender
            boxBg: "#D2CADF",
            cardBg1: "#C3BBD0"
        },
        {
            id: 12,
            title: "Digital Strategist",
            salary: "$100k",
            vibe: "92%",
            description: "Designs conversion funnels, paid acquisition structures, and SEO blueprints to improve search footprints.",
            skills: ["Google Analytics", "SEO", "Copywriting", "A/B Testing"],
            cardBg: "#F9EFC7",    // Soft Yellow
            boxBg: "#E9DFB8",
            cardBg1: "#DAD0AA"
        }
    ]);

    return (
        <div className="background1 relative min-h-screen w-full font-space-grotesk overflow-x-hidden bg-[#0C0E0B]">
            <Header />
            <Sidebar Vector={Vector} house={house} briefcase={briefcase} />
            <main className="relative z-10 flex flex-col items-center pt-4 md:pt-[45px] px-4 md:px-6 pb-24 md:pb-12 md:ml-[76px] transition-all duration-300">
                <div className="w-full max-w-[1200px]">
                    <div className="mb-8 md:mb-12 space-y-4"> <SearchBar /> <Filters /> </div>
                    <div className="flex flex-wrap gap-4 md:gap-6 justify-center w-full px-1 md:px-4 mx-auto transition-all duration-300">
                        {roles.map((role, i) => (
                            <article key={i} className="p-4 md:p-6 rounded-3xl shadow-lg w-full sm:max-w-[350px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]" style={{ backgroundColor: role.cardBg }} >
                                <div>
                                    <h1 className="font-space-grotesk font-bold pb-3 md:pb-4 flex justify-center text-[20px] md:text-[28px] leading-snug text-center text-[#111310]"> {role.title} </h1>
                                    <div className="flex gap-2.5 md:gap-4 mb-4">
                                        {[
                                            { label: "Yearly Salary", value: `💰 ${role.salary}` },
                                            { label: "Vibe Check", value: `✅ ${role.vibe}` },
                                        ].map(({ label, value }) => (
                                            <div key={label} className="p-3 rounded-xl w-1/2 text-center border border-black/[0.04]" style={{ backgroundColor: role.boxBg }} >
                                                <p className="font-space-grotesk text-[#5A5852] text-xs font-semibold uppercase tracking-wider mb-1"> {label} </p>
                                                <p className="font-space-grotesk text-[#111310] font-bold text-sm md:text-lg"> {value} </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="font-space-grotesk text-[#3A3328] text-xs md:text-sm leading-relaxed mb-4"> {role.description} </p>
                                    <h4 className="font-space-grotesk text-[#111310] text-[14px] md:text-base font-bold mb-2"> Required Skills </h4>
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {role.skills.map((skill, idx) => (
                                            <span key={idx} className="px-3 py-1.5 rounded-full border border-black/10 text-[#3A3328] font-space-grotesk text-[11px] md:text-xs font-medium" style={{ backgroundColor: role.cardBg1 }} >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <GradientButton onClick={() => navigate(`/careerdetails/${role.id}`)}>Discover Path</GradientButton>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CareerListing;