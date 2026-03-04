// import React from "react";
// import CoreValueCard from "../Ui/CoverValueCard";
// import { AiOutlineAim } from "react-icons/ai"; // for Excellence icon
// import { AiOutlineHeart } from "react-icons/ai"; // for Client-Focused icon
// import { AiOutlineBulb } from "react-icons/ai"; // for Innovation icon
// import { AiOutlineTeam } from "react-icons/ai"; // for Collaboration icon

// const CoreValuesSection: React.FC = () => {
//   return (
//     <section className="bg-[#03071e] py-20 px-8 flex flex-col items-center">
//       <h2 className="text-3xl font-bold text-white mb-2">Core Values</h2>
//       <p className="text-sm text-gray-400 mb-12">
//         The principles that guide everything we do
//       </p>

//       <div className="flex gap-8 flex-wrap justify-center">
//         <CoreValueCard
//           icon={<AiOutlineAim />}
//           title="Excellence"
//           description="We pursue the highest standards in every line of code and every model we train."
//         />
//         <CoreValueCard
//           icon={<AiOutlineHeart />}
//           title="Client-Focused"
//           description="Your success is our success. We build lasting partnerships through delivered value."
//           highlighted
//         />
//         <CoreValueCard
//           icon={<AiOutlineBulb />}
//           title="Innovation"
//           description="Continuously exploring new technologies and approaches to solve complex problems."
//           highlighted
//         />
//         <CoreValueCard
//           icon={<AiOutlineTeam />}
//           title="Collaboration"
//           description="Fostering teamwork within our teams and with our clients for optimal results."
//         />
//       </div>
//     </section>
//   );
// };

// export default CoreValuesSection;

import { motion } from "motion/react";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in every line of code and every model we train.",
    icon: Target,
    color: "slate",
  },
  {
    title: "Client-Focused",
    description: "Your success is our success. We build lasting partnerships through delivered value.",
    icon: Heart,
    color: "cyan",
  },
  {
    title: "Innovation",
    description: "Continuously exploring new technologies and approaches to solve complex problems.",
    icon: Lightbulb,
    color: "cyan",
  },
  {
    title: "Collaboration",
    description: "Fostering teamwork within our teams and with our clients for optimal results.",
    icon: Users,
    color: "slate",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#070d1f] text-slate-200 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Animated Connecting Lines (Desktop Only) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Main Horizontal Line from Center */}
          <motion.path
            d="M 600 200 L 150 200"
            stroke="url(#lineGradientHorizontalLeft)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M 600 200 L 1050 200"
            stroke="url(#lineGradientHorizontalRight)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* Vertical lines dropping to each card */}
          {[150, 450, 750, 1050].map((x, i) => (
            <motion.path
              key={i}
              d={`M ${x} 200 L ${x} 480`}
              stroke="url(#lineGradientVerticalDown)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.1, ease: "easeIn" }}
              viewport={{ once: true }}
            />
          ))}
          
          <defs>
            <linearGradient id="lineGradientHorizontalLeft" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="lineGradientHorizontalRight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="lineGradientVerticalDown" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="relative bg-[##070d1f] inline-block px-12 z-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Core Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`
                relative group flex flex-col items-center text-center p-10 
                rounded-[40px] border transition-all duration-500
                ${value.color === 'cyan' 
                  ? 'border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]' 
                  : 'border-white/10 bg-white/5 shadow-xl'}
                hover:bg-white/10 hover:border-white/20
              `}
            >
              {/* Connection Point (Visual Only) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 blur-[1px] hidden lg:block" />

              {/* Icon Container */}
              <div className={`
                mb-8 p-4 rounded-full 
                ${value.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-white/10 text-white'}
                transition-transform duration-500 group-hover:scale-110
              `}>
                <value.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {value.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {value.description}
              </p>

              {/* Subtle bottom glow for cyan cards */}
              {value.color === 'cyan' && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-cyan-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}