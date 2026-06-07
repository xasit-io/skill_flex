import React from 'react';
import { useNavigate } from 'react-router-dom';
import house from "../../assests/house.svg";
import Vector from "../../assests/Vector.svg";
import Header from "../../components/Header.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import briefcase from "../../assests/briefcase.svg";
import Filters from '../../components/Filters.jsx';
import SearchBar from '../../components/SearchBar.jsx';
import { roles } from '../../data.js';

function CareerListing() {

    const GradientButton = ({ onClick, children, className = "" }) => (
        <button onClick={onClick} className={`group relative flex w-full min-h-[44px] items-center justify-center overflow-hidden rounded-full border-2 border-[#75E07D] bg-[#21231D] py-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 ${className}`} >
            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 font-space-grotesk font-semibold bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent transition-all duration-500 group-hover:text-[#21231D] group-hover:[background:none]"> {children} </span>
        </button>
    );

    const navigate = useNavigate();

    return (
        <div className="background1 relative min-h-screen w-full font-space-grotesk overflow-x-hidden bg-[#0C0E0B]">
            <Header />
            <Sidebar Vector={Vector} house={house} briefcase={briefcase} />
            <main className="relative z-10 flex flex-col items-center pt-4 md:pt-[45px] px-2 md:px-4 pb-24 md:pb-12 md:ml-[76px] transition-all duration-300">
                <div className="w-full max-w-[1200px]">
                    <div className="mb-8 md:mb-12 space-y-4">
                        <SearchBar />
                        <Filters />
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-5 justify-center max-w-[1200px] px-3 md:px-4 mx-auto transition-all duration-300" >
                        {roles.map((role, i) => (
                            <article key={i} className="p-3 md:p-5 rounded-2xl shadow-xl w-full sm:max-w-[360px]" style={{ backgroundColor: role.cardBg }} >
                                <h1 className="font-space-grotesk font-bold pb-3 md:pb-4 flex justify-center text-[21px] md:text-[30px] leading-snug text-center"> {role.title} </h1>
                                <div className="flex gap-2 md:gap-4 mb-3 md:mb-4">
                                    {[
                                        { label: "Yearly Salary", value: `💰 ${role.salary}` },
                                        { label: "Vibe Check", value: `✅ ${role.vibe}` },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="p-3 md:p-4 rounded-[4px] w-1/2 text-center" style={{ backgroundColor: role.boxBg }} >
                                            <p className="font-space-grotesk text-[#3A3328] text-xs md:text-sm">{label}</p>
                                            <p className="font-space-grotesk text-[#3A3328] font-bold text-base md:text-2xl">{value}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="font-space-grotesk text-[#3A3328] text-[13px] md:text-sm leading-[1.4] mb-3 md:mb-4"> {role.description} </p>
                                <h4 className="font-space-grotesk text-[#3A3328] text-[15px] md:text-lg font-medium mb-2"> Required Skills </h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {role.skills.map((skill, idx) => (
                                        <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#CEC4B3] text-[#3A3328] font-space-grotesk text-xs md:text-sm" style={{ backgroundColor: role.cardBg1 }} > {skill} </span>
                                    ))}
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