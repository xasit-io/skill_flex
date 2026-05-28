import "./index.css";
import lock from "../../assests/lock.svg";
import house from "../../assests/house.svg";
import Vector from "../../assests/Vector.svg";
import dollar from "../../assests/dollar.svg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Arrows from "../../components/Arrows.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import React, { useEffect, useState, useRef, useCallback } from "react";
import briefcase from "../../assests/briefcase.svg";
import SearchBar from "../../components/SearchBar.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import questions from "../../screens/questions/QuestionDisplay";
import { jobsData, jobCards } from "../../data.js";
import {
    roles as defaultRoles,
    hotJobs as defaultHotJobs,
    careerPaths as defaultCareerPaths,
} from "../../data.js";

/* ─── constants ─────────────────────────────────────────── */
const CARD_WIDTH = 370;
const GAP = 24;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

/* ─── tiny hook: manages one slider's scroll state ──────── */
function useSlider() {
    const ref = useRef(null);
    const [leftDisabled, setLeftDisabled] = useState(true);
    const [rightDisabled, setRightDisabled] = useState(false);

    const onScroll = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        setLeftDisabled(el.scrollLeft <= 5);
        setRightDisabled(Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 5);
    }, []);

    const scrollLeft = useCallback(() => ref.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" }), []);
    const scrollRight = useCallback(() => ref.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" }), []);

    return { ref, onScroll, scrollLeft, scrollRight, leftDisabled, rightDisabled };
}

/* ─── Play icon (shared) ─────────────────────────────────── */
const PlayIcon = () => (
    <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path
            d="M1.70508 5.11474V3.59752C1.70508 1.71377 3.03904 0.942378 4.67133 1.88425L5.98825 2.64286L7.30516 3.40147C8.93745 4.34334 8.93745 5.88613 7.30516 6.828L5.98825 7.58662L4.67133 8.34523C3.03904 9.2871 1.70508 8.5157 1.70508 6.63196V5.11474Z"
            stroke="#101010"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const GradientButton = ({ onClick, children, className = "" }) => (
    <button
        onClick={onClick}
        className={`group relative flex w-full min-h-[44px] items-center justify-center overflow-hidden rounded-full border-2 border-[#75E07D] bg-[#21231D] py-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 ${className}`}
    >
        <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-transform duration-500 ease-out group-hover:scale-x-100" />
        <span className="relative z-10 font-space-grotesk font-semibold bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent transition-all duration-500 group-hover:text-[#21231D] group-hover:[background:none]">
            {children}
        </span>
    </button>
);

/* ─── component ─────────────────────────────────────────── */
const Home = ({
    roles = defaultRoles,
    hotJobs = defaultHotJobs,
    careerPaths = defaultCareerPaths,
}) => {
    const navigate = useNavigate();
    const [quizDone, setQuizDone] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(questions.length);

    const safeCurrent = Math.min(currentQuestion, totalQuestions - 1);
    const progressPercent = Math.min(100, Math.floor(((safeCurrent + 1) / totalQuestions) * 100));

    const slider1 = useSlider();
    const slider2 = useSlider();

    useEffect(() => {
        try {
            if (localStorage.getItem("quizStatus") === "completed") setQuizDone(true);

            const raw = localStorage.getItem("quizProgress");
            if (raw) {
                const p = JSON.parse(raw);
                if (p && typeof p === "object") {
                    setCurrentQuestion(Math.min(p.currentQuestion, p.totalQuestions - 1));
                    setTotalQuestions(p.totalQuestions);
                }
            }
        } catch {
            localStorage.removeItem("quizProgress");
            localStorage.removeItem("quizStatus");
        }
    }, []);

    return (
        <div className="background1 relative min-h-screen">
            <Header />
            <Sidebar Vector={Vector} house={house} briefcase={briefcase} />
            <div className="relative z-10 pb-24 md:pb-10 md:pl-[70px]">
                <PageHeader title="Explore all the available jobs here!" />
                {/* ══════════════════════════════════════════
                    ROLE CARDS
                    ══════════════════════════════════════════ */}
                <section className="relative w-full mt-5 md:mt-10 transition-all duration-300">
                    <div className={` flex flex-wrap gap-3 md:gap-6 justify-center max-w-[1200px] px-3 md:px-4 mx-auto transition-all duration-300 ${!quizDone ? "pointer-events-none select-none" : ""} `} >
                        {roles.map((role, i) => (
                            <article key={i} className="p-3 md:p-5 rounded-2xl shadow-xl w-full sm:max-w-[360px]" style={{ backgroundColor: role.cardBg }} >
                                <h1 className="font-space-grotesk font-bold pb-3 md:pb-4 flex justify-center text-[21px] md:text-[32px] leading-snug text-center"> {role.title} </h1>
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
                    {/* ── quiz gate overlay ── */}
                    {!quizDone && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center max-w-[1200px] mx-auto rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 backdrop-blur-[20px]" />
                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(0,0,0,0.55))] opacity-80" />
                            <div className="relative z-50 mt-6 md:mt-10 w-full max-w-[520px] bg-black/80 backdrop-blur-md p-4 md:p-8 rounded-2xl flex flex-col items-center gap-4 md:gap-5 shadow-xl mx-3">
                                <div className="flex flex-col items-center text-center gap-4 w-full">
                                    <div className="flex items-center justify-center p-2 rounded-[32px] bg-white/5">
                                        <img src={lock} alt="" className="w-10" aria-hidden="true" />
                                    </div>
                                    <h2 className="text-white font-space-grotesk max-w-[400px] font-bold text-lg md:text-2xl leading-snug"> Take a short quiz to discover your next dream career! </h2>
                                    <div className="w-full">
                                        <div className="flex justify-between mb-2 text-white font-space-grotesk font-semibold text-sm">
                                            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                                            <span>{progressPercent}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <div className="bg-green-400 h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <button type="button" onClick={() => navigate("/questions")} className="group relative overflow-hidden w-full min-h-[44px] px-6 py-3 mt-3 text-sm md:text-base rounded-full font-semibold text-black bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 active:opacity-75" >
                                        <span className="absolute top-0 -left-full h-full w-5 bg-white/50 shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all duration-700 ease-in-out group-hover:left-full -skew-x-12" />
                                        <span className="relative z-10">Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
                {/* ══════════════════════════════════════════
                    RE-QUIZ NUDGE (post-quiz)
                    ══════════════════════════════════════════ */}
                {quizDone && (
                    <div className="w-full px-4 md:px-6 mt-6 md:mt-8">
                        <div className="max-w-[1140px] mx-auto rounded-2xl p-[2px]">
                            <div className="bg-[#1E211D] flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl px-4 py-5 md:px-6 gap-4 md:gap-6">
                                <div className="flex flex-col max-w-[700px]">
                                    <p className="text-white font-space-grotesk text-base md:text-lg leading-snug"> Don’t like the recommendations? </p>
                                    <p className="text-[#9FA29F] font-space-grotesk text-sm mt-1 leading-relaxed"> Answer a few more questions to get even more personalised recommendations! </p>
                                </div>
                                <div className="w-full md:w-auto flex md:justify-end">
                                    <button onClick={() => navigate("/questions")} className="group relative w-full md:w-auto rounded-full p-[2px] bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 ease-out hover:-translate-y-[2px] active:scale-95 active:opacity-75" >
                                        <span className="relative flex items-center justify-center overflow-hidden rounded-full bg-[#21231D] px-6 py-3 w-full md:w-auto">
                                            <span className="absolute top-0 -left-[100%] h-full w-[10px] bg-[#9FE870] opacity-40 shadow-[0_0_20px_10px_#9FE870] transition-all duration-700 ease-in-out group-hover:left-[120%] skew-x-[-20deg]" />
                                            <span className="relative z-10 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent font-medium font-space-grotesk whitespace-nowrap">
                                                Start Quiz
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* ══════════════════════════════════════════
                        DISCOVER SECTION
                    ══════════════════════════════════════════ */}
                <div>
                    <div className="flex flex-col items-center w-full">
                        <h2 className={`mt-6 md:mt-10 text-white text-center font-jakarta font-bold text-xl md:text-[30px] transition-all ${quizDone ? "text-white pb-4 md:pb-8" : "text-[#9FE870]"}`} >
                            {quizDone ? "Discover career vibes!" : "Unlock your career search"}
                        </h2>
                        {quizDone && <SearchBar />}
                        {!quizDone && (
                            <div className="w-full px-4 md:px-6 mt-6 md:mt-8">
                                <div className="max-w-[1140px] mx-auto rounded-2xl p-[2px]">
                                    <div className="bg-[#1E211D] flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl px-4 py-5 md:px-6 gap-4 md:gap-6">
                                        <div className="flex flex-col max-w-[700px]">
                                            <p className="text-white font-space-grotesk text-base md:text-lg leading-snug"> Complete your quiz </p>
                                            <p className="text-[#9FA29F] font-space-grotesk text-sm mt-1 leading-relaxed"> Answer a few questions to unlock more accurate and personalised recommendations. </p>
                                        </div>
                                        <div className="w-full md:w-auto flex md:justify-end">
                                            <button onClick={() => navigate("/questions")} className="group relative w-full md:w-auto rounded-full p-[2px] bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 ease-out hover:-translate-y-[2px] active:scale-95 active:opacity-75" >
                                                <span className="relative flex items-center justify-center overflow-hidden rounded-full bg-[#21231D] px-6 py-3 w-full md:w-auto">
                                                    <span className="absolute top-0 -left-[100%] h-full w-[10px] bg-[#9FE870] opacity-40 shadow-[0_0_20px_10px_#9FE870] transition-all duration-700 ease-in-out group-hover:left-[120%] skew-x-[-20deg]" />
                                                    <span className="relative z-10 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent font-medium font-space-grotesk whitespace-nowrap">
                                                        Start Quiz
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="pt-4 md:pt-6 w-full flex flex-col items-center">
                        <h3 className="text-center text-white font-jakarta font-bold text-[17px] md:text-2xl"> What's hot right now 🔥 </h3>
                        <div className="relative w-full mt-3 md:mt-6">
                            <Arrows scrollLeft={slider1.scrollLeft} scrollRight={slider1.scrollRight} leftDisabled={slider1.leftDisabled} rightDisabled={slider1.rightDisabled} />
                            <div ref={slider1.ref} onScroll={slider1.onScroll} className="overflow-x-auto max-w-[1160px] mx-auto px-3 md:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} >
                                <div className="flex gap-3 md:gap-6 snap-x snap-mandatory">
                                    {jobsData.map((job, index) => (
                                        <article key={index} className="min-w-[290px] sm:min-w-[320px] md:min-w-[370px] max-w-[370px] flex-shrink-0 p-3 md:p-6 bg-[#0F0F0F] border border-[#262626] rounded-2xl snap-start" >
                                            <div className="flex justify-between items-start w-full gap-2">
                                                <h2 className="font-space-grotesk text-lg md:text-2xl font-medium text-white leading-tight"> {job.title} </h2>
                                                <div className="flex items-center gap-1 shrink-0">
                                                    <span aria-hidden="true">💰</span>
                                                    <span className="font-space-grotesk text-base font-medium text-white"> ${job.salary / 1000}k </span>
                                                    <span className="font-space-grotesk text-xs text-white/30">/mo.</span>
                                                </div>
                                            </div>
                                            <p className="font-space-grotesk text-[13px] md:text-sm text-white/40 leading-[1.4] mt-1"> {job.description} </p>
                                            <div className="mt-3.5 flex items-center bg-[#151515] rounded-full px-4 md:px-5 py-2.5 w-fit gap-3">
                                                <div className="flex items-center gap-2">
                                                    <span aria-hidden="true" className="opacity-80 text-lg">💼</span>
                                                    <p className="font-space-grotesk text-white text-sm flex items-center gap-2">
                                                        <span className="font-bold">{job.openings}</span>
                                                        <span className="text-white/40">Job openings</span>
                                                    </p>
                                                </div>
                                                <button className="w-[26px] h-[26px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#9FE870] to-[#15CF9D] shadow-[0_0_15px_rgba(159,232,112,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 shrink-0" aria-label={`View ${job.title} jobs`} >
                                                    <PlayIcon />
                                                </button>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* ── Big bucks slider ── */}
                        <div className="flex items-center justify-center gap-2 mt-6 md:mt-8 px-3 w-full max-w-[1160px]">
                            <h3 className="text-white text-[15px] sm:text-[17px] md:text-2xl font-semibold font-space-grotesk whitespace-nowrap"> Career paths that pay big bucks </h3>
                            <div className="flex shrink-0" aria-hidden="true">
                                {[0, 1, 2].map((i) => (<img key={i} src={dollar} alt="" className="w-3.5 h-[22px] md:w-4 md:h-[25px]" />))}
                            </div>
                        </div>
                        <div className="relative w-full mt-3 md:mt-6">
                            <Arrows scrollLeft={slider2.scrollLeft} scrollRight={slider2.scrollRight} leftDisabled={slider2.leftDisabled} rightDisabled={slider2.rightDisabled} />
                            <div ref={slider2.ref} onScroll={slider2.onScroll} className="overflow-x-auto max-w-[1160px] mx-auto px-3 md:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} >
                                <div className="flex gap-3 md:gap-6 snap-x snap-mandatory">
                                    {jobCards.map((job) => (
                                        <article key={job.id} className={`relative min-w-[290px] sm:min-w-[320px] md:min-w-[370px] max-w-[370px] flex-shrink-0 snap-start p-3 md:p-6 rounded-2xl flex flex-col gap-2.5 overflow-hidden ${job.bg}`}>
                                            <div className="relative z-10 flex flex-col gap-2.5">
                                                <h2 className="font-space-grotesk text-lg md:text-2xl font-medium text-white leading-tight"> {job.title} </h2>
                                                <p className="font-space-grotesk text-[13px] md:text-sm text-white/40 leading-[1.4]"> {job.description} </p>
                                                <div className="mt-2.5 flex items-center bg-[#202020] rounded-full px-[18px] py-2.5 w-fit gap-2">
                                                    <p className="font-space-grotesk text-white text-sm flex items-center gap-2">
                                                        <span className="font-bold text-[22px]"> <span className="text-lg">💰 $</span> {job.salary} </span>
                                                        <span className="text-white/40 text-sm">Salary (a month)</span>
                                                    </p>
                                                    <button className="w-[26px] h-[26px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#9FE870] to-[#15CF9D] shadow-[0_0_15px_rgba(159,232,112,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 shrink-0" aria-label={`View ${job.title} career`} >
                                                        <PlayIcon />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* decorative circle */}
                                            <div className={`absolute ${job.bottom} ${job.right} pointer-events-none translate-x-1/4 translate-y-1/4`} aria-hidden="true">
                                                <svg width="264" height="264" viewBox="0 0 264 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="131.799" cy="131.799" r="131.799" fill="white" fillOpacity="0.02" />
                                                    <circle cx="132.655" cy="125.657" r="110.403" fill="white" fillOpacity="0.04" />
                                                    <circle cx="131.797" cy="131.799" r="68.4669" fill="white" fillOpacity="0.06" />
                                                    <path d="M131.913 112C131.913 112 132.736 122.283 135.941 126.574C139.146 130.866 146.826 131.967 146.826 131.967C146.826 131.967 139.146 133.069 135.941 137.36C132.736 141.652 131.913 151.935 131.913 151.935C131.913 151.935 131.09 141.652 127.885 137.36C124.68 133.069 117 131.967 117 131.967C117 131.967 124.68 130.866 127.885 126.574C131.09 122.283 131.913 112 131.913 112Z" fill="white" fillOpacity="0.25" />
                                                    <path d="M120.815 114.08C120.815 114.08 121.025 118.648 121.845 120.554C122.665 122.46 124.63 122.949 124.63 122.949C124.63 122.949 122.665 123.439 121.845 125.345C121.025 127.251 120.815 131.819 120.815 131.819C120.815 131.819 120.604 127.251 119.785 125.345C118.965 123.439 117 122.949 117 122.949C117 122.949 118.965 122.46 119.785 120.554C120.604 118.648 120.815 114.08 120.815 114.08Z" fill="white" fillOpacity="0.25" />
                                                    <path d="M123.588 133.502C123.588 133.502 123.799 138.07 124.619 139.976C125.439 141.882 127.403 142.371 127.403 142.371C127.403 142.371 125.439 142.861 124.619 144.767C123.799 146.673 123.588 151.241 123.588 151.241C123.588 151.241 123.378 146.673 122.558 144.767C121.738 142.861 119.773 142.371 119.773 142.371C119.773 142.371 121.738 141.882 122.558 139.976C123.378 138.07 123.588 133.502 123.588 133.502Z" fill="white" fillOpacity="0.25" />
                                                </svg>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;