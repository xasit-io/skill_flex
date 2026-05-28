import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fieldName } from '../data.js';

function SearchBar() {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();

    const isHome = location.pathname === "/" || location.pathname === "/home";

    const filteredResults = fieldName.filter(item =>
        typeof item.name === "string" &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (name) => {
        setQuery(name);
        setIsOpen(false);
    };

    return (
        <>
            <div className="w-full relative" ref={searchRef}>
                {isHome ? (
                    <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 sm:gap-3 px-2 sm:px-4">
                        <div className="relative w-full sm:w-[640px] group">
                            <div className="absolute -inset-[1px] rounded-[100px] z-0 bg-transparent group-focus-within:bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all"></div>
                            <div className="relative z-10 flex items-center bg-[#111610] rounded-[100px] border-2 border-[#FFFFFF]/10 group-focus-within:border-transparent transition-all overflow-hidden">
                                <input value={query} onFocus={() => setIsOpen(true)} onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }} type="text" placeholder="Search Career Paths" className="w-full bg-transparent px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base leading-[1.4] text-white font-space-grotesk outline-none placeholder-[#757973]" />
                                <div className="flex items-center gap-2 sm:gap-3 pr-3 sm:pr-4">
                                    {query ? (
                                        <button onClick={() => setQuery('')} className="text-[#757973] hover:text-white transition-colors">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                                        </button>
                                    ) : (
                                        <svg width="26" height="26" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_47780_12388)">
                                                <path d="M23.2682 21.1716L18.9034 16.8068C20.0648 15.3682 20.7148 13.5568 20.7148 11.6068C20.7148 7.01025 16.9534 3.25 12.3568 3.25C7.76025 3.25 4 7.01025 4 11.6068C4 16.2034 7.76025 19.9648 12.3568 19.9648C14.3068 19.9648 16.1182 19.2682 17.5568 18.1534L21.9216 22.5182L23.2682 21.1716ZM12.4034 18.1068C8.82842 18.1068 5.90342 15.1818 5.90342 11.6068C5.90342 8.03183 8.82842 5.10683 12.4034 5.10683C15.9784 5.10683 18.9034 8.03183 18.9034 11.6068C18.9034 15.1818 15.9784 18.1068 12.4034 18.1068Z" fill="url(#paint0_linear_47780_12388)" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_47780_12388" x="-3.25" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_47780_12388" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_47780_12388" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_47780_12388" x1="4.4516" y1="22.5182" x2="28.5776" y2="21.8433" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.170102" stop-color="#9FE870" />
                                                    <stop offset="1" stop-color="#15CF9D" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    )}
                                    {query && (
                                        <button className="bg-gradient-to-br from-[#9FE870] to-[#15CF9D] p-2.5 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center hover:opacity-90 transition-opacity active:scale-95">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {isOpen && query && (
                                <ul className="absolute top-full left-0 w-full mt-2 py-2 bg-[#0E0F0C] border border-[#2B3833] rounded-[12px] z-[100] shadow-2xl max-h-[250px] overflow-y-auto overflow-hidden">
                                    {filteredResults.map((item, index) => (
                                        <li key={index} onClick={() => handleSelect(item.name)} className="text-sm sm:text-[16px] mx-2 px-4 py-2 text-white hover:bg-[#9FE870] hover:text-black rounded-[100px] cursor-pointer transition-all mb-1">
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button className="w-full sm:w-auto group relative rounded-full p-[2px] bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 ease-out hover:-translate-y-[2px] active:opacity-75 outline-none" >
                            <span className="relative block overflow-hidden rounded-full bg-[#121511] px-5 sm:px-6 py-2.5 sm:py-3 transition-colors duration-300 text-center">
                                <span className="absolute top-0 -left-[100%] h-full w-[10px] bg-[#9FE870] opacity-40 shadow-[0_0_20px_10px_#9FE870] transition-all duration-700 ease-in-out group-hover:left-[120%] skew-x-[-20deg]"></span>
                                <span className="relative z-10 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent font-medium font-space-grotesk group-hover:brightness-125 transition-all"> All Career Paths </span>
                            </span>
                        </button>
                    </div>
                ) : (
                    <div className="bg-[#000000]/40 p-3 sm:p-6 rounded-[12px] sm:rounded-[16px] flex items-center gap-2 sm:gap-4 border border-white/5 relative">
                        <div className="relative flex-1 group">
                            <div className="absolute -inset-[1.5px] rounded-[9px] z-0 bg-transparent group-focus-within:bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300"></div>
                            <div className="relative z-10 flex items-center bg-[#0d1410] rounded-[8px] border-2 border-[#2B3833] group-focus-within:border-transparent transition-all">
                                <input value={query} onFocus={() => setIsOpen(true)} onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }} type="text" placeholder="Search Career Paths" className="w-full bg-[#9FE870]/5 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base leading-[1.4] text-white font-space-grotesk outline-none placeholder-[#757973] rounded-[8px]" />
                            </div>
                            {isOpen && query && (
                                <ul className="absolute top-full left-0 w-full mt-2 py-2 bg-[#0E0F0C] border border-[#2B3833] rounded-[8px] z-[100] shadow-2xl max-h-[300px] overflow-y-auto">
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map((item, index) => (
                                            <li key={index} onClick={() => handleSelect(item.name)} className="text-sm sm:text-[16px] mx-2 px-4 py-3 text-white hover:bg-gradient-to-r from-[#9FE870] to-[#15CF9D] rounded-[6px] hover:text-black cursor-pointer transition-all">
                                                {item.name}
                                            </li>
                                        ))
                                    ) : (<li className="px-6 py-4 text-[#757973]">No results found</li>)}
                                </ul>
                            )}
                        </div>
                        <button className="relative p-[1.5px] rounded-full overflow-hidden flex-shrink-0 min-w-[44px] min-h-[44px] active:scale-95 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#9FE870] to-[#15CF9D]" />
                            <div className="relative bg-[#0A1A10] rounded-full p-4">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="2">
                                    <circle cx="7.5" cy="7.5" r="6" /><path d="m17 17-4.5-4.5" />
                                </svg>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}   

export default SearchBar;