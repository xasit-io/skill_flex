import React, { useState } from "react";
import Account from "../../assests/Account.svg";
import Sidebar from "../../components/Sidebar";
import house from "../../assests/house.svg";
import Vector from "../../assests/Vector.svg";
import briefcase from "../../assests/briefcase.svg";

const Profile = () => {

    const [profile, setProfile] = useState({
        fullName: "Abdul Basit",
        email: "xasit.io@example.com",
        currentRole: "Full Stack Developer",
        targetSalary: "$128k",
        vibeCheckScore: "85%",
        bio: "Passionate developer focused on building highly responsive, scalable systems and clean, user-centered digital products that balance aesthetic simplicity with robust architecture.",
    });

    const [skills] = useState([
        "React.js", "Node.js", "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL"
    ]);

    const [recentActivity] = useState([
        { id: 1, type: "Job Saved", title: "Product Designer at Stripe", time: "2 hours ago" },
        { id: 2, type: "Lesson Completed", title: "Intro to Component Libraries", time: "Yesterday" },
        { id: 3, type: "Skills Matched", title: "80% Match for Data Analyst Role", time: "3 days ago" },
    ]);

    return (
        <div className="relative min-h-screen bg-[#0C0E0B] text-[#D9E6DF] font-space-grotesk overflow-x-hidden">
            <Sidebar Vector={Vector} house={house} briefcase={briefcase} />
            <main className="min-h-screen pb-24 md:pb-12 pl-0 md:pl-[76px] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[260px] bg-gradient-to-b from-[#15CF9D]/5 to-transparent pointer-events-none" />
                <div className="relative max-w-5xl mx-auto px-4 pt-6 md:pt-10">
                    <div className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-8 mb-6 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9FE870]/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative p-[3px] rounded-full flex-shrink-0">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9FE870] to-[#15CF9D]" />
                            <div className="relative bg-[#1E221E] w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center z-10 border border-white/5">
                                <img src={Account} alt="Account Profile" className="w-10 h-10 md:w-12 md:h-12 opacity-95" />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-0.5"> {profile.fullName} </h1>
                                    <p className="text-[#9FE870] font-medium text-xs md:text-sm"> {profile.currentRole} </p>
                                </div>
                                <button className="px-5 py-2 cursor-pointer rounded-full border border-[#373934] bg-[#1E221E] text-white hover:bg-white/5 hover:border-white/20 active:scale-95 transition-all duration-200 text-xs md:text-sm font-medium self-center sm:self-start"> Edit Profile </button>
                            </div>
                            <p className="mt-3.5 text-xs md:text-sm text-[#A0A3A1] leading-relaxed max-w-2xl"> {profile.bio} </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 flex flex-col gap-6">
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg">
                                <h2 className="text-base md:text-lg font-bold text-white mb-4">Account Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold">Full Name</label>
                                        <input type="text" value={profile.fullName} disabled className="w-full bg-[#1A1D1A] border border-white/5 rounded-lg px-3 py-2.5 text-xs md:text-sm text-[#D9E6DF] focus:outline-none cursor-not-allowed" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold">Email Address</label>
                                        <input type="email" value={profile.email} disabled className="w-full bg-[#1A1D1A] border border-white/5 rounded-lg px-3 py-2.5 text-xs md:text-sm text-[#D9E6DF] focus:outline-none cursor-not-allowed" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold">Target Salary</label>
                                        <input type="text" value={profile.targetSalary} disabled className="w-full bg-[#1A1D1A] border border-white/5 rounded-lg px-3 py-2.5 text-xs md:text-sm text-[#D9E6DF] focus:outline-none cursor-not-allowed" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold">Vibe Check</label>
                                        <input type="text" value={profile.vibeCheckScore} disabled className="w-full bg-[#1A1D1A] border border-white/5 rounded-lg px-3 py-2.5 text-xs md:text-sm text-[#15CF9D] font-bold focus:outline-none cursor-not-allowed" />
                                    </div>
                                </div>
                            </section>
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg">
                                <h2 className="text-base md:text-lg font-bold text-white mb-4">Recent Activity</h2>
                                <div className="space-y-3">
                                    {recentActivity.map((activity) => (
                                        <div key={activity.id} className="flex flex-col gap-2.5 p-4 rounded-xl bg-[#141613] border border-white/5 hover:border-white/10 transition-colors duration-200">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase bg-[#1A2218] text-[#9FE870] px-2.5 py-1 rounded"> {activity.type} </span>
                                                <span className="text-xs text-[#6F7370]">{activity.time}</span>
                                            </div>
                                            <h3 className="text-sm md:text-base font-bold text-white tracking-wide"> {activity.title} </h3>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="flex flex-col gap-6">
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg">
                                <h2 className="text-base md:text-lg font-bold text-white mb-2.5">Skills Inventory</h2>
                                <p className="text-xs text-[#A0A3A1] mb-4 leading-normal"> Skills matching your chosen career path listings. </p>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="text-xs font-semibold px-3 py-1.5 rounded bg-[#1A1D1A] text-[#D9E6DF] border border-white/5 hover:border-[#15CF9D]/30 transition-all duration-200 cursor-default" >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg flex flex-col">
                                <h2 className="text-base md:text-lg font-bold text-white mb-1">Status Overview</h2>
                                <p className="text-xs text-[#A0A3A1] mb-5">Current evaluation indicators</p>
                                <div className="space-y-3">
                                    <div className="p-4 rounded-xl bg-[#141814] border border-[#15CF9D]/15 flex items-center justify-between">
                                        <div>
                                            <p className="text-[#6F7370] text-xs font-medium mb-0.5">Vibe Check</p>
                                            <p className="font-bold text-white text-base md:text-lg">80% Approved</p>
                                        </div>
                                        <div className="w-6 h-6 rounded-md bg-[#15CF9D] flex items-center justify-center shadow-sm">
                                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 4.5L4 7L9.5 1.5" stroke="#111310" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#141613] border border-white/5 flex items-center justify-between">
                                        <div>
                                            <p className="text-[#6F7370] text-xs font-medium mb-0.5">Target Wage</p>
                                            <p className="font-bold text-white text-base md:text-lg">$128k / yr</p>
                                        </div>
                                        <span className="text-2xl select-none">💰</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;