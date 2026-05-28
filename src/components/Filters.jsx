import React, { useState, useRef, useEffect } from 'react';

function Filters() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [filters, setFilters] = useState({ sort: null, salary: null, category: null });

    const dropdownRef = useRef(null);

    const toggleDropdown = (name) => { setActiveDropdown(activeDropdown === name ? null : name); };

    const selectOption = (type, value) => {
        setFilters(prev => ({ ...prev, [type]: value }));
        setActiveDropdown(null);
    };

    const resetFilters = () => { setFilters({ sort: null, salary: null, category: null }); };
    const hasActiveFilters = Object.values(filters).some(val => val !== null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setActiveDropdown(null); }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="w-full mt-4 md:mt-8 flex flex-wrap items-center gap-2 md:gap-3 justify-start sm:justify-center" ref={dropdownRef}>
                <div className="relative">
                    <button onClick={() => toggleDropdown('sort')} className={`flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-md border transition-all min-h-[44px] ${activeDropdown === 'sort' ? "bg-[#FFFFFF]/10 border-[#9FE870] text-white" : "bg-[#FFFFFF]/10 border-[#27352F] text-[#FFFFFF]/80"}`} >
                        <span className="text-xs md:text-sm font-medium"> Sort by name{filters.sort && <span className="text-[#9FE870]"> : {filters.sort}</span>} </span>
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'sort' ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {activeDropdown === 'sort' && (
                        <div className="absolute top-full left-0 mt-2 w-[160px] bg-[#131C14] border border-[#373934] rounded-md overflow-hidden z-50 shadow-2xl">
                            {['Ascending', 'Descending'].map((opt) => (
                                <div key={opt} onClick={() => selectOption('sort', opt)} className={`px-4 py-3 cursor-pointer text-sm hover:bg-[#9FE870]/10 hover:text-[#9FE870] ${filters.sort === opt ? 'text-[#9FE870]' : 'text-[#D9E6DF]'}`}>{opt}</div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button onClick={() => toggleDropdown('salary')} className={`flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-md border transition-all min-h-[44px] ${activeDropdown === 'salary' ? "bg-[#FFFFFF]/10 border-[#9FE870] text-white" : "bg-[#FFFFFF]/10 border-[#27352F] text-[#FFFFFF]/80"}`} >
                        <span className="text-xs md:text-sm font-medium"> Salary / month{filters.salary && <span className="text-[#9FE870]"> : {filters.salary}</span>} </span>
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'salary' ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {activeDropdown === 'salary' && (
                        <div className="absolute top-full left-0 mt-2 w-[165px] bg-[#131C14] border border-[#373934] rounded-md overflow-hidden z-50 shadow-2xl">
                            {['$2000 - $4000', '$4000 - $8000', '$8000+'].map((opt) => (
                                <div key={opt} onClick={() => selectOption('salary', opt)} className={`px-4 py-3 cursor-pointer text-sm hover:bg-[#9FE870]/10 hover:text-[#9FE870] ${filters.salary === opt ? 'text-[#9FE870]' : 'text-[#D9E6DF]'}`}>{opt}</div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button onClick={() => toggleDropdown('filter')} className={`flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-md border transition-all min-h-[44px] ${activeDropdown === 'filter' ? "bg-[#FFFFFF]/10 border-[#9FE870] text-white" : "bg-[#FFFFFF]/10 border-[#27352F] text-[#FFFFFF]/80"}`} >
                        <span className="text-xs md:text-sm font-medium"> Filter by{filters.category && <span className="text-[#9FE870]"> : {filters.category}</span>} </span>
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'filter' ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {activeDropdown === 'filter' && (
                        <div className="absolute top-full left-0 mt-2 w-[140px] bg-[#131C14] border border-[#373934] rounded-md overflow-hidden z-50 shadow-2xl">
                            {['Full Time', 'Remote', 'Contract', 'Freelance'].map((opt) => (
                                <div key={opt} onClick={() => selectOption('category', opt)} className={`px-4 py-3 cursor-pointer text-sm hover:bg-[#9FE870]/10 hover:text-[#9FE870] ${filters.category === opt ? 'text-[#9FE870]' : 'text-[#D9E6DF]'}`}>{opt}</div>
                            ))}
                        </div>
                    )}
                </div>

                {hasActiveFilters && (
                    <button onClick={resetFilters} className="flex items-center gap-2 px-4 py-2.5 border border-[#9FE870]/30 rounded-md text-[#9FE870] hover:bg-[#9FE870]/5 transition-all animate-in fade-in zoom-in duration-300" >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        <span className="text-sm font-medium">Reset Filters</span>
                    </button>
                )}
            </div>
        </>
    )
}

export default Filters
