import Header from "../../components/Header.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import Ai from "../../components/Ai.jsx";

import house from "../../assests/house.svg";
import briefcase from "../../assests/briefcase.svg";
import Vector from "../../assests/Vector.svg";
import down2 from "../../assests/down2.svg";
import PageHeader from "../../components/PageHeader.jsx";

import { jobs as defaultJobs, topCompanies as defaultTopCompanies } from "../../data.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Jobs = ({ jobs = defaultJobs, topCompanies = defaultTopCompanies }) => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select location");

    return (
        <div className="background1 relative min-h-screen">
            <Header />
            <Sidebar Vector={Vector} house={house} briefcase={briefcase} />
            <main className="relative z-10 pb-24 md:pb-12 px-4 md:px-10 md:pl-[110px]">
                <PageHeader title="Find jobs that match your vibe 🔥" />
                <section className="mt-4 md:mt-6 mx-auto max-w-[850px] rounded-[12px] md:rounded-[16px] bg-black/40 p-4 md:p-5">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 items-center">
                        <div className="relative w-full">
                            <input type="text" placeholder="Search job title" className="w-full h-[48px] md:h-[56px] rounded-[8px] border-2 border-[#2A3B31] bg-[#9FE870]/5 px-4 text-sm md:text-base text-[#D0D3D1] placeholder-[#707972] font-space-grotesk outline-none transition focus:border-[#3A5243]" />
                        </div>
                        <div className="relative w-full">
                            <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full h-[48px] md:h-[56px] px-4 bg-[#9FE870]/5 border-2 border-[#2A3B31] rounded-[8px] cursor-pointer transition-colors duration-200 hover:border-[#3A5243]" >
                                <span className="text-[#D0D3D1] text-sm md:text-base font-space-grotesk">{selected}</span>
                                <img src={down2} alt="Dropdown Arrow" className={`w-[22px] h-[22px] pointer-events-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                            </div>
                            {isOpen && (
                                <ul className="absolute z-20 w-full mt-1 bg-[#1E2924] border-2 border-[#2A3B31] rounded-[8px] overflow-hidden shadow-lg">
                                    <li onClick={() => { setSelected("Chicago, IL"); setIsOpen(false); }} className="px-4 py-3 cursor-pointer text-[#D0D3D1] text-sm md:text-base font-space-grotesk hover:bg-[#2A3B31] transition" >Chicago, IL</li>
                                    <li onClick={() => { setSelected("New York, NY"); setIsOpen(false); }} className="px-4 py-3 cursor-pointer text-[#D0D3D1] text-sm md:text-base font-space-grotesk hover:bg-[#2A3B31] transition" >New York, NY</li>
                                    <li onClick={() => { setSelected("Remote"); setIsOpen(false); }} className="px-4 py-3 cursor-pointer text-[#D0D3D1] text-sm md:text-base font-space-grotesk hover:bg-[#2A3B31] transition" >Remote</li>
                                </ul>
                            )}
                        </div>
                        <button className="relative p-[1.5px] rounded-lg md:rounded-full overflow-hidden flex-shrink-0 w-full md:w-[56px] h-[48px] md:h-[56px] active:scale-95 shadow-lg flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#9FE870] to-[#15CF9D]" />
                            <div className="relative bg-[#0B0E0E] rounded-[6px] md:rounded-full w-full h-full flex items-center justify-center gap-2 md:gap-0 px-4 md:px-0">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.786 16.543L13.757 12.514C14.829 11.186 15.429 9.514 15.429 7.714C15.429 3.471 11.957 0 7.714 0C3.471 0 0 3.471 0 7.714C0 11.957 3.471 15.429 7.714 15.429C9.514 15.429 11.186 14.786 12.514 13.757L16.543 17.786L17.786 16.543ZM7.757 13.714C4.457 13.714 1.757 11.014 1.757 7.714C1.757 4.414 4.457 1.714 7.757 1.714C11.057 1.714 13.757 4.414 13.757 7.714C13.757 11.014 11.057 13.714 7.757 13.714Z" fill="url(#paint0_linear_51239_5284)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_51239_5284" x1="0.416859" y1="17.786" x2="22.687" y2="17.163" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.170102" stop-color="#9FE870" />
                                            <stop offset="1" stop-color="#15CF9D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="md:hidden font-space-grotesk text-[#9FE870] font-medium text-sm">Search</span>
                            </div>
                        </button>
                    </div>
                </section>
                <section className="pt-8 md:pt-16 flex flex-col items-center">
                    <h3 className="text-[#D0D0CF] font-bold text-[20px] md:text-[32px] font-space-grotesk"> Browse Jobs </h3>
                    <h4 className="mt-2 md:mt-4 text-[#D0D0CF] text-[16px] md:text-[22px] font-medium font-space-grotesk text-center"> Hot Product Designer Jobs 🔥 </h4>
                    <div className="pt-6 md:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1200px] w-full mx-auto px-1 md:px-4">
                        {(showAll ? jobs : jobs.slice(0, 6)).map((job) => (
                            <div key={job.id} onClick={() => navigate(`/jobs/${job.id}`)} className="w-full p-[2px] rounded-xl cursor-pointer group hover:bg-gradient-to-r hover:from-[#9FE870] hover:to-[#15CF9D] transition-all duration-300" >
                                <div className="bg-[#1E211D] rounded-xl p-4 md:p-5 space-y-3 md:space-y-4 h-full flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <h2 className="text-[#9FE870] text-[18px] md:text-[22px] font-medium font-space-grotesk leading-[1.3] group-hover:text-white transition-colors">{job.title}</h2>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white text-[13px] md:text-[15px] font-space-grotesk">
                                            <div className="flex items-center gap-1.5">
                                                <img src={job.companyIcon} alt="Company" className="w-4 h-4 object-contain" />
                                                <span className="font-medium -tracking-[0.0125em]">{job.company}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[#8A8F8B]">
                                                <img src={job.locationIcon} alt="Location" className="w-4 h-4 object-contain" />
                                                <span className="font-medium -tracking-[0.0125em]">{job.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-white text-[14px] md:text-[16px]">
                                        <span>💰</span>
                                        <span className="font-semibold font-jakarta leading-7 -tracking-[0.015em]">{job.salary}</span>
                                        <span className="text-[#8A8F8B] text-[12px] md:text-[13px] font-space-grotesk">{job.period}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-white/5">
                                        <div className="flex flex-wrap gap-1.5">
                                            {job.tags.map((tag, index) => (
                                                <span className="px-2.5 py-1 text-[11px] font-bold font-space-grotesk rounded-[4px] bg-[#343633] border border-[#2F312E] text-[#D6D6D6]" key={index} > {tag} </span>
                                            ))}
                                        </div>
                                        <p className="text-[11px] text-[#787977] font-space-grotesk shrink-0">{job.posted}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setShowAll(!showAll)} className="group relative mt-6 md:mt-8 rounded-full p-[2px] bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 ease-out hover:-translate-y-[2px] active:opacity-75 outline-none w-[200px]" >
                        <span className="relative block overflow-hidden rounded-full bg-[#21231D] py-3 transition-colors duration-300 text-center">
                            <span className="absolute top-0 -left-[100%] h-full w-[10px] bg-[#9FE870] opacity-40 shadow-[0_0_20px_10px_#9FE870] transition-all duration-700 ease-in-out group-hover:left-[120%] skew-x-[-20deg]"></span>
                            <span className="relative z-10 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent font-medium font-space-grotesk group-hover:brightness-125 transition-all">
                                {showAll ? "See Fewer Jobs" : "See All Jobs"}
                            </span>
                        </span>
                    </button>
                </section>
                <section className="p-4 md:p-10 mt-12 min-h-[300px] max-w-[1200px] mx-auto">
                    <h2 className="text-[#D0D0CF] text-[18px] md:text-[24px] font-medium text-center mb-6 md:mb-10 font-space-grotesk"> Top Companies hiring product designers </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                        {topCompanies.map((company, index) => (
                            <div key={index} className="flex items-center gap-4 w-full max-w-[320px] bg-white/[0.02] md:bg-transparent p-4 md:p-0 rounded-xl border border-white/[0.05] md:border-none" >
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/[0.03] rounded-lg p-2 shrink-0">
                                    <img src={company.img} alt={company.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-[15px] md:text-[16px] font-semibold text-white font-space-grotesk"> {company.name} </h4>
                                    <p className="text-[13px] md:text-[14px] text-[#808080] font-space-grotesk"> {company.position} open positions </p>
                                    <button className="pt-2 text-[13px] md:text-[14px] text-[#9FE870] font-space-grotesk font-medium transition-all duration-300 hover:underline hover:text-[#B5F88F] hover:translate-x-1 block"> View Jobs </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Ai />
        </div>
    );
};

export default Jobs;