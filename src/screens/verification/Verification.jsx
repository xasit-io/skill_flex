import "../../index.css";
import React, { useState } from 'react';
import Logo from '../../assests/Logo.svg';

function Verification({ email, goTo }) {

  const [code, setCode] = useState(['', '', '', '']);

  const handleVerify = () => {
    const enteredCode = code.join('');
    console.log('Verifying code:', enteredCode);
  };

  const isDisabled = code.some(digit => digit === '');

  return (
    <div className="background min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">

      {/* Logo */}
      <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-full shadow-neon-green">
        <img className="w-full h-full object-contain rounded-full" src={Logo} alt="Company Logo" />
      </div>

      {/* Card */}
      <div className="mt-8 w-full max-w-md sm:max-w-lg bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl flex flex-col items-center gap-3 sm:gap-4 shadow-xl">

        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-space-grotesk font-semibold text-center">
          Enter verification code
        </h2>

        <p className="text-white/50 text-sm sm:text-base text-center max-w-xs sm:max-w-sm font-space-grotesk">
          We've sent a 4-digit code to
        </p>

        <div className="text-white/70 text-sm sm:text-base font-bold break-all text-center">
          {email}
        </div>

        {/* OTP Inputs */}
        <div className="flex gap-2 sm:gap-4 mt-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              autoFocus={index === 0}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/, '');
                const newCode = [...code];
                newCode[index] = val;
                setCode(newCode);

                if (val && index < code.length - 1) {
                  document.getElementById(`input-${index + 1}`).focus();
                }

                if (!val && index > 0) {
                  document.getElementById(`input-${index - 1}`).focus();
                }
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-center text-lg sm:text-xl md:text-2xl text-green-100 rounded-lg sm:rounded-xl bg-[#123422] backdrop-blur-sm border border-[#2A4937] focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-[0_0_15px_rgba(0,255,120,0.4)]"
            />
          ))}
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={() => {
            handleVerify();
            goTo(`Questions`);
          }}
          disabled={isDisabled}
          className="w-full sm:max-w-xs py-3 mt-6 text-sm sm:text-base rounded-full font-semibold text-black bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-[0_8px_20px_rgba(159,232,112,0.4)] hover:-translate-y-1 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:translate-y-0"
        >
          Verify Code
        </button>

        {/* Resend */}
        <p className="text-white/50 mt-4 text-sm sm:text-base font-semibold text-center">
          Didn’t receive the code?
        </p>

        <p className="text-green-500 text-sm sm:text-base font-semibold text-center cursor-pointer hover:underline">
          Resend code
        </p>
      </div>
    </div>
  );
}

export default Verification;