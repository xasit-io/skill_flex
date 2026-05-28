import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutVector from "../assests/LogoutVector.svg";
import Account from "../assests/Account.svg";
import DownArrow from "../assests/DownArrow.svg";
import LeftArrow from "../assests/LeftArrow.svg";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const isCareerDetail = location.pathname.includes("careerdetail");
    const isLearningPath = location.pathname.includes("learningpath");
    const isJobsDetail = location.pathname.startsWith("/jobs/") && location.pathname !== "/jobs";
    const isJobsPage = location.pathname === "/jobs";

    const showBackButton = isCareerDetail || isLearningPath;
    const isHome = location.pathname === "/" || location.pathname.includes("home");

    return (
        <header className="relative w-full h-16 md:h-20 flex items-center justify-between px-4 md:pl-28 md:pr-12 z-40 bg-transparent">
            
            {/* Left Section: Back Button or Title */}
            <div className="flex items-center">
                {showBackButton ? (
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1E211D] border border-white/5 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                    >
                        <img src={LeftArrow} alt="Back" className="w-[18px] h-auto" />
                    </button>
                ) : isJobsDetail ? (
                    <p className="text-[#A0A3A1] text-xs md:text-sm font-space-grotesk tracking-wide truncate">
                        Jobs / Result
                    </p>
                ) : isJobsPage ? (
                    <p className="text-[#A0A3A1] text-xs md:text-sm font-space-grotesk tracking-wide">
                        Jobs
                    </p>
                ) : (
                    <p className="text-[#A0A3A1] text-xs md:text-sm font-space-grotesk tracking-wide">
                        Career Paths
                    </p>
                )}
            </div>

            {/* Right Section: Profile Area & Actions */}
            <div className="flex items-center gap-4 relative">
                
                {/* Profile Controls Group */}
                <div className="flex items-center gap-1.5 md:gap-2">
                    {/* Profile Image - Direct Click Navigates to Profile Page */}
                    <button 
                        onClick={() => navigate("/profile")}
                        aria-label="Go to Profile"
                        className="relative p-[2px] rounded-full group cursor-pointer focus:outline-none"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9FE870] to-[#15CF9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                        <div className="relative bg-[#1E221E] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10 border border-white/5">
                            <img src={Account} alt="Account" className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                    </button>

                    {/* Down Arrow - Opens Options Dropdown */}
                    <button 
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        aria-label="Profile menu options"
                        className="p-1 focus:outline-none"
                    >
                        <img 
                            src={DownArrow} 
                            alt="Options arrow" 
                            className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`} 
                        />
                    </button>
                </div>

                {/* Desktop Logout Slider Button (Visible only on Desktop Home) */}
                {isHome && (
                    <button className="hidden md:flex group relative h-11 w-11 items-center overflow-hidden rounded-[4px] border border-[#373934] bg-[#21231D] shadow-md transition-all duration-300 hover:w-28 active:translate-y-[1px]">
                        <div className="flex w-11 items-center justify-center transition-all duration-300 group-hover:w-[30%] group-hover:pl-4">
                            <svg viewBox="0 0 512 512" className="w-3.5 fill-[#f3f3f3]">
                                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                            </svg>
                        </div>
                        <div className="absolute right-0 flex items-center w-0 opacity-0 transition-all duration-300 group-hover:w-[70%] group-hover:pl-2 group-hover:opacity-100">
                            <span className="whitespace-nowrap text-xs font-semibold text-[#FFFFFF] font-space-grotesk">
                                Logout
                            </span>
                        </div>
                    </button>
                )}

                {/* Dropdown Options Menu */}
                {showProfileMenu && (
                    <div className="absolute right-0 top-14 w-44 bg-[#121411] border border-white/10 rounded-lg shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Option 1: Profile page */}
                        <button 
                            onClick={() => {
                                navigate("/profile");
                                setShowProfileMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#A0A3A1] hover:text-white hover:bg-white/5 rounded-md transition-all font-space-grotesk text-left"
                        >
                            <img src={Account} alt="Profile Icon" className="w-4 h-4 opacity-70" />
                            <span>View Profile</span>
                        </button>

                        <div className="h-[1px] bg-white/10 my-1" />

                        {/* Option 2: Logout */}
                        <button 
                            onClick={() => {
                                // Insert your custom logout logic here
                                setShowProfileMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-md transition-all font-space-grotesk text-left"
                        >
                            <svg viewBox="0 0 512 512" className="w-4 fill-current">
                                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;