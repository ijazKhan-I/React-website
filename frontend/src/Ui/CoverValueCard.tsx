import React from "react";

type CoreValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
};

const CoreValueCard: React.FC<CoreValueCardProps> = ({
  icon,
  title,
  description,
  highlighted = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-8 rounded-xl border
      ${
        highlighted
          ? "border-cyan-500 bg-[#020617]  hover:shadow-[0_0_20px_rgba(14,165,233,0.7)]"
          : "border-gray-500 bg-transparent"
      } w-64 min-h-[280px]`}
    >
      <div
        className={`text-3xl mb-4 rounded-full p-4 ${
          highlighted ? "bg-cyan-500 text-black" : "bg-[#020617] text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      <p className="text-xs font-medium text-gray-300">{description}</p>
    </div>
  );
};

export default CoreValueCard;




// import { motion } from "motion/react";
// import { Target, Heart, Lightbulb, Users } from "lucide-react";

// const values = [
//   {
//     title: "Excellence",
//     description: "We pursue the highest standards in every line of code and every model we train.",
//     icon: Target,
//     color: "slate",
//   },
//   {
//     title: "Client-Focused",
//     description: "Your success is our success. We build lasting partnerships through delivered value.",
//     icon: Heart,
//     color: "cyan",
//   },
//   {
//     title: "Innovation",
//     description: "Continuously exploring new technologies and approaches to solve complex problems.",
//     icon: Lightbulb,
//     color: "cyan",
//   },
//   {
//     title: "Collaboration",
//     description: "Fostering teamwork within our teams and with our clients for optimal results.",
//     icon: Users,
//     color: "slate",
//   },
// ];

// export default function CoreValues() {
//   return (
//     <section className="bg-[#020617] text-slate-200 py-24 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-24 relative">
//           <motion.div 
//             initial={{ opacity: 0, width: 0 }}
//             whileInView={{ opacity: 1, width: '100%' }}
//             transition={{ duration: 1, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block"
//           />
//           <div className="relative bg-[#020617] inline-block px-12">
//             <motion.h2 
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
//             >
//               Core Values
//             </motion.h2>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
//             >
//               The principles that guide everything we do
//             </motion.p>
//           </div>
//         </div>

//         {/* Values Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((value, index) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className={`
//                 relative group flex flex-col items-center text-center p-10 
//                 rounded-[40px] border transition-all duration-300
//                 ${value.color === 'cyan' 
//                   ? 'border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_30px_-10px_rgba(6,182,212,0.1)]' 
//                   : 'border-white/10 bg-white/5 shadow-xl'}
//                 hover:bg-white/10 hover:border-white/20
//               `}
//             >
//               {/* Icon Container */}
//               <div className={`
//                 mb-8 p-4 rounded-full 
//                 ${value.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-white/10 text-white'}
//                 transition-transform duration-300 group-hover:scale-110
//               `}>
//                 <value.icon size={32} strokeWidth={1.5} />
//               </div>

//               {/* Content */}
//               <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
//                 {value.title}
//               </h3>
//               <p className="text-slate-400 leading-relaxed">
//                 {value.description}
//               </p>

//               {/* Subtle bottom glow for cyan cards */}
//               {value.color === 'cyan' && (
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-cyan-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
//               )}
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


//////////////////////////////////////////////////

//import { motion } from "motion/react";
// import { Target, Heart, Lightbulb, Users } from "lucide-react";

// const values = [
//   {
//     title: "Excellence",
//     description: "We pursue the highest standards in every line of code and every model we train.",
//     icon: Target,
//     color: "slate",
//   },
//   {
//     title: "Client-Focused",
//     description: "Your success is our success. We build lasting partnerships through delivered value.",
//     icon: Heart,
//     color: "cyan",
//   },
//   {
//     title: "Innovation",
//     description: "Continuously exploring new technologies and approaches to solve complex problems.",
//     icon: Lightbulb,
//     color: "cyan",
//   },
//   {
//     title: "Collaboration",
//     description: "Fostering teamwork within our teams and with our clients for optimal results.",
//     icon: Users,
//     color: "slate",
//   },
// ];

// export default function CoreValues() {
//   return (
//     <section className="bg-[#020617] text-slate-200 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
//       {/* Animated Connecting Lines (Desktop Only) */}
//       <div className="absolute inset-0 pointer-events-none hidden lg:block">
//         <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
//           {/* Line from Card 1 */}
//           <motion.path
//             d="M 150 500 C 150 400, 600 400, 600 150"
//             stroke="url(#lineGradient)"
//             strokeWidth="1"
//             initial={{ pathLength: 0, opacity: 0 }}
//             whileInView={{ pathLength: 1, opacity: 0.3 }}
//             transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
//             viewport={{ once: true }}
//           />
//           {/* Line from Card 2 */}
//           <motion.path
//             d="M 450 500 C 450 400, 600 400, 600 150"
//             stroke="url(#lineGradient)"
//             strokeWidth="1"
//             initial={{ pathLength: 0, opacity: 0 }}
//             whileInView={{ pathLength: 1, opacity: 0.3 }}
//             transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
//             viewport={{ once: true }}
//           />
//           {/* Line from Card 3 */}
//           <motion.path
//             d="M 750 500 C 750 400, 600 400, 600 150"
//             stroke="url(#lineGradient)"
//             strokeWidth="1"
//             initial={{ pathLength: 0, opacity: 0 }}
//             whileInView={{ pathLength: 1, opacity: 0.3 }}
//             transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
//             viewport={{ once: true }}
//           />
//           {/* Line from Card 4 */}
//           <motion.path
//             d="M 1050 500 C 1050 400, 600 400, 600 150"
//             stroke="url(#lineGradient)"
//             strokeWidth="1"
//             initial={{ pathLength: 0, opacity: 0 }}
//             whileInView={{ pathLength: 1, opacity: 0.3 }}
//             transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
//             viewport={{ once: true }}
//           />
          
//           <defs>
//             <linearGradient id="lineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
//               <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
//               <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
//               <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-24 relative">
//           <motion.div 
//             initial={{ opacity: 0, width: 0 }}
//             whileInView={{ opacity: 1, width: '100%' }}
//             transition={{ duration: 1, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block"
//           />
//           <div className="relative bg-[#020617] inline-block px-12">
//             <motion.h2 
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
//             >
//               Core Values
//             </motion.h2>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
//             >
//               The principles that guide everything we do
//             </motion.p>
//           </div>
//         </div>

//         {/* Values Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
//           {values.map((value, index) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className={`
//                 relative group flex flex-col items-center text-center p-10 
//                 rounded-[40px] border transition-all duration-500
//                 ${value.color === 'cyan' 
//                   ? 'border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]' 
//                   : 'border-white/10 bg-white/5 shadow-xl'}
//                 hover:bg-white/10 hover:border-white/20
//               `}
//             >
//               {/* Connection Point (Visual Only) */}
//               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 blur-[1px] hidden lg:block" />

//               {/* Icon Container */}
//               <div className={`
//                 mb-8 p-4 rounded-full 
//                 ${value.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-white/10 text-white'}
//                 transition-transform duration-500 group-hover:scale-110
//               `}>
//                 <value.icon size={32} strokeWidth={1.5} />
//               </div>

//               {/* Content */}
//               <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
//                 {value.title}
//               </h3>
//               <p className="text-slate-400 leading-relaxed">
//                 {value.description}
//               </p>

//               {/* Subtle bottom glow for cyan cards */}
//               {value.color === 'cyan' && (
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-cyan-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
//               )}
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
