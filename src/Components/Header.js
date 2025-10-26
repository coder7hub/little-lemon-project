import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import { useState } from "react";

function Header() {

  const [burger, setBurger] = useState(false);

  return (
    <header className=" flex flex-row justify-between px-[20px] py-[32px] md:px-[288px] md:py-[32px]">
      <img src={logo} alt="Logo" className="w-[148px] h-[40px] p-1 md:p-0 font-[fontfamily]" />
      <nav>
         <button
            className="md:hidden text-3xl focus:outline-none text-[23px] cursor-pointer "
            onClick={() => setBurger(!burger)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        <ul
            className={`flex flex-col  md:flex-row space-x-[16px] md:flex md:flex-row md:space-x-6
              ${
                burger ? "  absolute top-26 right-[1px] bg-[#f5f5f5]  px-5 py-10 rounded-[16px]" : "hidden"
              } md:flex`}
          >
         
           <li> <Link to="/" className='font-medium  text-xl hover:text-[#495e57]'>Home</Link></li>
           <li><a href="#about" className='font-medium  text-xl hover:text-[#495e57]'>About</a></li>
           <li><a href="#menu" className='font-medium  text-xl hover:text-[#495e57]'>Menu</a></li>
           <li> <Link to="Reservation" className='font-medium  text-xl hover:text-[#495e57]'>Reservation</Link></li>
           <li><a href="#Order Online" className='font-medium  text-xl hover:text-[#495e57]'>Order Online</a></li>
           <li><a href="#Login" className='font-medium  text-xl hover:text-[#495e57]'>Login</a></li>

       </ul>
      </nav>
    </header>
  );
}

export default Header;
