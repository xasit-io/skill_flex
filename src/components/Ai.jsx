import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "../assests/Logo.svg";
import sendicon from "../assests/sendicon.svg";
import Effect3 from "../assests/Effect3.svg";
import Effect4 from "../assests/Effect4.svg";

const Ai = () => {
    const { pathname } = useLocation();

    const ishome = pathname === "/home";
    const isCareer = pathname.includes("careerdetail");
    const isLearningPath = pathname.includes("learningpath");

    return (
        <>
            {ishome && (
                <div className="fixed bottom-[84px] right-4 md:bottom-[34px] md:right-[40px] z-50">
                    <div className="cursor-pointer w-[52px] h-[52px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full shadow-neon-4">
                        <img className="w-full h-full object-contain rounded-full" src={Logo} alt="Company Logo" />
                    </div>
                </div>
            )}
            {isCareer && (
                <div className="cursor-pointer absolute bottom-0 right-0 z-40 hidden md:block">
                    <div className="absolute bottom-[-120px] right-[-120px] w-[780px] h-[650px] bg-no-repeat bg-center bg-contain pointer-events-none" style={{ backgroundImage: `url(${Effect3})` }} />
                    <div className="relative bottom-[34px] right-[66px] w-[60px] h-[60px] rounded-full shadow-neon-4 flex items-center justify-center">
                        <img src={Logo} alt="Effect Logo" className="w-full h-full rounded-full object-contain" />
                    </div>
                </div>
            )}

            {isLearningPath && (
                <div className="absolute bottom-[124px] right-0 z-40 hidden md:flex flex-col items-end">
                    <div className="bg-[#0E110E] mr-[16px] p-4 rounded-lg border-2 border-[#1C311E] w-[328px]">
                        <h2 className="text-[18px] font-medium text-center font-space-grotesk tracking-[-0.01em] mb-4"> How can I help you? </h2>
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#151C13] flex justify-between items-center gap-2 p-4 rounded-lg border-2 border-[#314526] hover:bg-[#141714] transition-colors cursor-pointer">
                                <h3 className="text-[14px] max-w-[250px] font-medium font-space-grotesk"> How can I start as a product designer? </h3>
                                <img src={sendicon} alt="Send" className="w-5 h-5" />
                            </div>
                            <div className="bg-[#151C13] flex justify-between items-center gap-2 p-4 rounded-lg border-2 border-[#314526] hover:bg-[#141714] transition-colors cursor-pointer">
                                <h3 className="text-[14px] max-w-[200px] font-medium font-space-grotesk"> How long will it take me to become a product designer? </h3>
                                <img src={sendicon} alt="Send" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-[850px] h-[750px] absolute -bottom-[150px] -right-[180px] bg-no-repeat bg-center bg-contain pointer-events-none" style={{ backgroundImage: `url(${Effect4})` }} />
                        <div className="relative -bottom-[26px] right-[20px] w-[60px] h-[60px] rounded-full shadow-neon-4 cursor-pointer flex items-center justify-center" >
                            <img src={Logo} alt="Effect Logo" className="w-full h-full rounded-full object-contain" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Ai;