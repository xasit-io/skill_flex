import React, { useState } from "react";
import Account from "../../assests/Account.svg";
import Sidebar from "../../components/Sidebar";
import house from "../../assests/house.svg";
import Vector from "../../assests/Vector.svg";
import briefcase from "../../assests/briefcase.svg";

const Profile = () => {
    // Master profile state
    const [profile, setProfile] = useState({
        fullName: "Abdul Basit",
        email: "xasit.io@example.com",
        currentRole: "Full Stack Developer",
        targetSalary: "$128k",
        vibeCheckScore: "85%",
        bio: "Passionate developer focused on building highly responsive, scalable systems and clean, user-centered digital products that balance aesthetic simplicity with robust architecture.",
    });

    // Edit state management
    const [isEditing, setIsEditing] = useState(false);
    const [tempProfile, setTempProfile] = useState({ ...profile });
    const [saveSuccess, setSaveSuccess] = useState(false);

    const [skills] = useState([
        "React.js", "Node.js", "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL"
    ]);

    const [recentActivity] = useState([
        { id: 1, type: "Job Saved", title: "Product Designer at Stripe", time: "2 hours ago" },
        { id: 2, type: "Lesson Completed", title: "Intro to Component Libraries", time: "Yesterday" },
        { id: 3, type: "Skills Matched", title: "80% Match for Data Analyst Role", time: "3 days ago" },
    ]);

    // Handle input alterations
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempProfile((prev) => ({ ...prev, [name]: value }));
    };

    // Toggle edit mode
    const handleEditToggle = () => {
        if (isEditing) {
            // Cancel action
            setTempProfile({ ...profile });
        }
        setIsEditing(!isEditing);
    };

    // Commit changes
    const handleSaveChanges = (e) => {
        if (e) e.preventDefault();
        setProfile({ ...tempProfile });
        setIsEditing(false);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
    };

    return (
        <div className="relative min-h-screen bg-[#0C0E0B] text-[#D9E6DF] font-space-grotesk overflow-x-hidden antialiased">
            <Sidebar Vector={Vector} house={house} briefcase={briefcase} />

            <main className="min-h-screen pb-24 md:pb-12 pl-0 md:pl-[76px] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[260px] bg-gradient-to-b from-[#15CF9D]/5 to-transparent pointer-events-none" />
                <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-6 md:pt-10">
                    {saveSuccess && (
                        <div role="alert" className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 bg-[#111310]/95 backdrop-blur-md border border-[#15CF9D] text-[#15CF9D] px-4 py-3.5 rounded-xl shadow-xl shadow-black/40 flex items-center justify-center sm:justify-start gap-3 transition-all duration-300 ease-out" >
                            <span className="text-lg flex-shrink-0" aria-hidden="true">✓</span>
                            <span className="text-xs font-semibold tracking-wide">Profile updated successfully!</span>
                        </div>
                    )}
                    <header className="bg-[#111310] border border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9FE870]/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative p-[3px] rounded-full flex-shrink-0">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9FE870] to-[#15CF9D]" />
                            <div className="relative bg-[#1E221E] w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center z-10 border border-white/5">
                                <img src={Account} alt="User Account Profile Avatar" className="w-10 h-10 md:w-12 md:h-12 opacity-95" />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left w-full flex flex-col justify-between min-h-[80px]">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white"> {profile.fullName} </h1>
                                    <p className="text-[#9FE870] font-medium text-xs md:text-sm"> {profile.currentRole} </p>
                                </div>
                                <div className="flex items-center justify-center md:justify-start gap-2.5 self-stretch md:self-center">
                                    {!isEditing ? (
                                        <button onClick={handleEditToggle} className="w-full sm:w-auto px-6 py-2.5 cursor-pointer rounded-full border border-[#373934] bg-[#1E221E] text-white hover:bg-white/5 hover:border-white/20 active:scale-95 transition-all duration-200 text-xs md:text-sm font-semibold min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15CF9D]/50" >
                                            Edit Profile
                                        </button>
                                    ) : (
                                        <div className="flex gap-2 w-full sm:w-auto">
                                            <button onClick={handleEditToggle} className="flex-1 sm:flex-none px-5 py-2.5 cursor-pointer rounded-full border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 active:scale-95 transition-all duration-200 text-xs md:text-sm font-semibold min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50" >
                                                Cancel
                                            </button>
                                            <button onClick={(e) => handleSaveChanges(e)} className="flex-1 sm:flex-none px-5 py-2.5 cursor-pointer rounded-full bg-gradient-to-r from-[#9FE870] to-[#15CF9D] text-[#0C0E0B] hover:opacity-90 active:scale-95 transition-all duration-200 text-xs md:text-sm font-bold min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15CF9D]/50" >
                                                Save Changes
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4">
                                {isEditing ? (
                                    <div className="w-full">
                                        <label htmlFor="bio-input" className="sr-only">Edit Profile Bio</label>
                                        <textarea id="bio-input" name="bio" value={tempProfile.bio} onChange={handleInputChange} rows={3} className="w-full bg-[#1A1D1A] border border-[#15CF9D]/30 rounded-xl px-4 py-3 text-sm text-[#D9E6DF] focus:outline-none focus:ring-2 focus:ring-[#15CF9D]/30 focus:border-[#15CF9D] transition-all resize-none leading-relaxed" placeholder="Write a brief intro bio..." />
                                    </div>
                                ) : (<p className="text-xs md:text-sm text-[#A0A3A1] leading-relaxed max-w-2xl mx-auto md:mx-0"> {profile.bio} </p>)}
                            </div>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg">
                                <h2 className="text-base md:text-lg font-bold text-white mb-5">Account Details</h2>
                                <form onSubmit={handleSaveChanges} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="fullName" className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold">Full Name</label>
                                        {isEditing ? (<input type="text" id="fullName" name="fullName" value={tempProfile.fullName} onChange={handleInputChange} className="w-full bg-[#1A1D1A] border border-[#15CF9D]/40 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] transition-all duration-200 outline-none min-h-[44px] focus:ring-2 focus:ring-[#15CF9D]/30 focus:border-[#15CF9D]" />
                                        ) : (<div className="w-full bg-[#141613] border border-white/5 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] min-h-[44px] flex items-center"> {profile.fullName} </div>)}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold"> Email Address </label>
                                        {isEditing ? (<input type="email" id="email" name="email" value={tempProfile.email} onChange={handleInputChange} className="w-full bg-[#1A1D1A] border border-[#15CF9D]/40 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] transition-all duration-200 outline-none min-h-[44px] focus:ring-2 focus:ring-[#15CF9D]/30 focus:border-[#15CF9D]" />
                                        ) : (<div className="w-full bg-[#141613] border border-white/5 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] min-h-[44px] flex items-center overflow-x-auto whitespace-nowrap scrollbar-none"> {profile.email} </div>)}
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="targetSalary" className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold"> Target Salary </label>
                                        {isEditing ? (
                                            <input type="text" id="targetSalary" name="targetSalary" value={tempProfile.targetSalary} onChange={handleInputChange} className="w-full bg-[#1A1D1A] border border-[#15CF9D]/40 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] transition-all duration-200 outline-none min-h-[44px] focus:ring-2 focus:ring-[#15CF9D]/30 focus:border-[#15CF9D]" />
                                        ) : (<div className="w-full bg-[#141613] border border-white/5 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] min-h-[44px] flex items-center"> {profile.targetSalary} </div>)}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="currentRole" className="block text-[10px] md:text-xs text-[#A0A3A1] uppercase tracking-wider mb-1.5 font-bold"> Current Role </label>
                                        {isEditing ? (
                                            <input type="text" id="currentRole" name="currentRole" value={tempProfile.currentRole} onChange={handleInputChange} className="w-full bg-[#1A1D1A] border border-[#15CF9D]/40 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] transition-all duration-200 outline-none min-h-[44px] focus:ring-2 focus:ring-[#15CF9D]/30 focus:border-[#15CF9D]" />
                                        ) : (<div className="w-full bg-[#141613] border border-white/5 rounded-lg px-3.5 py-2.5 text-sm text-[#D9E6DF] min-h-[44px] flex items-center"> {profile.currentRole} </div>)}
                                    </div>
                                </form>
                            </section>
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg">
                                <h2 className="text-base md:text-lg font-bold text-white mb-4">Recent Activity</h2>
                                <div className="space-y-3">
                                    {recentActivity.map((activity) => (
                                        <div key={activity.id} className="flex flex-col gap-2.5 p-4 rounded-xl bg-[#141613] border border-white/5 hover:border-white/10 active:border-white/10 transition-colors duration-200 group cursor-pointer" >
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase bg-[#1A2218] text-[#9FE870] px-2.5 py-1 rounded"> {activity.type} </span>
                                                <span className="text-xs text-[#6F7370] whitespace-nowrap">{activity.time}</span>
                                            </div>
                                            <h3 className="text-sm md:text-base font-bold text-white tracking-wide group-hover:text-[#9FE870] transition-colors duration-200"> {activity.title} </h3>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <div className="flex flex-col gap-6">
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg">
                                <h2 className="text-base md:text-lg font-bold text-white mb-1.5">Skills Inventory</h2>
                                <p className="text-xs text-[#A0A3A1] mb-4 leading-normal"> Skills matching your chosen career path listings. </p>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="text-xs font-semibold px-3 py-2 rounded bg-[#1A1D1A] text-[#D9E6DF] border border-white/5 hover:border-[#15CF9D]/30 hover:text-[#15CF9D] transition-all duration-200 cursor-default" > {skill} </span>
                                    ))}
                                </div>
                            </section>
                            <section className="bg-[#111310] border border-white/5 rounded-2xl p-5 md:p-6 shadow-lg flex flex-col">
                                <h2 className="text-base md:text-lg font-bold text-white mb-1">Status Overview</h2>
                                <p className="text-xs text-[#A0A3A1] mb-5">Current evaluation indicators</p>
                                <div className="space-y-3">
                                    <div className="p-4 rounded-xl bg-[#141814] border border-[#15CF9D]/15 flex items-center justify-between hover:border-[#15CF9D]/30 transition-colors duration-200">
                                        <div>
                                            <p className="text-[#6F7370] text-xs font-medium mb-0.5">Vibe Check</p>
                                            <p className="font-bold text-white text-sm sm:text-base md:text-lg"> {isEditing ? tempProfile.vibeCheckScore : profile.vibeCheckScore} Approved </p>
                                        </div>
                                        <div className="w-8 h-8 rounded-lg bg-[#15CF9D] flex items-center justify-center shadow-sm flex-shrink-0" aria-hidden="true">
                                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 4.5L4 7L9.5 1.5" stroke="#111310" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#141613] border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors duration-200">
                                        <div>
                                            <p className="text-[#6F7370] text-xs font-medium mb-0.5">Target Wage</p>
                                            <p className="font-bold text-white text-sm sm:text-base md:text-lg"> {isEditing ? tempProfile.targetSalary : profile.targetSalary} / yr </p>
                                        </div>
                                        <span className="text-2xl select-none" role="img" aria-label="Money Bag Icon">💰</span>
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