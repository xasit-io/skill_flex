import "../index.css";
import house from "../../../assests/house.svg";
import Vector from "../../../assests/Vector.svg";
import Header from "../../../components/Header.jsx";
import Sidebar from "../../../components/Sidebar.jsx";
import briefcase from "../../../assests/briefcase.svg";
import mappin from "../../../assests/mappin.svg";
import hotel from "../../../assests/hotel.svg";
import Logo from "../../../assests/Logo.svg";

import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import down2 from "../../../assests/down2.svg";
import search from "../../../assests/search.svg";
import { dropdownData, jobs } from "../../../data.js";

export default function JobDetail() {
    const navigate = useNavigate();

    // Search and dynamic filtering states
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("Select location");
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

    // Active Job details state
    const [activeJobId, setactiveJobId] = useState(jobs[0]?.id || null);

    // Expand or Collapse state for job description
    const [expanded, setExpanded] = useState(false);

    // Filters states
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedValues, setSelectedValues] = useState(Array(dropdownData.length).fill(""));

    // Interactive features states
    const [savedJobIds, setSavedJobIds] = useState([]);
    const [copiedStates, setCopiedStates] = useState(false);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [applicantName, setApplicantName] = useState("");
    const [applicantEmail, setApplicantEmail] = useState("");
    const [hasAppliedForActive, setHasAppliedForActive] = useState({});

    // Filter jobs based on search query and location
    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.company.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesLocation = selectedLocation === "Select location" ||
                job.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
                (selectedLocation === "Remote" && job.location.toLowerCase().includes("remote"));

            return matchesSearch && matchesLocation;
        });
    }, [searchQuery, selectedLocation]);

    // Track active job object
    const activeJob = useMemo(() => {
        return filteredJobs.find(job => job.id === activeJobId) || filteredJobs[0] || null;
    }, [filteredJobs, activeJobId]);

    // Split list into Active/Selected Job and "Other" Jobs to reduce cognitive load
    const otherJobs = useMemo(() => {
        if (!activeJob) return filteredJobs;
        return filteredJobs.filter(job => job.id !== activeJob.id);
    }, [filteredJobs, activeJob]);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const selectOption = (index, value) => {
        const newValues = [...selectedValues];
        newValues[index] = value;
        setSelectedValues(newValues);
        setOpenIndex(null);
    };

    // Toggle saved state
    const toggleSaveJob = (id, e) => {
        e.stopPropagation();
        setSavedJobIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    // Simulate link sharing
    const handleShareJob = () => {
        if (activeJob) {
            navigator.clipboard.writeText(`${window.location.origin}/jobs/${activeJob.id}`);
            setCopiedStates(true);
            setTimeout(() => setCopiedStates(false), 2000);
        }
    };

    // Handle form submission
    const handleApplySubmit = (e) => {
        e.preventDefault();
        if (activeJob) {
            setHasAppliedForActive(prev => ({ ...prev, [activeJob.id]: true }));
        }
        setIsApplyModalOpen(false);
        setApplicantName("");
        setApplicantEmail("");
    };

    // Small reusable UI pieces (local to this page)
    const MetaItem = ({ icon, label, muted }) => {
        return (
            <div className={`flex items-center gap-1.5 ${muted ? "text-[#6E6E6E]" : "text-white"}`} >
                <img src={icon} alt="" className="w-4 h-4 opacity-90" />
                <span className="font-medium">{label}</span>
            </div>
        );
    };

    const Badge = ({ label }) => {
        return (
            <span className="px-3 py-1 text-[12px] font-bold font-space-grotesk rounded-[4px] bg-[#343633] border border-[#2F312E] text-[#D6D6D6] hover:border-[#9FE870] transition-colors duration-200">
                {label}
            </span>
        );
    };

    // Main detailed view component rendered conditionally for desktop and mobile
    const renderDetailedView = () => {
        if (!activeJob) return null;

        return (
            <div className="space-y-[10px]">
                <article className="bg-[#1D201C] p-3 md:p-5 rounded-2xl space-y-4 md:space-y-5 border border-[#2F312E]">
                    <header className="space-y-4">
                        <div className="flex justify-between items-start gap-2">
                            <h2 className="text-[#9FE870] text-[20px] md:text-[32px] font-medium font-space-grotesk">  {activeJob.title} </h2>

                            {/* Save / Share Action Buttons */}
                            <div className="flex gap-2 shrink-0">
                                <button
                                    onClick={() => setSavedJobIds(prev =>
                                        prev.includes(activeJob.id)
                                            ? prev.filter(id => id !== activeJob.id)
                                            : [...prev, activeJob.id]
                                    )}
                                    className="w-12 h-12 flex items-center justify-center rounded-full border border-[#2F312E] bg-[#1E211D] text-white hover:text-[#9FE870] hover:border-[#9FE870] transition-all"
                                    title="Bookmark Job"
                                >
                                    {savedJobIds.includes(activeJob.id) ? "★" : "☆"}
                                </button>
                                <button onClick={handleShareJob} className="w-12 h-12 flex items-center justify-center rounded-full border border-[#2F312E] bg-[#1E211D] text-white hover:text-[#9FE870] hover:border-[#9FE870] transition-all" title="Copy share link" > 🔗 </button>
                            </div>
                        </div>

                        {copiedStates && (
                            <div className="text-xs text-[#15CF9D] bg-[#15CF9D]/10 px-3 py-1.5 rounded-lg inline-block animate-pulse">
                                ✓ Link copied to clipboard
                            </div>
                        )}

                        <div className="flex flex-wrap items-center gap-4 text-sm text-white font-space-grotesk">
                            <MetaItem icon={hotel} label={activeJob.company} />
                            <MetaItem icon={mappin} label={activeJob.location} muted />
                            <span className="text-xs text-[#787977]"> {activeJob.posted} </span>
                        </div>
                    </header>

                    <div className="flex items-center gap-2 text-white font-space-grotesk">
                        <span className="text-lg">💰</span>
                        <span className="text-lg font-semibold font-jakarta">{activeJob.salary}</span>
                        <span className="text-sm text-[#6E6E6E]">{activeJob.period}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {activeJob.tags.map((tag, index) => (
                            <Badge key={index} label={tag} />
                        ))}
                    </div>

                    <div>
                        {hasAppliedForActive[activeJob.id] ? (
                            <div className="bg-[#15CF9D]/10 border border-[#15CF9D]/30 p-3 rounded-full text-center text-[#15CF9D] font-medium">
                                ✓ Applied successfully! The team will review your profile.
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsApplyModalOpen(true)}
                                className="bg-gradient-to-r from-[#9FE870] to-[#15CF9D] w-full sm:w-auto min-h-[44px] px-8 py-2.5 md:py-3 rounded-full font-space-grotesk font-bold text-[#163300] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
                            >
                                Apply Now
                            </button>
                        )}
                    </div>
                </article>

                {/* AI Assistant Section */}
                <div className="bg-gradient-to-r from-[#9FE870]/10 to-[#15CF9D]/10 p-3 md:p-5 rounded-2xl border border-[#9FE870]/20">
                    <div className="flex items-center gap-[10px]">
                        <div className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-neon-4">
                            <img className="w-full h-full object-contain rounded-full" src={Logo} alt="Company Logo" />
                        </div>
                        <div> <p className="text-[#FFFFFF]/80 font-bold text-[18px] font-space-grotesk leading-6 tracking-[0.015em]"> FlexAI </p> </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <div className="bg-[#24301C] border-2 border-[#9FE870] px-4 py-[10px] rounded-[8px] max-w-36 hover:bg-[#2e3e24] cursor-pointer transition">
                            <p className="text-[14px] text-[#FFFFFF] font-space-grotesk font-medium"> Am I a good fit? </p>
                        </div>
                        <div className="relative rounded-[8px] max-w-60 p-[2px] bg-gradient-to-r from-[#15CF9D] via-[#9FE870] to-[#15CF9D] cursor-pointer hover:scale-102 transition">
                            <div className="bg-[#24301C] rounded-[6px] px-4 py-[10px]">
                                <p className="text-[14px] text-[#FFFFFF] font-space-grotesk font-medium"> Will I find this job interesting? </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Required Skills Section */}
                <div className="bg-[#1E211D] rounded-[16px] p-3 md:p-5 border border-[#2F312E]">
                    <h2 className="max-w-[820px] font-space-grotesk text-[18px] tracking-[-0.015em] text-[#D2D3D2]"> Required Skills </h2>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {activeJob?.skills?.map((skill, index) => (
                            <span key={index} className="px-[12px] py-[4px] rounded-full bg-[#343633] border border-[#2F312E] text-[#FFFFFF] font-space-grotesk text-sm hover:border-[#15CF9D] transition-colors" > {skill} </span>
                        ))}
                    </div>
                </div>

                {/* Description Section */}
                <div className="bg-[#1E211D] rounded-[16px] p-3 md:p-5 border border-[#2F312E]">
                    <div className="bg-[#1E211D] rounded-[16px] p-0 md:p-5 max-w-[800px] mx-auto">
                        <h2 className="text-[18px] text-[#FFFFFF]/80 font-space-grotesk font-semibold"> Full Job Description </h2>
                        <div className="bg-[#171916] rounded-[16px] p-3 md:p-5 mt-3 md:mt-4 transition-all duration-300 border border-[#2A2C29]">
                            <div className={`transition-all duration-300 ${expanded ? "" : "max-h-[428px] overflow-hidden"}`}>
                                <p className="text-[#FFFFFF]/60 text-[14px] leading-6 tracking-wide font-space-grotesk mb-4"> {activeJob.p1} </p>
                                <p className="text-[#FFFFFF]/60 text-[14px] leading-6 tracking-wide font-space-grotesk mb-4"> {activeJob.p2} </p>
                                <div>
                                    <p className="text-[#FFFFFF]/80 text-[15px] font-bold font-space-grotesk mb-2"> Responsibilities </p>
                                    <ul className="list-disc list-inside text-[#FFFFFF]/60 text-[14px] leading-6 tracking-wide font-space-grotesk space-y-2">
                                        {activeJob?.responsibilities?.map((responsibility, index) => (
                                            <li key={index}> {responsibility} </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-center text-center items-center gap-x-[10px] mt-6 pt-4 border-t border-[#2A2C29]">
                                <button onClick={() => setExpanded(!expanded)} className="text-[14px] text-white hover:text-[#9FE870] transition font-medium font-space-grotesk leading-4 tracking-[0.026em]" > {expanded ? "Collapse" : "Expand"} </button>
                                <img src={down2} alt="Down Arrow" className={`w-6 h-6 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="background1 relative min-h-screen font-space-grotesk">
                <Header />
                <Sidebar Vector={Vector} house={house} briefcase={briefcase} />

                <main className="relative z-10 pb-24 md:pb-10 px-3 md:px-10 md:pl-[110px]">

                    {/* Search Section */}
                    <section className="mt-4 md:mt-6 mx-auto max-w-[800px] rounded-[16px] bg-black/40 p-4 md:p-4 border border-[#2A3B31]/45 backdrop-blur-md">
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:flex-1">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search job title or company"
                className="w-full h-[48px] md:h-[56px] rounded-[8px] border-2 border-[#2A3B31] bg-[#9FE870]/5 px-4 text-sm md:text-base text-[#D0D3D1] placeholder-[#707972] font-space-grotesk outline-none transition focus:border-[#9FE870]"
            />
        </div>

        {/* Location Dropdown */}
        <div className="relative w-full md:flex-1">
            <div
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="flex items-center justify-between w-full h-[48px] md:h-[56px] px-4 bg-[#9FE870]/5 border-2 border-[#2A3B31] rounded-[8px] cursor-pointer transition-colors duration-200 hover:border-[#9FE870]"
            >
                <span className={`text-sm md:text-base font-space-grotesk ${selectedLocation === "Select location" ? "text-[#707972]" : "text-[#D0D3D1]"}`}>
                    {selectedLocation}
                </span>
                <img 
                    src={down2} 
                    alt="Dropdown Arrow" 
                    className={`w-[20px] h-[20px] pointer-events-none transition-transform duration-200 ${isLocationDropdownOpen ? "rotate-180" : ""}`} 
                />
            </div>
            
            {isLocationDropdownOpen && (
                <ul className="absolute z-20 w-full mt-1.5 bg-[#1B2621] backdrop-blur-md border-2 border-[#2A3B31] rounded-[8px] overflow-hidden shadow-xl max-h-[240px] overflow-y-auto">
                    <li 
                        onClick={() => { setSelectedLocation("Select location"); setIsLocationDropdownOpen(false); }} 
                        className="px-4 py-3 cursor-pointer text-[#D0D3D1] text-sm md:text-base font-space-grotesk hover:bg-[#3A5243] transition"
                    > 
                        All Locations 
                    </li>
                    <li 
                        onClick={() => { setSelectedLocation("Chicago, IL"); setIsLocationDropdownOpen(false); }} 
                        className="px-4 py-3 cursor-pointer text-[#D0D3D1] text-sm md:text-base font-space-grotesk hover:bg-[#3A5243] transition"
                    > 
                        Chicago, IL 
                    </li>
                    <li 
                        onClick={() => { setSelectedLocation("New York, NY"); setIsLocationDropdownOpen(false); }} 
                        className="px-4 py-3 cursor-pointer text-[#D0D3D1] text-sm md:text-base font-space-grotesk hover:bg-[#3A5243] transition"
                    > 
                        New York, NY 
                    </li>
                    <li 
                        onClick={() => { setSelectedLocation("Remote"); setIsLocationDropdownOpen(false); }} 
                        className="px-4 py-3 cursor-pointer text-[#D0D3D1] text-sm md:text-base font-space-grotesk hover:bg-[#3A5243] transition"
                    > 
                        Remote 
                    </li>
                </ul>
            )}
        </div>

        {/* Search Button */}
        <button className="relative w-full md:w-auto rounded-full p-[2px] transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 active:scale-95">
            <div className="bg-gradient-to-r from-[#9FE870] to-[#15CF9D] rounded-full p-[1px]">
                {/* Mobile version: Pill button with text */}
                <div className="flex md:hidden bg-[#0B0E0E] rounded-full items-center justify-center gap-2 h-[48px] px-6">
                    <img src={search} alt="Search" className="h-4 w-4" />
                    <span className="text-white font-space-grotesk text-sm font-medium">Search Jobs</span>
                </div>
                {/* Desktop version: Circular icon button */}
                <div className="hidden md:flex bg-[#0B0E0E] rounded-full items-center justify-center h-[52px] w-[52px]">
                    <img src={search} alt="Search" className="h-5 w-5" />
                </div>
            </div>
        </button>

    </div>
</section>

                    {/* Filters Section */}
                    <section className="mt-6 md:mt-10">
                        <h2 className="text-[20px] md:text-[32px] mb-4 md:mb-6 font-bold text-white text-center font-space-grotesk leading-[1.35]">
                            {filteredJobs.length} Job Opportunities Available
                        </h2>
                        <div className="flex flex-wrap items-center gap-2 justify-start sm:justify-center">
                            {dropdownData.map((dropdown, index) => (
                                <div key={index} className="relative w-[48%] sm:w-[150px]">
                                    <div onClick={() => toggleDropdown(index)} className={`flex items-center justify-between w-full gap-x-2 bg-[#2A3832] border border-[#27372F] rounded-[4px] px-3 py-2 cursor-pointer transition-colors duration-200 hover:border-[#4C6B58]`} >
                                        <span className="text-[#D0D3D1] text-[13px] md:text-[16px] font-bold font-space-grotesk truncate"> {selectedValues[index] || dropdown.placeholder} </span>
                                        <img src={down2} alt="Dropdown Arrow" className={`w-4 h-4 pointer-events-none transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} />
                                    </div>
                                    {openIndex === index && (
                                        <ul className="absolute z-15 w-full bg-[#2A3832] border border-[#27372F] rounded-[6px] mt-1 max-h-40 overflow-auto shadow-2xl">
                                            {dropdown.options.map((option, i) => (
                                                <li key={i} onClick={() => selectOption(index, option)} className="px-3 py-2 cursor-pointer hover:bg-[#3A5243] text-[#D0D3D1] text-[16px] font-bold font-space-grotesk" > {option} </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Jobs Showcase Grid */}
                    <section>
                        <div className="max-w-[1140px] mx-auto pt-5 md:pt-[40px] grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

                            {/* Left Side: Job Lists partitioned in a single sidebar container */}
                            <div className="lg:col-span-4 space-y-4">

                                {filteredJobs.length === 0 ? (
                                    <div className="p-6 text-center rounded-xl bg-[#1E211D] text-[#787977]">
                                        <p>No roles found matching your query.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-5">
                                        {/* 1. Currently Selected Job (Result at the top) */}
                                        {activeJob && (
                                            <div className="space-y-2">
                                                <span className="text-xs uppercase tracking-wider text-[#9FE870] font-bold block px-1">
                                                    SELECTED MATCH
                                                </span>
                                                <div
                                                    onClick={() => setactiveJobId(activeJob.id)}
                                                    className="rounded-xl cursor-pointer border-2 border-[#9FE870] bg-[#1E211D] transition-all duration-300"
                                                >
                                                    <div className="p-3 md:p-5 space-y-3">
                                                        <div className="space-y-2">
                                                            <h2 className="text-[#9FE870] text-[18px] md:text-[24px] font-medium font-space-grotesk"> {activeJob.title} </h2>
                                                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white text-[13px] md:text-[16px] font-space-grotesk">
                                                                <div className="flex items-center gap-1">
                                                                    <img src={activeJob.companyIcon} alt="Company" className="w-4 h-4" />
                                                                    <span className="font-medium">{activeJob.company}</span>
                                                                </div>
                                                                <div className="flex items-center gap-1 text-[#6E6E6E]">
                                                                    <img src={activeJob.locationIcon} alt="Location" className="w-4 h-4" />
                                                                    <span className="font-medium">{activeJob.location}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between text-white text-[14px]">
                                                            <div className="flex items-center gap-1">
                                                                <span>💰</span>
                                                                <span className="font-semibold font-jakarta"> {activeJob.salary} </span>
                                                                <span className="text-[#6E6E6E]"> {activeJob.period} </span>
                                                            </div>
                                                            <button
                                                                onClick={(e) => toggleSaveJob(activeJob.id, e)}
                                                                className="text-white hover:text-[#9FE870] transition flex items-center gap-1 text-sm font-space-grotesk"
                                                            >
                                                                {savedJobIds.includes(activeJob.id) ? "★ Saved" : "☆ Save"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Mobile detailed view: displayed immediately below the active card on mobile */}
                                                <div className="block lg:hidden mt-4">
                                                    {renderDetailedView()}
                                                </div>
                                            </div>
                                        )}

                                        {/* 2. Remaining/Other Jobs Section (Directly below) */}
                                        {otherJobs.length > 0 && (
                                            <div className="space-y-3 pt-2">
                                                <h3 className="text-xs uppercase tracking-wider text-[#787977] font-bold px-1">
                                                    OTHER OPENINGS FOR YOU
                                                </h3>
                                                <div className="space-y-3">
                                                    {otherJobs.map((job) => (
                                                        <div
                                                            key={job.id}
                                                            onClick={() => setactiveJobId(job.id)}
                                                            className="p-[1px] rounded-xl cursor-pointer bg-[#2F312E] hover:bg-gradient-to-r hover:from-[#9FE870]/60 hover:to-[#15CF9D]/60 transition-all duration-300"
                                                        >
                                                            <div className="bg-[#1E211D]/90 hover:bg-[#1E211D] rounded-xl p-3 md:p-5 space-y-3">
                                                                <div className="space-y-2">
                                                                    <h2 className="text-white hover:text-[#9FE870] transition text-[16px] md:text-[20px] font-medium font-space-grotesk"> {job.title} </h2>
                                                                    <div className="flex flex-wrap items-center gap-2 text-[#D6D6D6] text-[12px] md:text-[14px]">
                                                                        <span className="font-medium">{job.company}</span>
                                                                        <span className="text-[#6E6E6E]">•</span>
                                                                        <span className="text-[#6E6E6E]">{job.location}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-between items-center text-[12px]">
                                                                    <p className="text-[#787977] font-space-grotesk"> {job.posted} </p>
                                                                    <button
                                                                        onClick={(e) => toggleSaveJob(job.id, e)}
                                                                        className="text-[#6E6E6E] hover:text-[#9FE870] transition flex items-center gap-1"
                                                                    >
                                                                        {savedJobIds.includes(job.id) ? "★ Saved" : "☆ Save"}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Right Side: Detailed View (Desktop only) */}
                            {activeJob && (
                                <div className="hidden lg:block lg:col-span-8">
                                    {renderDetailedView()}
                                </div>
                            )}
                        </div>
                    </section>
                </main>
            </div>

            {/* Micro Apply Modal Backdrop & Box */}
            {isApplyModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="bg-[#1D201C] w-full max-w-md rounded-2xl p-6 border border-[#9FE870]/30 space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-[#9FE870] text-xl font-bold font-space-grotesk">Apply to {activeJob?.company}</h3>
                            <button
                                onClick={() => setIsApplyModalOpen(false)}
                                className="text-white/60 hover:text-white text-lg transition"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-sm text-[#D0D3D1]">Role: {activeJob?.title}</p>

                        <form onSubmit={handleApplySubmit} className="space-y-4 pt-2">
                            <div>
                                <label className="block text-xs text-white/70 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={applicantName}
                                    onChange={(e) => setApplicantName(e.target.value)}
                                    className="w-full bg-[#171916] border border-[#2F312E] rounded-md p-2.5 text-white text-sm outline-none focus:border-[#9FE870]"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-white/70 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={applicantEmail}
                                    onChange={(e) => setApplicantEmail(e.target.value)}
                                    className="w-full bg-[#171916] border border-[#2F312E] rounded-md p-2.5 text-white text-sm outline-none focus:border-[#9FE870]"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#9FE870] to-[#15CF9D] py-2.5 rounded-full text-[#163300] font-bold hover:opacity-90 transition"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}