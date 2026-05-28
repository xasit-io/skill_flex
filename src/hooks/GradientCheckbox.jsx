import { useState, useEffect } from "react";

export default function GradientCheckbox({ checked: checkedProp = false }) {
    const [checked, setChecked] = useState(checkedProp);

    useEffect(() => {
        setChecked(checkedProp);
    }, [checkedProp]);
    return (

        <label className="flex items-center cursor-pointer select-none mr-[16px]">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="sr-only" />
            <span className={`relative h-[22px] w-[22px] rounded-[3px] py-[2px] px-[2px] ${checked ? "bg-gradient-to-br from-[#9FE870] to-[#15CF9D]" : "bg-[#868685]"}`} >
                <span className={`flex h-full w-full items-center justify-center rounded-[3px] ${checked ? "bg-[#283122]" : "bg-[#1A1E19]"}`} >
                    {checked && (
                        <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] p-[2px]" fill="none" stroke="url(#checkGradient)" strokeWidth="3" >
                            <defs>
                                <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%" >
                                    <stop offset="17%" stopColor="#9FE870" />
                                    <stop offset="100%" stopColor="#15CF9D" />
                                </linearGradient>
                            </defs>
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    )}
                </span>
            </span>
        </label>
    );
}