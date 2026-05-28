import React from "react";
import Logo from "./../assests/Logo.svg"

const PageHeader = ({ title }) => {

    return (
        <>
            <div className="flex flex-col items-center mt-4 md:mt-[45px] px-3">
                <div className="w-12 h-12 md:w-[70px] md:h-[70px] flex items-center justify-center rounded-full shadow-neon-green"> <img className="w-full h-full object-contain rounded-full" src={Logo} alt="Company Logo" /> </div>
                <h2 className="text-[20px] leading-[1.35] tracking-tight md:text-[32px] font-bold text-white mt-3 md:mt-4 font-space-grotesk text-center"> {title} </h2>
            </div>
        </>
    );
};

export default PageHeader;