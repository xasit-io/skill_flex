import React from "react";
import LogoutVector from "../assests/LogoutVector.svg";
import Account from "../assests/Account.svg";
import DownArrow from "../assests/DownArrow.svg";
import { useNavigate, useLocation } from "react-router-dom";
import LeftArrow from "../assests/LeftArrow.svg"

const Header = () => {


    const location = useLocation();
    const navigate = useNavigate();

    const isCareerDetail = location.pathname.includes("careerdetail");
    const isLearningPath = location.pathname.includes("learningpath");
    const isJobsDetail = location.pathname.startsWith("/jobs/") && location.pathname !== "/jobs";
    const isJobsPage = location.pathname === "/jobs";

    const showBackButton = isCareerDetail || isLearningPath;
    const ishome = location.pathname === "/" || location.pathname.includes("home");

    console.log(location.pathname);

    return (
        <>
            <div className="h-12 md:h-[70px] flex items-center justify-between pl-3 pr-3 md:pl-28 md:pr-0 z-40">

                {showBackButton ? (
                    <button
                        onClick={() => navigate(-1)}
                        className="w-11 h-11 md:w-[56px] md:h-[56px] p-[2px] relative top-0 md:top-[24px] rounded-full transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_4px_12px_rgba(30,33,29,0.5)]"
                    >
                        <div className="w-full h-full rounded-full bg-[#1E211D] flex items-center justify-center">
                            <img src={LeftArrow} alt="Back" className="w-[18px]" />
                        </div>
                    </button>
                ) : isJobsDetail ? (<p className="text-[#A0A3A1] text-xs md:text-[14px] font-space-grotesk truncate"> Jobs / Result</p>)
                    : isJobsPage ? (<p className="text-[#A0A3A1] text-xs md:text-[14px] font-space-grotesk"> Jobs  </p>)
                        : (<p className="text-[#A0A3A1] text-xs md:text-[14px] font-space-grotesk"> Career Paths </p>)}

                <div className="hidden md:flex absolute top-[24px] right-[50px] items-center gap-[8px]">
                    <div className="relative p-[2px] rounded-full group cursor-pointer">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9FE870] to-[#15CF9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"> </div>
                        <div className="relative bg-[#1E221E] w-12 h-12 rounded-full flex items-center justify-center z-10">
                            <img src={Account} alt="Account" className="w-[24px] h-[24px]" />
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <img src={DownArrow} alt="More Options" className="w-[16px] h-[16px]" />
                    </div>
                </div>

                {ishome && (
                    <button className="hidden md:flex group h-[45px] w-[45px] items-center overflow-hidden rounded-[4px] border-2 border-[#373934] bg-[#21231D] shadow-[2px_2px_10px_rgba(0,0,0,0.199)] transition-all duration-300 hover:w-[125px] active:translate-x-[2px] active:translate-y-[2px] absolute right-[45px] top-[95px]">
                        <div className="flex w-full items-center justify-center transition-all duration-300 group-hover:w-[30%] group-hover:pl-[20px]">
                            <svg viewBox="0 0 512 512" className="w-[14px] fill-[#f3f3f3]">
                                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                            </svg>
                        </div>
                        <div className="absolute right-0 flex items-center  w-0 opacity-0 transition-all duration-300 group-hover:w-[70%] group-hover:pl-[10px] group-hover:opacity-100">
                            <span className="whitespace-nowrap text-[14px] font-medium text-[#FFFFFF] font-space-grotesk"> Logout </span>
                        </div>
                    </button>
                )}
            </div>
        </>
    );
};

export default Header;