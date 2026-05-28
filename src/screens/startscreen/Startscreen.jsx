import "../../index.css";
import Logo from '../../assests/Logo.svg';

function Startscreen({ goTo }) {
    return (
        <div className="background min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">

            {/* Logo */}
            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-full shadow-neon-green">
                <img
                    className="w-full h-full object-contain rounded-full"
                    src={Logo}
                    alt="Company Logo"
                />
            </div>

            {/* Heading */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl pt-4 tracking-tight font-space-grotesk">
                Hi! I am Flex
            </h1>

            {/* Description */}
            <p className="text-white/70 text-base sm:text-lg md:text-xl pt-2 pb-6 max-w-xs sm:max-w-md md:max-w-lg font-space-grotesk">
                I am here to help you find a career path that matches your vibe 😎
            </p>

            {/* Button */}
            <button
                onClick={() => goTo("Email")}
                className="w-full sm:w-auto text-sm sm:text-base text-[#163300] font-semibold px-6 sm:px-10 py-3 rounded-full font-space-grotesk bg-[linear-gradient(90deg,#7BC85A_0%,#10A87C_100%)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(0,255,120,0.25)] hover:bg-[linear-gradient(90deg,#8FEA6F_0%,#14C798_100%)]"
            >
                Let’s kick things off!
            </button>
        </div>
    );
}

export default Startscreen;