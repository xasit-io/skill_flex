// Questions.jsx
import "../../index.css";
import React, { useState } from 'react';
import Logo from "../../assests/Logo.svg";
import questions from './QuestionDisplay';
import { useNavigate } from "react-router-dom";

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function Questions() {
    const navigate = useNavigate();
    const totalQuestions = questions.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState(null);
    const [selecting, setSelecting] = useState(null); // ephemeral "just tapped" state
    const progressPercent = Math.floor(((currentQuestion + 1) / totalQuestions) * 100);

    const handleSelect = (index) => {
        if (selected !== null) return; // prevent double-tap mid-transition
        setSelecting(index);
        setSelected(index);

        const isLast = currentQuestion >= totalQuestions - 1;

        setTimeout(() => {
            try {
                localStorage.setItem("quizProgress", JSON.stringify({
                    currentQuestion: currentQuestion + 1,
                    totalQuestions
                }));
                if (isLast) {
                    localStorage.setItem("quizStatus", "completed");
                    navigate("/home");
                } else {
                    setCurrentQuestion(prev => prev + 1);
                    setSelected(null);
                    setSelecting(null);
                }
            } catch (error) {
                console.error("Error saving to localStorage:", error);
                if (isLast) navigate("/home");
                else { setCurrentQuestion(prev => prev + 1); setSelected(null); setSelecting(null); }
            }
        }, 320);
    };

    const onSkip = () => {
        try { localStorage.setItem("quizStatus", "skipped"); }
        catch (e) { console.error(e); }
        navigate("/home");
    };

    const q = questions[currentQuestion];

    return (
        <>
            <div className="background fixed inset-0 z-0 pointer-events-none" />
            <div className="relative z-10 min-h-screen overflow-y-auto flex justify-center px-4 py-6 pb-10 box-border">
                <div className="w-full max-w-[550px] flex flex-col items-center gap-5">
                    <div className="w-full">
                        <div className="flex justify-between mb-2">
                            <span className="text-white/70 font-['Space_Grotesk'] font-semibold text-[clamp(11px,2vw,13px)]"> Question {currentQuestion + 1} of {totalQuestions} </span>
                            <span className="text-[#5a9e40]/85 font-['Space_Grotesk'] font-bold text-[clamp(11px,2vw,13px)]"> {progressPercent}% </span>
                        </div>
                        <div className="w-full h-1.5 bg-[#374151]/60 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#4a8a34] to-[#5a9e40] rounded-full transition-[width] duration-500 ease-out" style={{ width: `${progressPercent}%` }} />
                        </div>
                    </div>
                    <div className="w-[clamp(52px,10vw,68px)] h-[clamp(52px,10vw,68px)] rounded-full shrink-0 shadow-[0_0_18px_3px_rgba(74,222,128,0.25)] flex items-center justify-center"> <img src={Logo} alt="Company Logo" className="w-full h-full object-contain rounded-full" /> </div>
                    <div className="w-full bg-black/35 backdrop-blur-[14px] rounded-2xl border border-[#284e2f]/30 p-[clamp(18px,4vw,32px)] flex flex-col items-center gap-[clamp(14px,3vw,22px)] shadow-[0_20px_60px_rgba(0,0,0,0.4)] box-border">
                        <h2 className="font-['Space_Grotesk'] font-bold text-white text-[clamp(16px,3.5vw,24px)] leading-[1.45] text-center m-0"> {q.text} </h2>
                        <div className="w-full flex flex-col gap-2">
                            {q.options.map((opt, i) => {
                                const isSelected = selected === i;
                                const isSelecting = selecting === i;
                                return (
                                    <button key={i} onClick={() => handleSelect(i)} className={` w-full flex items-center gap-3 rounded-lg text-left select-none box-border transition-all duration-200 min-h-[52px] [webkit-tap-highlight-color:transparent] cursor-pointer font-['Space_Grotesk'] font-semibold text-white/85 text-[clamp(13px,2.5vw,15px)] py-[clamp(10px,2.5vw,14px)] px-[clamp(12px,3vw,20px)] ${isSelected ? 'bg-[#284e2f]/18 border-[#5a9e40]/75 shadow-[0_2px_14px_rgba(90,158,64,0.15)] border-[1.5px]' : isSelecting ? 'bg-[#284e2f]/28 border-[#5a9e40]/90 shadow-[0_2px_20px_rgba(90,158,64,0.22)] scale-[0.995] border-[1.5px]' : 'bg-white/[0.03] border-[#284e2f]/70 hover:border-[#5a9e40]/55 hover:bg-[#284e2f]/10 border-[1.5px]'} `} >
                                        <span className={` w-[clamp(24px,4vw,30px)] h-[clamp(24px,4vw,30px)] min-w-[clamp(24px,4vw,30px)] rounded-[6px] border-[1.5px] flex items-center justify-center shrink-0 font-bold text-[clamp(10px,2vw,12px)] transition-all duration-200 ${isSelected ? 'border-[#5a9e40]/75 text-[#5a9e40]/90' : 'border-[#284e2f]/70 text-white/35'} `}>
                                            {LETTERS[i]} </span> <span>{opt}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <button onClick={onSkip} className="font-['Space_Grotesk'] font-semibold text-white/45 text-[clamp(12px,2.5vw,14px)] bg-transparent border-none cursor-pointer px-4 py-2 min-h-[44px] tracking-wide [webkit-tap-highlight-color:transparent] transition-colors duration-200 hover:text-white/65 active:text-white/70" >
                        Skip Quiz
                    </button>
                </div>
            </div>
        </>
    );
}

export default Questions;