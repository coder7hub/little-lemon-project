import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [burger, setBurger] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setBurger(false);
      }
    };
    if (burger) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [burger]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-[12px] sm:px-[20px] py-[16px] sm:py-[24px] md:px-[288px] md:py-[32px] shadow-sm">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-[120px] sm:w-[140px] md:w-[148px] h-auto p-1 md:p-0"
      />

      <nav>
        {/* Burger Icon (mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none text-[23px] cursor-pointer"
          onClick={() => setBurger(true)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center space-x-[10px] sm:space-x-[16px] md:space-x-6">
          <li>
            <Link to="/" className="font-medium text-base md:text-xl hover:text-[#495e57]">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="font-medium text-base md:text-xl hover:text-[#495e57]">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="font-medium text-base md:text-xl hover:text-[#495e57]">
              Menu
            </a>
          </li>
          <li>
            <Link
              to="Reservation"
              className="font-medium text-base md:text-xl hover:text-[#495e57]"
            >
              Reservation
            </Link>
          </li>
          <li>
            <a href="#Order Online" className="font-medium text-base md:text-xl hover:text-[#495e57]">
              Order Online
            </a>
          </li>
          <li>
            <a href="#Login" className="font-medium text-base md:text-xl hover:text-[#495e57]">
              Login
            </a>
          </li>
        </ul>

        {/* Mobile Menu (Slide-in from Right) */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-[75%] sm:w-[65%] bg-[#f5f5f5] shadow-lg rounded-l-[16px] transform transition-transform duration-300 ease-in-out ${
            burger ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4 sm:p-5">
            <button
              onClick={() => setBurger(false)}
              className="text-3xl focus:outline-none"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col items-start space-y-5 sm:space-y-6 px-6 sm:px-8 mt-4 sm:mt-8">
            <li>
              <Link
                to="/"
                onClick={() => setBurger(false)}
                className="font-medium text-lg sm:text-xl hover:text-[#495e57]"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setBurger(false)}
                className="font-medium text-lg sm:text-xl hover:text-[#495e57]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={() => setBurger(false)}
                className="font-medium text-lg sm:text-xl hover:text-[#495e57]"
              >
                Menu
              </a>
            </li>
            <li>
              <Link
                to="Reservation"
                onClick={() => setBurger(false)}
                className="font-medium text-lg sm:text-xl hover:text-[#495e57]"
              >
                Reservation
              </Link>
            </li>
            <li>
              <a
                href="#Order Online"
                onClick={() => setBurger(false)}
                className="font-medium text-lg sm:text-xl hover:text-[#495e57]"
              >
                Order Online
              </a>
            </li>
            <li>
              <a
                href="#Login"
                onClick={() => setBurger(false)}
                className="font-medium text-lg sm:text-xl hover:text-[#495e57]"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
