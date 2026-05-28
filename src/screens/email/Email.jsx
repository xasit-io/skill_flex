import "../../index.css";
import React, { useState } from "react";
import Logo from "../../assests/Logo.svg";

function Email({ goTo }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSend = () => {
        setError("");

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        goTo("Verification", { email });
    };

    return (
        <div className="background flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">

            {/* Logo */}
            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-full shadow-neon-green">
                <img
                    className="w-full h-full object-contain rounded-full"
                    src={Logo}
                    alt="Company Logo"
                />
            </div>

            {/* Card */}
            <div className="mt-8 w-full max-w-md sm:max-w-lg bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl flex flex-col items-center gap-4 sm:gap-5 shadow-xl">

                <h2 className="text-white text-2xl sm:text-3xl font-space-grotesk font-semibold text-center">
                    Email Address
                </h2>

                <p className="text-white/50 text-sm sm:text-base text-center font-space-grotesk max-w-[90%] sm:max-w-[380px]">
                    We’ll send you a verification code to get started
                </p>

                {/* Input */}
                <input
                    type="email"
                    value={email}
                    autoFocus
                    placeholder="john@example.com"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                    }}
                    className="font-space-grotesk w-full px-4 py-3 rounded-lg bg-[#9FE870]/5 text-white placeholder-white/40 outline-none border border-[#9FE870]/10 focus:border-green-300 transition-all"
                />

                {/* Button */}
                <button
                    type="button"
                    onClick={handleSend}
                    disabled={!email.trim()}
                    className="w-full sm:w-auto px-6 sm:px-10 py-3 mt-2 text-sm sm:text-base rounded-full font-semibold text-black bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-[0_8px_20px_rgba(159,232,112,0.4)] hover:-translate-y-1 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:translate-y-0"
                >
                    Send Verification Code
                </button>
            </div>

            {/* Error Toast */}
            {error && (
                <div className="fixed top-4 right-4 left-4 sm:left-auto sm:max-w-sm z-[999] animate-fade">
                    <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-[#0f2f1f] to-[#0d251d] border border-green-400/40 shadow-[0_0_15px_rgba(0,255,120,0.3)] text-green-200 backdrop-blur-md">
                        <svg
                            className="w-5 h-5 mr-3 text-green-300 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>

                        <span className="text-sm sm:text-base text-green-100 break-words">
                            {error}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Email;