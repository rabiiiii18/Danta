import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-5 relative">
      <div className="flex flex-col md:flex-row lg:items-center justify-center md:gap-20 w-full md:w-auto">
        <h1
          onClick={() => navigate("/")}
          className="text-4xl text-[#004149] cursor-pointer mb-4 md:mb-0 lg:block  "
        >
          DANTA
        </h1>

        {/* Mobile menu button */}
        <div className="md:hidden absolute right-4 top-6">
          <button onClick={toggleMobileMenu} className="text-[#004149] text-2xl">
            <Menu size={40} />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 items-center">
          <Link to="/" className="text-[17px] font-normal">Home</Link>
          <Link to="/about-us" className="text-[17px] font-normal">About Us</Link>
          <Link to="/service" className="text-[17px] font-normal">Service</Link>
          <Link to="/team" className="text-[17px] font-normal">Team</Link>
          <Link to="/contact" className="text-[17px] font-normal">Contact</Link>
        </div>
      </div>

      {/* Desktop button */}
      <div className="hidden md:block">
        <button
          onClick={() => navigate("/appointment")}
          className="px-6 py-3 text-[16px] leading-4 bg-[#004149] text-white rounded-md hover:bg-black transition-all duration-300 cursor-pointer"
        >
          Appointment Now
        </button>
      </div>

      {/* Mobile menu (shown conditionally) */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full mt-4">
          <div className="flex flex-col gap-4 items-center">
            <Link to="/" className="text-[17px] font-normal w-full text-center py-2" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about-us" className="text-[17px] font-normal w-full text-center py-2" onClick={toggleMobileMenu}>About Us</Link>
            <Link to="/service" className="text-[17px] font-normal w-full text-center py-2" onClick={toggleMobileMenu}>Service</Link>
            <Link to="/team" className="text-[17px] font-normal w-full text-center py-2" onClick={toggleMobileMenu}>Team</Link>
            <Link to="/contact" className="text-[17px] font-normal w-full text-center py-2" onClick={toggleMobileMenu}>Contact</Link>
            <button
              onClick={() => {
                navigate("/appointment");
                toggleMobileMenu();
              }}
              className="px-6 py-3 text-[16px] leading-4 bg-[#004149] text-white rounded-md hover:bg-black transition-all duration-300 cursor-pointer w-full"
            >
              Appointment Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
