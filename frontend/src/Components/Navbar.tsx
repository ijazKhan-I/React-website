// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-primary text-white shadow-md sticky top-0 z-50 ml-80 mr-80 h-20 text-center ">
      
//       {/* Centered Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div className="text-xl font-bold tracking-wide cursor-pointer">
//             inara{" "}
//             <span className="text-accent-purple font-light">
//               technologies
//             </span>
//           </div>

//           {/* Links */}
//           <ul className="hidden md:flex items-center gap-6 font-medium text-sm">
//             <li className="hover:text-accent-blue cursor-pointer">Home</li>
//             <li className="hover:text-accent-blue cursor-pointer">About</li>
//             <li className="hover:text-accent-blue cursor-pointer">Services</li>
//             <li className="hover:text-accent-blue cursor-pointer">Projects</li>
//             <li className="hover:text-accent-blue cursor-pointer">Tech Stack</li>
//             <li className="hover:text-accent-blue cursor-pointer">Process</li>
//             <li className="hover:text-accent-blue cursor-pointer">Team</li>
//             <li className="hover:text-accent-blue cursor-pointer">Contact</li>
//           </ul>

//           {/* Button */}
//           <button className="  bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
//             Start Project
//           </button>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import inara_logo from "../assets/inara_logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Process", path: "/process" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[120px] z-50 bg-black/40 backdrop-blur-md bg-black/30 backdrop-invert backdrop-opacity-10">

      {/* Inner Content */}
      <div className="h-full px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-full">

        {/* Logo */}
<div className="flex items-center cursor-pointer select-none">
  <img src={inara_logo} alt="Logo" className="h-16 sm:h-20 w-auto" />
  {/* Optional: Brand Name */}
  {/* <span className="ml-2 text-xl font-bold text-white">Brand</span> */}
</div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 font-medium text-sm text-white select-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`hover:text-cyan-400 transition ${
                    isActive(link.path)
                      ? "font-semibold underline text-cyan-400"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-600 transition">
            Start Project
          </button>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? (
                <HiX className="w-7 h-7" />
              ) : (
                <HiMenu className="w-7 h-7" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[120px] left-0 w-full bg-black/80 backdrop-blur-md px-6 py-6 space-y-4 text-white rounded-b-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block hover:text-cyan-400 transition ${
                isActive(link.path)
                  ? "font-semibold underline text-cyan-400"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button className="w-full bg-cyan-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-cyan-600 transition mt-4">
            Start Project
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;