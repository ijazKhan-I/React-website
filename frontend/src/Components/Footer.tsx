// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#070d1f] text-gray-300 pt-12 pb-6 ml-80 mr-80">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
//         {/* Left: Logo + Description */}
//         <div>
//           <div className="text-white font-bold text-lg mb-4">
//             inara <span className="text-accent-purple font-light">technologies</span>
//           </div>
//           <p className="text-sm leading-relaxed max-w-xs">
//             Transforming ideas into scalable products and intelligent systems.
//           </p>
//         </div>

//         {/* Middle: Quick Links */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm cursor-pointer">
//             <li className="hover:text-accent-blue">Home</li>
//             <li className="hover:text-accent-blue">About</li>
//             <li className="hover:text-accent-blue">Services</li>
//             <li className="hover:text-accent-blue">Projects</li>
//             <li className="hover:text-accent-blue">Tech Stack</li>
//             <li className="hover:text-accent-blue">Team</li>
//           </ul>
//         </div>

//         {/* Right: Contact */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
//           <ul className="space-y-2 text-sm">
//             <li>harix@gmail.com</li>
//             <li>+92 3144763488</li>
//             <li className="hover:text-accent-blue cursor-pointer">facebook.com</li>
//             <li className="hover:text-accent-blue cursor-pointer">twitter.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
//         © 2026 Inara Dev. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



//responsive

import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center">

      <div className="w-[1440px] lg:h-[468px] bg-black text-white px-16 py-12 ">

        <div className="h-full flex flex-col justify-between">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <h2 className="text-2xl font-bold">
                inara <span className="text-cyan-400 font-light">technologies</span>
              </h2>
              <p className="mt-4 text-gray-400 text-sm">
                We build scalable digital products and modern web applications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>hello@inaratech.com</li>
                <li>+91 98765 43210</li>
                <li>India</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Inara Technologies
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;