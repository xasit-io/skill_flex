import React from 'react';

function Arrows({ scrollLeft, scrollRight, leftDisabled, rightDisabled }) {
    const getBtnClass = (isDisabled) => ` group relative p-[2px] rounded-full transition-all duration-200
        ${isDisabled
            ? 'bg-gradient-to-r from-[#9FE870] to-[#15CF9D] opacity-30 cursor-not-allowed'
            : 'bg-gradient-to-r from-[#9FE870] to-[#15CF9D] cursor-pointer hover:shadow-[0_0_10px_5px_rgba(159,232,112,0.3)] active:scale-95 active:translate-y-0.5'
        }
    `;

    const getIconClass = (isDisabled) => ` bg-[#121511] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200
        ${!isDisabled && 'group-hover:bg-gradient-to-r group-hover:from-[#9FE870] group-hover:to-[#15CF9D]'}
    `;

    return (
        <div className="hidden md:flex absolute top-[-60px] right-[180px] items-center gap-[15px] z-20">
            <button disabled={leftDisabled} onClick={!leftDisabled ? scrollLeft : undefined} className={getBtnClass(leftDisabled)} >
                <div className={getIconClass(leftDisabled)}>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                        className={`rotate-180 transition-transform duration-200 ${!leftDisabled && 'group-hover:scale-110'}`}>
                        <path d="M7.5495 -0.000912418L13.0594 5.5103C13.1116 5.56007 13.1532 5.61992 13.1816 5.68622C13.21 5.75252 13.2246 5.82389 13.2246 5.89602C13.2246 5.96814 13.21 6.03951 13.1816 6.10581C13.1532 6.17211 13.1116 6.23196 13.0594 6.28173L7.5495 11.791L6.77807 11.0196L11.3514 6.4463L0.000427012 6.4463L0.000426964 5.3438L11.3507 5.3438L6.77743 0.770517L7.5495 -0.000912418Z" className={`transition-colors duration-200 
                            ${leftDisabled ? 'fill-[#9FE870]' : 'fill-[#9FE870] group-hover:fill-black'}`} />
                    </svg>
                </div>
            </button>
            <button disabled={rightDisabled} onClick={!rightDisabled ? scrollRight : undefined} className={getBtnClass(rightDisabled)} >
                <div className={getIconClass(rightDisabled)}>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                        className={`transition-transform duration-200 ${!rightDisabled && 'group-hover:scale-110'}`}>
                        <path d="M7.5495 -0.000912418L13.0594 5.5103C13.1116 5.56007 13.1532 5.61992 13.1816 5.68622C13.21 5.75252 13.2246 5.82389 13.2246 5.89602C13.2246 5.96814 13.21 6.03951 13.1816 6.10581C13.1532 6.17211 13.1116 6.23196 13.0594 6.28173L7.5495 11.791L6.77807 11.0196L11.3514 6.4463L0.000427012 6.4463L0.000426964 5.3438L11.3507 5.3438L6.77743 0.770517L7.5495 -0.000912418Z" className={`transition-colors duration-200 
                            ${rightDisabled ? 'fill-[#9FE870]' : 'fill-[#9FE870] group-hover:fill-black'}`} />
                    </svg>
                </div>
            </button>
        </div>
    );
}

export default Arrows;
