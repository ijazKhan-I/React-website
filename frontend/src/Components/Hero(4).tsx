import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Brain, Database, Users, Briefcase, Globe, Smile } from "lucide-react";
import development_pic from "../assets/development_pic.png";
import code_pic from "../assets/code_pic.png";

const slides = [
  {
    id: 1,
    titleWhite: "Synthesizing",
    titleCyan: "Code & Intellect",
    description:
      "Architecture that scales. Models that think. We merge high-performance engineering with cognitive AI to build what's next.",
    btn1: "Get Started",
    btn2: "View Projects",
    image: development_pic,
  },
  {
    id: 2,
    titleWhite: "Innovation Meets",
    titleCyan: "Technology",
    description:
      "Transforming ideas into scalable products and intelligent systems. Expert development and AI solutions for the modern digital landscape.",
    btn1: "View Team",
    btn2: "Contact Us",
    image: code_pic,
  },
];

const stats = [
  { value: "15+", label: "Projects delivered", icon: Briefcase },
  { value: "18", label: "Team Members", icon: Users },
  { value: "10", label: "Industries Served", icon: Globe },
  { value: "97%", label: "Client Satisfaction", icon: Smile },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsRevealed, setStatsRevealed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen mt-20 bg-[#020617] overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="flex-grow flex items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content Side */}
          <div className="relative z-10">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">

              {/* Titles */}
              <div className="relative min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[260px] overflow-hidden">
                <AnimatePresence>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold tracking-tight leading-tight">
                      <span className="text-white block">{slides[currentSlide].titleWhite}</span>
                      <span className="text-cyan-400 block">{slides[currentSlide].titleCyan}</span>
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <div className="relative min-h-[120px] sm:min-h-[140px] md:min-h-[160px] overflow-hidden">
                <AnimatePresence>
                  <motion.p
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                    className="absolute inset-0 text-slate-400 text-base sm:text-lg md:text-xl max-w-full sm:max-w-md md:max-w-lg leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="relative bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center justify-center gap-2 transition-all group w-full sm:w-auto min-w-[140px] sm:min-w-[180px] md:min-w-[200px] h-[50px] sm:h-[55px] md:h-[60px] overflow-hidden">
                  <AnimatePresence>
                    <motion.span
                      key={currentSlide + "-btn1"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center gap-2"
                    >
                      {slides[currentSlide].btn1}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </motion.span>
                  </AnimatePresence>
                </button>

                <button className="relative border border-slate-700 hover:border-slate-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg bg-slate-800/50 backdrop-blur-sm transition-all w-full sm:w-auto min-w-[140px] sm:min-w-[180px] md:min-w-[200px] h-[50px] sm:h-[55px] md:h-[60px] overflow-hidden">
                  <AnimatePresence>
                    <motion.span
                      key={currentSlide + "-btn2"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {slides[currentSlide].btn2}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <AnimatePresence>
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide].image}
                  alt="Hero Visual"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 z-10" />
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 shadow-lg z-20"
            >
              <Brain size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 shadow-lg z-20"
            >
              <Database size={28} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="relative z-20 py-12 sm:py-16 md:py-20 cursor-default"
        onMouseEnter={() => setStatsRevealed(true)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="py-6 sm:py-8 md:py-10 px-4">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{
                    y: statsRevealed ? 0 : -100,
                    opacity: statsRevealed ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="space-y-3"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8b5cf6] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-[#8b5cf6]/60 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;








/////////////////////////////////////////////////////
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { ArrowRight, Brain, Database, Users, Briefcase, Globe, Smile } from "lucide-react";
// import development_pic from "../assets/development_pic.png";
// import code_pic from "../assets/code_pic.png";

// const slides = [
//   {
//     id: 1,
//     titleWhite: "Synthesizing",
//     titleCyan: "Code & Intellect",
//     description:
//       "Architecture that scales. Models that think. We merge high-performance engineering with cognitive AI to build what's next.",
//     btn1: "Get Started",
//     btn2: "View Projects",
//     image: development_pic,
//   },
//   {
//     id: 2,
//     titleWhite: "Innovation Meets",
//     titleCyan: "Technology",
//     description:
//       "Transforming ideas into scalable products and intelligent systems. Expert development and AI solutions for the modern digital landscape.",
//     btn1: "View Team",
//     btn2: "Contact Us",
//     image: code_pic,
//   },
// ];

// const stats = [
//   { value: "15+", label: "Projects delivered", icon: Briefcase },
//   { value: "18", label: "Team Members", icon: Users },
//   { value: "10", label: "Industries Served", icon: Globe },
//   { value: "97%", label: "Client Satisfaction", icon: Smile },
// ];

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [statsRevealed, setStatsRevealed] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-[#020617] overflow-hidden flex flex-col">
//       {/* Background Glows */}
//       <div className="absolute -top-1/4 -left-1/4 w-2/5 h-2/5 bg-indigo-500/10 blur-[120px] rounded-full" />
//       <div className="absolute -bottom-1/4 -right-1/4 w-2/5 h-2/5 bg-cyan-500/10 blur-[120px] rounded-full" />

//       <div className="flex-grow flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 pt-20 gap-8 lg:gap-20">
//         {/* Content Side */}
//         <div className="relative z-10 w-full lg:w-5/12 flex-shrink-0 text-center lg:text-left">
//           {/* Titles Container with fixed min-height to prevent layout shift */}
//           <div className="relative min-h-[180px] md:min-h-[220px] lg:min-h-[260px] space-y-4">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
//                   <motion.span
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-white inline"
//                   >
//                     {slides[currentSlide].titleWhite}{" "}
//                   </motion.span>
//                   <motion.span
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     className="text-cyan-400 inline"
//                   >
//                     {slides[currentSlide].titleCyan}
//                   </motion.span>
//                 </h1>

//                 <motion.p
//                   initial={{ y: 10, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="text-slate-400 text-base sm:text-lg md:text-xl max-w-full md:max-w-lg leading-relaxed mt-4"
//                 >
//                   {slides[currentSlide].description}
//                 </motion.p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Buttons Container (won’t move) */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
//             <button className="relative bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center gap-2 transition-all group min-w-[150px] sm:min-w-[200px] h-[50px] sm:h-[60px] overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={slides[currentSlide].btn1}
//                   initial={{ y: 10, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -10, opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0 flex items-center justify-center gap-2"
//                 >
//                   {slides[currentSlide].btn1}
//                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                 </motion.span>
//               </AnimatePresence>
//             </button>

//             <button className="relative border border-slate-700 hover:border-slate-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg bg-slate-800/50 backdrop-blur-sm transition-all min-w-[150px] sm:min-w-[200px] h-[50px] sm:h-[60px] overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={slides[currentSlide].btn2}
//                   initial={{ y: 10, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -10, opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0 flex items-center justify-center"
//                 >
//                   {slides[currentSlide].btn2}
//                 </motion.span>
//               </AnimatePresence>
//             </button>
//           </div>
//         </div>

//         {/* Image Side */}
//         <div className="relative w-full lg:w-7/12 flex-shrink-0 flex justify-center items-center mt-12 lg:mt-0">
//           <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square rounded-[30px] sm:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={slides[currentSlide].image}
//                 src={slides[currentSlide].image}
//                 alt="Hero Visual"
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 0.8, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </AnimatePresence>
//             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 z-10" />
//           </div>

//           {/* Floating Icons */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -top-6 -right-6 w-12 sm:w-16 h-12 sm:h-16 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 shadow-lg z-20"
//           >
//             <Brain size={28} />
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//             className="absolute -bottom-6 -left-6 w-12 sm:w-16 h-12 sm:h-16 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 shadow-lg z-20"
//           >
//             <Database size={28} />
//           </motion.div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="relative z-20 py-12 sm:py-16 cursor-default" onMouseEnter={() => setStatsRevealed(true)}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0">
//             {stats.map((stat, index) => (
//               <div key={index} className="relative text-center py-6 sm:py-8 overflow-hidden">
//                 <motion.div
//                   initial={{ y: -80, opacity: 0 }}
//                   animate={{ y: statsRevealed ? 0 : -80, opacity: statsRevealed ? 1 : 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
//                   className="relative z-10 space-y-2 sm:space-y-4"
//                 >
//                   <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8b5cf6] tracking-tight">{stat.value}</div>
//                   <div className="text-[#8b5cf6]/60 text-sm sm:text-base md:text-lg font-medium tracking-wide">{stat.label}</div>
//                 </motion.div>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: statsRevealed ? "60%" : 0 }}
//                   transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
//                   className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[1px] bg-[#8b5cf6]/20"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;