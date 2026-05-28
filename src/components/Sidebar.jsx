import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ Vector }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === "/home" || location.pathname === "/";
    const isJobs = location.pathname === "/jobs";
    const isCareerListing = location.pathname === "/careerlisting";
    const isLearningPath = location.pathname === "/learningpath";
    const isJobDetail = location.pathname.startsWith("/jobs/") && location.pathname !== "/jobs";
    const isCareerDetail = location.pathname.startsWith("/careerdetails/") && location.pathname !== "/careerdetails";

    const highlightHome = isHome || isCareerDetail || isLearningPath;
    const highlightJobs = isJobs || isJobDetail;

    return (
        <aside className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0C0E0B]/95 backdrop-blur-md px-4 py-2 md:left-0 md:top-0 md:right-auto md:h-screen md:w-[76px] md:border-r md:border-t-0 md:px-0 md:py-6 flex flex-row md:flex-col items-center justify-around md:justify-start gap-y-6">
            
            {/* Logo Group - Visible only on Desktop */}
            <div className="hidden md:flex flex-col items-center w-full">
                {Vector && <img src={Vector} alt="Logo" className="w-6 h-6 mx-auto mb-4" />}
                <div className="w-8 h-[1px] bg-white/10 mx-auto" />
            </div>

            {/* Navigation Icons container */}
            <div className="flex flex-row md:flex-col justify-around md:justify-start items-center w-full gap-x-4 md:gap-x-0 md:gap-y-4">
                
                {/* Home */}
                <button 
                    aria-label="Home" 
                    onClick={() => navigate("/home")} 
                    className={`w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-[10px] transition-all duration-200 active:scale-95 ${
                        highlightHome ? "bg-[#1A2218] shadow-inner" : "hover:bg-white/5 opacity-90 md:opacity-60 hover:opacity-100"
                    }`}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="homeIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="17%" stopColor="#9FE870" />
                                <stop offset="100%" stopColor="#15CF9D" />
                            </linearGradient>
                        </defs>
                        <path d="M15 20.9995V12.9995C15 12.7343 14.8946 12.4799 14.7071 12.2924C14.5196 12.1048 14.2652 11.9995 14 11.9995H10C9.73478 11.9995 9.48043 12.1048 9.29289 12.2924C9.10536 12.4799 9 12.7343 9 12.9995V20.9995M3 9.99948C2.99993 9.70855 3.06333 9.4211 3.18579 9.1572C3.30824 8.89329 3.4868 8.65928 3.709 8.47148L10.709 2.47248C11.07 2.16739 11.5274 2 12 2C12.4726 2 12.93 2.16739 13.291 2.47248L20.291 8.47148C20.5132 8.65928 20.6918 8.89329 20.8142 9.1572C20.9367 9.4211 21.0001 9.70855 21 9.99948V18.9995C21 19.5299 20.7893 20.0386 20.4142 20.4137C20.0391 20.7888 19.5304 20.9995 19 20.9995H5C4.46957 20.9995 3.96086 20.7888 3.58579 20.4137C3.21071 20.0386 3 19.5299 3 18.9995V9.99948Z" stroke={highlightHome ? "url(#homeIconGradient)" : "white"} strokeOpacity={highlightHome ? "1" : "0.6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Jobs */}
                <button 
                    aria-label="Jobs" 
                    onClick={() => navigate("/jobs")} 
                    className={`w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-[10px] transition-all duration-200 active:scale-95 ${
                        highlightJobs ? "bg-[#1A2218]" : "hover:bg-white/5 opacity-90 md:opacity-60 hover:opacity-100"
                    }`}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="jobIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="17%" stopColor="#9FE870" />
                                <stop offset="100%" stopColor="#15CF9D" />
                            </linearGradient>
                        </defs>
                        <path d="M16 20V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V20M4 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V8C2 6.89543 2.89543 6 4 6Z" stroke={highlightJobs ? "url(#jobIconGradient)" : "white"} strokeOpacity={highlightJobs ? "1" : "0.6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Career Listing */}
                <button 
                    aria-label="Career listing" 
                    onClick={() => navigate("/careerlisting")} 
                    className={`w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-[10px] transition-all duration-200 active:scale-95 ${
                        isCareerListing ? "bg-[#1A2218] shadow-inner" : "hover:bg-white/5 opacity-90 md:opacity-60 hover:opacity-100"
                    }`}
                >
                    <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="17%" stopColor="#9FE870" />
                                <stop offset="100%" stopColor="#15CF9D" />
                            </linearGradient>
                        </defs>
                        <path d="M22.1039 0H11.4995C9.35094 0 7.60261 1.74932 7.60261 3.89788C7.60261 6.04645 9.35094 7.79477 11.4995 7.79477H17.8765C19.0374 7.79477 19.9813 8.73863 19.9813 9.89953C19.9813 11.0604 19.0364 12.0043 17.8765 12.0043H7.04606C6.64482 10.4611 5.25293 9.3131 3.58625 9.3131C1.60894 9.3131 0 10.923 0 12.9013C0 14.8797 1.60894 16.4886 3.58625 16.4886C5.25293 16.4886 6.64482 15.3406 7.04606 13.7984H17.8775C20.0261 13.7984 21.7744 12.0491 21.7744 9.90052C21.7744 7.75196 20.0261 6.00264 17.8775 6.00264H11.4995C10.3386 6.00264 9.39474 5.05878 9.39474 3.89888C9.39474 2.73798 10.3386 1.79412 11.4995 1.79412H22.1039C22.5988 1.79412 23 1.39288 23 0.898056C23 0.403229 22.5988 0 22.1039 0ZM3.58625 14.6955C2.5966 14.6955 1.79213 13.891 1.79213 12.9013C1.79213 11.9117 2.59759 11.1062 3.58625 11.1062C4.57591 11.1062 5.38137 11.9117 5.38137 12.9013C5.38137 13.891 4.57591 14.6955 3.58625 14.6955Z" fill={isCareerListing ? "url(#roadmapGradient)" : "#D9E6DF"} fillOpacity={isCareerListing ? "1" : "0.6"} />
                    </svg>
                </button>

            </div>
        </aside>
    );
};

export default Sidebar;