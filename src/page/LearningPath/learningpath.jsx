import React from 'react';
import Ai from "../../components/Ai.jsx";
import house from "../../assests/house.svg";
import Vector from "../../assests/Vector.svg";
import imagebl from "../../assests/imagebl.svg";
import Header from "../../components/Header.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import briefcase from "../../assests/briefcase.svg";
import designbook from "../../assests/designbook.svg";
import checkcircle from "../../assests/checkcircle.svg";
import fundamentals from "../../assests/fundamentals.svg";
import GradientCheckbox from "../../hooks/GradientCheckbox.jsx";
import greencheckcircle from "../../assests/greencheckcircle.svg";
import designfortherealworld from "../../assests/designfortherealworld.svg";

function LearningPath() {
    return (
        <>
            <div className="min-h-screen bg-[#0E0F0E] text-white relative px-4 sm:px-6 pb-24 md:pb-[36px] overflow-clip">
                <Header />
                <Sidebar Vector={Vector} house={house} briefcase={briefcase} />
                <div className="md:pl-[120px] lg:pr-[40px] mt-4 md:mt-10 flex flex-col lg:flex-row gap-6 xl:gap-[56px] items-start">
                    <div className="w-full lg:flex-1 space-y-6 md:space-y-[32px] mt-2.5 min-w-0">
                        <div className="relative">
                            <img src={imagebl} alt="top-border-gradient" className="absolute top-[-8px] left-0 w-full h-[16px] md:h-[22px] object-cover rounded-t-[32px]" />
                            <div className="relative bg-[#161815] rounded-[16px] py-6 md:py-8 px-4 md:px-6 border border-[#252A23] z-10 shadow-2xl">
                                <h1 className="text-2xl sm:text-3xl md:text-[36px] font-space-grotesk font-bold tracking-tight mb-3"> Product Designer - Learning Path </h1>
                                <p className="max-w-[820px] text-[14px] md:text-[17px] font-space-grotesk tracking-normal text-[#A4A6A leading-relaxed"> A product designer shapes new digital applications and websites. They orchestrate functional user ences and visual styling to create tools that serve real human needs. </p>
                            </div>
                        </div>
                        <div className="lg:hidden w-full bg-[#141613] rounded-[16px] p-5 border border-[#232B20] space-y-3 shadow-md">
                            <h3 className="font-space-grotesk font-bold text-lg text-white"> You’re super close to snagging your dream job! </h3>
                            <div className="flex justify-between items-center text-sm font-space-grotesk font-medium text-gray-300">
                                <span>Your Progress</span>
                                <span className="text-[#9FE870] font-bold">80%</span>
                            </div>
                            <div className="relative w-full h-[6px] bg-[#1C2E26] rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-[#0AB280] rounded-full" style={{ width: "80%" }} />
                            </div>
                            <div className="text-sm text-[#A0A1A0] font-space-grotesk font-medium flex items-center gap-1.5">
                                <span>🔥</span> <span>2 days left</span>
                            </div>
                        </div>
                        <div className="bg-[#141613] rounded-[20px] py-6 md:py-8 px-4 md:px-6 border border-[#212420] z-10 space-y-6 shadow-xl">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-[#212620]/60 pb-4">
                                <h2 className="text-xl md:text-[24px] font-space-grotesk font-bold tracking-tight flex items-center gap-2"> <span>📚</span> Learn the Basics </h2>
                                <span className="text-xs sm:text-sm md:text-base text-[#D2D3D2] font-space-grotesk bg-[#1C211B] px-3 py-1 rounded-full border border-[#2D352A]"> 2 weeks duration </span>
                            </div>
                            <p className="max-w-[620px] text-[14px] md:text-[16px] font-space-grotesk text-[#A4A6A4] leading-relaxed"> Understanding the fundamentals of product design to build a strong foundation in user interfaces, layouts, and system architectures. </p>
                            <div className="space-y-4 pt-2">
                                <div className="inline-block bg-[#1B211A] text-[#9FE870] text-[14px] md:text-[16px] font-bold font-space-grotesk tracking-wide px-3 py-1 rounded-md border border-[#2E3C2C]"> Week 1 </div>
                                <div className="bg-[#191C18] border border-[#252F22] p-4 sm:p-5 rounded-xl group hover:border-[#384833] transition-colors duration-300">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1 min-w-0 space-y-3">
                                            <div className="flex items-start gap-2.5 sm:gap-3">
                                                <div className="flex-shrink-0 mt-1">
                                                    <GradientCheckbox checked={true} />
                                                </div>
                                                <h3 className="text-base sm:text-lg md:text-[20px] font-space-grotesk text-white font-bold leading-snug break-words"> 1.&nbsp;Design of Everyday Things </h3>
                                            </div>
                                            <div className="flex items-center gap-2.5 sm:gap-3 pl-0 sm:pl-[34px]">
                                                <span className="bg-[#FFAA99]/20 text-[#FFAA99] px-2.5 py-0.5 font-semibold font-space-grotesk rounded text-xs border border-[#FFAA99]/30"> Book </span>
                                                <p className="text-xs sm:text-sm text-[#A9AAA8] font-space-grotesk">6 hours read estimate</p>
                                            </div>
                                        </div>
                                        <div className="w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] rounded-lg overflow-hidden border border-[#2C3828] flex-shrink-0">
                                            <img src={designbook} alt="Design of Everyday Things book cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 pl-0 sm:pl-[34px] space-y-4">
                                        <p className="text-xs sm:text-sm md:text-[15px] text-[#C5C6C5] font-space-grotesk leading-relaxed max-w-[620px]"> This classic book will open your eyes to how deeply embedded design is in our everyday physical and digital environments. Written by Don Norman. </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202420] border border-[#2E332E] text-[#B5B7B5] text-xs sm:text-sm font-space-grotesk">
                                                <img src={checkcircle} alt="Checked skill indicator" className="w-3.5 h-3.5" /> Graphic Design
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202420] border border-[#2E332E] text-[#B5B7B5] text-xs sm:text-sm font-space-grotesk">
                                                <img src={checkcircle} alt="Checked skill indicator" className="w-3.5 h-3.5" /> Design Thinking
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202420] border border-[#2E332E] text-[#B5B7B5] text-xs sm:text-sm font-space-grotesk">
                                                <img src={checkcircle} alt="Checked skill indicator" className="w-3.5 h-3.5" /> Photoshop
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#191C18] border border-[#252F22] p-4 sm:p-5 rounded-xl group hover:border-[#384833] transition-colors duration-300">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1 min-w-0 space-y-3">
                                            <div className="flex items-start gap-2.5 sm:gap-3">
                                                <div className="flex-shrink-0 mt-1"> <GradientCheckbox checked={true} /> </div>
                                                <h3 className="text-base sm:text-lg md:text-[20px] font-space-grotesk text-white font-bold leading-snug break-words"> 2.&nbsp;UX Design Fundamentals </h3>
                                            </div>
                                            <div className="flex items-center gap-2.5 sm:gap-3 pl-0 sm:pl-[34px]">
                                                <span className="bg-[#79A6FC]/20 text-[#79A6FC] px-2.5 py-0.5 font-semibold font-space-grotesk rounded text-xs border border-[#79A6FC]/30"> Course </span>
                                                <p className="text-xs sm:text-sm text-[#A9AAA8] font-space-grotesk">2 hours duration</p>
                                            </div>
                                        </div>
                                        <div className="w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] rounded-lg overflow-hidden border border-[#2C3828] flex-shrink-0">
                                            <img src={fundamentals} alt="UX design essentials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 pl-0 sm:pl-[34px] space-y-4">
                                        <p className="text-xs sm:text-sm md:text-[15px] text-[#C5C6C5] font-space-grotesk leading-relaxed max-w-[620px]"> Dive into key wireframing methods, information mapping guidelines, and interaction principles to master high-quality structural layout designs. </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202420] border border-[#2E332E] text-[#B5B7B5] text-xs sm:text-sm font-space-grotesk">
                                                <img src={checkcircle} alt="Checked skill indicator" className="w-3.5 h-3.5" /> Graphic Design
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202420] border border-[#2E332E] text-[#B5B7B5] text-xs sm:text-sm font-space-grotesk">
                                                <img src={checkcircle} alt="Checked skill indicator" className="w-3.5 h-3.5" /> Design Thinking
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#202420] border border-[#2E332E] text-[#B5B7B5] text-xs sm:text-sm font-space-grotesk">
                                                <img src={checkcircle} alt="Checked skill indicator" className="w-3.5 h-3.5" /> Photoshop
                                            </span>
                                        </div>
                                        <div className="max-w-[480px] space-y-2 pt-2">
                                            <div className="flex justify-between items-center bg-[#1B211A] rounded-lg p-3 border border-[#293626]/40 hover:bg-[#20291F] transition-colors">
                                                <p className="text-white font-space-grotesk text-xs sm:text-[14px] font-medium pr-2">Lesson 1: Basics of UX Design</p>
                                                <span className="text-[#989A98] font-space-grotesk text-xs bg-[#151715] px-2 py-0.5 rounded border border-white/5 flex-shrink-0">45 min</span>
                                            </div>
                                            <div className="flex justify-between items-center bg-[#1B211A] rounded-lg p-3 border border-[#293626]/40 hover:bg-[#20291F] transition-colors">
                                                <p className="text-white font-space-grotesk text-xs sm:text-[14px] font-medium pr-2">Lesson 2: UX Design Key Components</p>
                                                <span className="text-[#989A98] font-space-grotesk text-xs bg-[#151715] px-2 py-0.5 rounded border border-white/5 flex-shrink-0">45 min</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4">
                                <div className="inline-block bg-[#1B211A] text-[#9FE870] text-[14px] md:text-[16px] font-bold font-space-grotesk tracking-wide px-3 py-1 rounded-md border border-[#2E3C2C]"> Week 2 </div>
                                <div className="bg-[#191C18] border border-[#252F22] p-4 sm:p-5 rounded-xl group hover:border-[#384833] transition-colors duration-300">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1 min-w-0 space-y-3">
                                            <div className="flex items-start gap-2.5 sm:gap-3">
                                                <div className="flex-shrink-0 mt-1"> <GradientCheckbox /> </div>
                                                <h3 className="text-base sm:text-lg md:text-[20px] font-space-grotesk text-white font-bold leading-snug break-words"> 3.&nbsp;Design for the Real World </h3>
                                            </div>
                                            <div className="flex items-center gap-2.5 sm:gap-3 pl-0 sm:pl-[34px]">
                                                <span className="bg-[#CC9500]/20 text-[#FFC425] px-2.5 py-0.5 font-semibold font-space-grotesk rounded text-xs border border-[#FFC425]/30"> Book </span>
                                                <p className="text-xs sm:text-sm text-[#A9AAA8] font-space-grotesk">8 hours read estimate</p>
                                            </div>
                                        </div>
                                        <div className="w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] rounded-lg overflow-hidden border border-[#2C3828] flex-shrink-0">
                                            <img src={designfortherealworld} alt="Design for the Real World book cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 pl-0 sm:pl-[34px] space-y-4">
                                        <p className="text-xs sm:text-sm md:text-[15px] text-[#C5C6C5] font-space-grotesk leading-relaxed max-w-[620px]"> An essential critique of modern industrial designer responsibility, social impact, and ecologically sound development processes. By Victor Papanek. </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1F19] border border-[#283224] text-[#8CBF85] text-xs sm:text-sm font-space-grotesk">
                                                <img src={greencheckcircle} alt="Acquired skill icon" className="w-3.5 h-3.5" /> Graphic Design
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1F19] border border-[#283224] text-[#8CBF85] text-xs sm:text-sm font-space-grotesk">
                                                <img src={greencheckcircle} alt="Acquired skill icon" className="w-3.5 h-3.5" /> Design Thinking
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1F19] border border-[#283224] text-[#8CBF85] text-xs sm:text-sm font-space-grotesk">
                                                <img src={greencheckcircle} alt="Acquired skill icon" className="w-3.5 h-3.5" /> Photoshop
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-[#141613] rounded-[16px] p-5 md:p-6 border border-[#252A23] shadow-md hover:border-[#32382e] transition-colors duration-200">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">😎</span>
                                <h2 className="text-xl md:text-[24px] font-space-grotesk font-bold tracking-tight">Learn Advanced Skills</h2>
                            </div>
                            <p className="max-w-[620px] text-xs sm:text-sm md:text-[16px] font-space-grotesk text-[#A4A6A4] leading-relaxed"> Expand your professional toolkit by studying responsive layout frameworks, complex component architectures, prototype usability evaluations, and design workflows. </p>
                        </div>
                        <div className="relative bg-[#141613] rounded-[16px] p-5 md:p-6 border border-[#252A23] shadow-md hover:border-[#32382e] transition-colors duration-200">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">📃</span>
                                <h2 className="text-xl md:text-[24px] font-space-grotesk font-bold tracking-tight"> Create your CV </h2>
                            </div>
                            <p className="max-w-[620px] text-xs sm:text-sm md:text-[16px] font-space-grotesk text-[#A4A6A4] leading-relaxed"> Build an impactful presentation structure for hiring managers that focuses on project-driven achievements, personal design specialties, and technical skills. </p>
                        </div>
                    </div>
                    <div className="hidden lg:block w-[340px] xl:w-[380px] top-24 bg-[#141613] rounded-[20px] p-6 border border-[#232B20] shadow-2xl space-y-5">
                        <h2 className="font-space-grotesk font-bold text-xl xl:text-[28px] leading-tight text-white"> You’re super close to snagging your dream job! </h2>
                        <div className="flex justify-between items-center text-lg font-space-grotesk font-medium tracking-wide border-t border-[#232B20]/60 pt-4">
                            <span className="text-[#A4A6A4]">Your Progress</span>
                            <span className="text-[#9FE870] font-bold">80%</span>
                        </div>
                        <div className="relative w-full h-[6px] bg-[#1C2E26] rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-[#0AB280] rounded-full" style={{ width: "80%" }} />
                        </div>
                        <div className="text-base text-[#A0A1A0] font-space-grotesk tracking-wide font-medium flex items-center gap-2">
                            <span>🔥</span> <span>2 days remaining</span>
                        </div>
                    </div>
                </div>
                <Ai />
            </div>
        </>
    );
}

export default LearningPath;