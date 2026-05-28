import "../index.css";
import Ai from "../../../components/Ai.jsx";
import house from "../../../assests/house.svg";
import Vector from "../../../assests/Vector.svg";
import imagebl from "../../../assests/imagebl.svg";
import Header from "../../../components/Header.jsx";
import Sidebar from "../../../components/Sidebar.jsx"
import briefcase from "../../../assests/briefcase.svg";
import { useNavigate, useParams } from "react-router-dom";
import checkcircle from "../../../assests/checkcircle.svg";
import { workDayData as defaultWorkDayData, popularDesigners as defaultPopularDesigners, salaryData as defaultSalaryData, companies as defaultCompanies, roles as defaultRoles } from "../../../data.js";

export default function CareerDetails({
  workDayData = defaultWorkDayData,
  popularDesigners = defaultPopularDesigners,
  salaryData = defaultSalaryData,
  companies = defaultCompanies,
  roles = defaultRoles
}) {

  const navigate = useNavigate();
  const { id } = useParams();
  const career = roles.find(role => role.id === id);

  if (!career) {
    return <p className="text-white p-10 font-space-grotesk text-center">Career not found</p>;
  }

  return (
    <>
      {/* 
        Root Layout Container 
        Changed 'overflow-x-clip' to 'overflow-clip' to prevent any absolute 
        background effects from stretching the page height.
      */}
      <div className="w-full min-h-screen bg-[#0E0F0E] text-white relative px-4 sm:px-6 pb-28 md:pb-8 overflow-clip">

        <Header />
        <Sidebar Vector={Vector} house={house} briefcase={briefcase} />

        {/* Core Layout Container */}
        <div className="lg:pl-[120px] lg:pr-[40px] mt-4 md:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-[66px] items-start">

          <div className="w-full lg:w-0 lg:flex-1 space-y-6 md:space-y-[24px] mt-[10px] min-w-0 order-1">

            {/* Profile Overview Card */}
            <div className="relative">
              <img
                src={imagebl}
                alt="top-border-gradient"
                className="absolute top-[-8px] left-0 w-full h-[16px] md:h-[22px] object-cover rounded-t-[32px]"
              />
              <div className="relative bg-[#1E211D] rounded-[16px] py-5 px-4 md:py-[32px] md:px-[20px] border border-[#2A2D29] z-10 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:items-center">
                  <h2 className="text-2xl sm:text-3xl md:text-[32px] font-space-grotesk font-bold tracking-[-0.025em] leading-tight">
                    {career.title}
                  </h2>
                  <div className="flex items-center gap-2 font-bold text-sm sm:text-base md:text-[20px] font-space-grotesk flex-shrink-0 bg-[#252924] sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-[#313630] sm:border-transparent">
                    <span>✅</span>
                    <span className="bg-[linear-gradient(90deg,#9FE870_17%,#15CF9D_100%)] bg-clip-text text-transparent">
                      80% vibe check
                    </span>
                  </div>
                </div>

                <p className="max-w-[820px] font-space-grotesk text-sm md:text-[16px] tracking-[-0.015em] text-[#A4A6A4] leading-relaxed">
                  {career.description}
                </p>

                <div className="pt-2">
                  <p className="max-w-[820px] font-space-grotesk text-sm sm:text-[15px] md:text-[18px] tracking-[-0.015em] text-[#D2D3D2] font-medium">
                    Required Skills
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {career.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 md:px-[12px] rounded-full bg-[#343633] border border-[#3E403D] text-[#FFFFFF] font-space-grotesk text-xs md:text-sm shadow-sm transition-colors hover:bg-[#3e403d]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Career Progression Section */}
            <div className="bg-[#1D201C] p-4 md:p-6 rounded-xl border border-[#232722] font-space-grotesk space-y-4">
              <h2 className="text-lg md:text-2xl font-bold text-white tracking-tight">Career Progression</h2>
              <div className="space-y-4 md:space-y-[22px]">
                {salaryData.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between text-white gap-3 p-3 sm:p-0 rounded-lg bg-[#171916] sm:bg-transparent border border-[#222521] sm:border-transparent">

                    {/* Level Meta */}
                    <div className="w-full sm:w-1/4 flex items-center gap-3 min-w-0">
                      <img className="w-9 h-9 flex-shrink-0 bg-[#252924] p-1.5 rounded-md" src={item.icon} alt={item.level} />
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm md:text-[16px] font-medium tracking-[0.01em] text-[#D2D3D2] truncate">
                          {item.level}
                        </span>
                        <span className="text-xs md:text-[14px] tracking-[0.015em] text-[#A4A6A4] truncate">
                          {item.experience}
                        </span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full sm:w-2/3 flex items-center sm:mx-4">
                      <div className="relative w-full h-7 bg-[#1C2E26] rounded-md overflow-hidden border border-[#213a2f]">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#0AB280] rounded-r-sm transition-all duration-500"
                          style={{ width: item.percentage }}
                        />
                      </div>
                    </div>

                    {/* Salary Meta */}
                    <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end text-right sm:flex-shrink-0 pt-2 sm:pt-0 border-t border-[#232722] sm:border-0">
                      <span className="text-xs text-[#A4A6A4] sm:hidden font-medium">Est. Salary</span>
                      <div className="flex items-center gap-1">
                        <span className="text-lg md:text-[24px]" role="img" aria-label="Money Bag">💰</span>
                        <span className="font-bold sm:font-medium text-lg md:text-[24px] text-[#9FE870]">
                          {item.salary}
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Demand Metrics Card */}
            <div className="p-4 md:p-[20px] bg-[#1E211D] text-white rounded-[16px] border border-[#2A2D29] shadow-2xl font-sans space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="space-y-1">
                  <h1 className="font-bold text-base md:text-[24px] font-space-grotesk tracking-tight text-[#A5A6A5]">Demand</h1>
                  <p className="font-bold text-2xl sm:text-3xl md:text-[30px] font-space-grotesk tracking-tight text-white">17M+ jobs</p>
                  <p className="text-xs md:text-[14px] text-[#A5A6A5] font-space-grotesk">posted this year</p>
                </div>

                {/* Fluid SVG Chart Container */}
                <div className="w-full sm:w-1/2 relative pt-2">
                  <div className="w-full overflow-hidden">
                    <svg viewBox="0 0 600 200" className="w-full h-24 sm:h-32 md:h-40" preserveAspectRatio="none">
                      <polyline fill="none" stroke="#9FE870" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" points="50,150 180,130 300,80 420,70 550,50" />
                    </svg>
                  </div>
                  <div className="mt-2 w-full flex justify-between text-[10px] sm:text-xs font-semibold font-jakarta text-[#787977] px-1">
                    <span>Jan 2025</span> <span>Mar 2025</span> <span>Jul 2025</span> <span>Sep 2025</span>
                  </div>
                </div>
              </div>

              {/* Sub-Hiring Section */}
              <div className="bg-[#181A17] p-4 md:p-[24px] border border-[#324228] rounded-xl space-y-4">
                <h2 className="text-sm sm:text-base md:text-[18px] font-semibold text-white font-space-grotesk">
                  Top Companies hiring product designers
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-[#1E211D] border border-[#2A2D29] sm:bg-transparent sm:border-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#181A17] flex-shrink-0 p-1">
                        <img src={company.logo} alt={`${company.name} Logo`} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h4 className="text-sm sm:text-[16px] font-medium text-white tracking-tight truncate">
                          {company.name}
                        </h4>
                        <span className="text-xs font-space-grotesk text-[#A2A3A2] truncate">
                          {company.openPositions} open positions
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="group relative mt-2 rounded-full p-[2px] bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 ease-out hover:-translate-y-[2px] active:opacity-75 outline-none w-full sm:w-auto" >
                  <span className="relative block overflow-hidden rounded-full bg-[#121511] px-4 py-3 sm:px-6 sm:py-3.5 text-center transition-colors duration-300">
                    <span className="absolute top-0 -left-[100%] h-full w-[10px] bg-[#9FE870] opacity-40 shadow-[0_0_20px_10px_#9FE870] transition-all duration-700 ease-in-out group-hover:left-[120%] skew-x-[-20deg]"></span>
                    <span className="relative z-10 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent text-xs sm:text-sm md:text-base font-bold font-space-grotesk tracking-wide">
                      Browse 612 Entry-level jobs
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Daily Workflow Overview Card */}
            <div className="rounded-[16px] bg-[#1B1E1B] p-4 md:p-[20px] border border-[#232722] text-[#E6E6E6] space-y-4">
              <h2 className="text-lg md:text-[22px] font-bold font-space-grotesk tracking-tight leading-snug">
                A typical day at work
              </h2>
              <div className="space-y-3">
                {workDayData.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-xl bg-[#141614] border border-[#222521] sm:bg-transparent sm:border-0 sm:p-0">
                    <div className="text-xs sm:text-[14px] text-[#A4A6A4] font-space-grotesk flex items-center gap-1.5 flex-shrink-0 bg-[#1D201C] sm:bg-transparent px-2.5 py-1.5 rounded-md sm:p-0 w-fit">
                      <img className="w-4 h-4" src={item.icon} alt="clock-icon" />
                      <span className="font-medium tracking-wide">{item.time}</span>
                    </div>
                    <div className="text-sm sm:text-[14px] text-[#FFFFFF] font-space-grotesk leading-relaxed flex-1 pl-0.5 sm:pl-0">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Designers Layout Block */}
            <div className="w-full rounded-[16px] bg-[#1B1E1B] border border-[#232722] p-4 md:p-[20px] space-y-4">
              <h2 className="text-lg md:text-[24px] font-bold text-white font-space-grotesk tracking-tight">
                Popular Product Designers in the US
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {popularDesigners.map((designer, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-xl border border-[#283122] bg-[#1B1D1A] p-3 w-full min-w-0 transition-transform duration-200 hover:scale-[1.01]">
                    <img src={designer.image} alt={designer.name} className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-2 ring-[#2e3728]" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white font-space-grotesk tracking-tight truncate">
                        {designer.name}
                      </p>
                      <p className="text-xs text-[#A4A6A4] font-space-grotesk truncate">
                        {designer.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Path Recommendations Section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-[32px] font-space-grotesk font-bold mt-4 tracking-tight">
                Career paths Recommended by Flex
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] w-full mx-auto">
                {roles.slice(0, 2).map((role) => (
                  <div key={role.id} className="p-4 md:p-[20px] rounded-[16px] shadow-xl w-full flex flex-col justify-between border border-[rgba(0,0,0,0.05)]" style={{ backgroundColor: role.cardBg }} >
                    <div>
                      <h1 className="font-space-grotesk text-[#0E0F0C] font-bold pb-4 text-xl md:text-[32px] text-center leading-tight">
                        {role.title}
                      </h1>

                      <div className="flex gap-3 mb-4">
                        <div className="p-3 rounded-lg w-1/2 text-center flex flex-col justify-center min-w-0" style={{ backgroundColor: role.boxBg }} >
                          <p className="font-space-grotesk text-[#3A3328] text-xs font-medium">Yearly Salary</p>
                          <p className="font-space-grotesk text-[#3A3328] font-bold text-base sm:text-lg lg:text-[24px] truncate mt-0.5">
                            💰 {role.salary}
                          </p>
                        </div>
                        <div className="p-3 rounded-lg w-1/2 text-center flex flex-col justify-center min-w-0" style={{ backgroundColor: role.boxBg }} >
                          <p className="font-space-grotesk text-[#3A3328] text-xs font-medium">Vibe Check</p>
                          <p className="font-space-grotesk text-[#3A3328] font-bold text-base sm:text-lg lg:text-[24px] truncate mt-0.5">
                            ✅ {role.vibe}
                          </p>
                        </div>
                      </div>

                      <p className="font-space-grotesk text-[#3A3328] text-sm leading-relaxed mb-4">
                        {role.description}
                      </p>

                      <h4 className="font-space-grotesk text-[#3A3328] text-base font-semibold mb-2">
                        Required Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {role.skills?.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full border border-[#CEC4B3] text-[#3A3328] font-space-grotesk text-xs bg-opacity-60"
                            style={{ backgroundColor: role.cardBg1 }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/careerdetails/${role.id}`)}
                      className="group relative flex w-full min-h-[48px] items-center justify-center overflow-hidden rounded-full border-[2px] border-[#75E07D] bg-[#21231D] py-2.5 md:py-3 transition-all duration-300 hover:scale-[1.01] active:scale-95"
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      <span className="relative z-10 font-space-grotesk font-bold text-sm bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent transition-all duration-500 group-hover:text-[#21231D] group-hover:bg-none">
                        Discover Path
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Widget */}
          <div className="w-full lg:w-[362px] bg-[#10130F] rounded-xl p-5 md:p-[24px] border border-[#587E40] flex-shrink-0 order-2 lg:order-2 space-y-5">
            <h2 className="font-space-grotesk font-bold text-2xl sm:text-3xl lg:text-[32px] leading-tight">
              <span className="bg-gradient-to-r from-[#9FE870] to-[#15CF9D] bg-clip-text text-transparent tracking-[-0.015em]">
                Ready to earn $180k a year?
              </span>
              <span className="ml-1">🤑</span>
            </h2>

            <div className="space-y-2.5 py-1">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5 flex-shrink-0" src={checkcircle} alt="checkmark" />
                <p className="text-base sm:text-[18px] font-medium font-space-grotesk tracking-tight">Easy Entry</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-5 h-5 flex-shrink-0" src={checkcircle} alt="checkmark" />
                <p className="text-base sm:text-[18px] font-medium font-space-grotesk tracking-tight">You might already have 3 skills</p>
              </div>
            </div>

            <button
              onClick={() => navigate("/learningpath")}
              className="group relative rounded-full w-full overflow-hidden p-[2px] bg-gradient-to-r from-[#9FE870] to-[#15CF9D] transition-all duration-300 ease-out hover:-translate-y-[2px] active:opacity-75 outline-none block"
            >
              <span className="relative block overflow-hidden rounded-full bg-gradient-to-r from-[#9FE870] to-[#15CF9D] px-6 py-3.5 text-center transition-colors duration-300">
                <span className="absolute top-0 -left-[100%] h-full w-[15px] bg-white opacity-40 shadow-[0_0_20px_10px_rgba(255,255,255,0.3)] transition-all duration-700 ease-in-out group-hover:left-[120%] skew-x-[-20deg]"></span>
                <span className="relative z-10 text-base text-[#163300] font-space-grotesk font-bold">
                  Start your Journey
                </span>
              </span>
            </button>

            <div className="pt-2 border-t border-[#1C2417]">
              <p className="font-space-grotesk tracking-tight text-sm font-semibold text-[#A4A6A4] mb-3">Your Path to Success:</p>
              <ul className="space-y-3 text-sm sm:text-[15px] text-gray-300">
                <li className="flex items-center gap-2.5 font-space-grotesk text-base">
                  <span>😎</span> <span>Master advanced skills</span>
                </li>
                <li className="flex items-center gap-2.5 font-space-grotesk text-base">
                  <span>📚</span> <span>Learn the fundamentals</span>
                </li>
                <li className="flex items-center gap-2.5 font-space-grotesk text-base">
                  <span>📄</span> <span>Create your CV</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 
          AI WIDGET
          Called directly. The Ai component will handle its absolute positioning.
        */}
        <Ai />

      </div>
    </>
  );
}