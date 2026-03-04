// const timelineItems = [
//   {
//     title: "Development Excellence",
//     description:
//       "Building scalable, performant applications with modern frameworks and best practices.",
//   },
//   {
//     title: "AI Innovation",
//     description:
//       "Leveraging machine learning and deep learning to solve complex real-world problems.",
//   },
//   {
//     title: "Rapid Deployment",
//     description:
//       "Agile methodologies and DevOps practices for fast, reliable delivery.",
//   },
//   {
//     title: "Enterprise Security",
//     description:
//       "Industry-leading security practices to protect your data and infrastructure.",
//   },
//   {
//     title: "Result-Driven",
//     description:
//       "Focused on measurable outcomes and business impact from every project.",
//   },
//   {
//     title: "Expert Team",
//     description:
//       "Seasoned professionals in software engineering and artificial intelligence.",
//   },
// ];

// const Timeline = () => {
//   return (
//     <section className="bg-[#060d1f] py-20 text-white">
//       <div className="w-full w-9xl mx-auto px-">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Our Journey
//           </h2>
//           <p className="text-gray-400 mt-3">
//             Innovation, expertise, and measurable results at every step
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Vertical Gradient Line */}
//           <div className="absolute left-6 top-0 h-full w-1 
//                           bg-gradient-to-b from-cyan-400 via-purple-500 to-sky-400 
//                           rounded-full"></div>

//                           <div className="w-6xl grid gap-4 itmes items-center">
//             {timelineItems.map((item, index) => (
//               <div key={index} className="relative pl-20 group">

//                 {/* Dot */}
//                 <div className="absolute left-0 top-3 w-6 h-6 
//                                 rounded-full 
//                                 bg-gradient-to-br from-cyan-400 to-purple-500 
//                                 shadow-lg shadow-cyan-500/30 
//                                 group-hover:scale-110 
//                                 transition duration-300">
//                 </div>

//                 {/* Content Card */}
//                 <div className="bg-[#0d162b] p-8 rounded-xl 
//                                 border border-gray-800
//                                 hover:border-cyan-400 
//                                 transition duration-300
//                                 shadow-lg hover:shadow-cyan-500/20">
//                   <h3 className="text-2xl font-semibold mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>


//                           </div>


//     </section>
//   );
// };

// export default Timeline;


import { motion } from "motion/react";

const milestones = [
  {
    year: "2019",
    description: "Lorem Ipsum is simply dummy text of the printing",
    tag: "Lorem Ipsum",
  },
  {
    year: "2021",
    description: "Lorem Ipsum is simply dummy text of the printing",
    tag: "Lorem Ipsum",
  },
  {
    year: "2023",
    description: "Lorem Ipsum is simply dummy text of the printing",
    tag: "Lorem Ipsum",
  },
  {
    year: "2025",
    description: "Lorem Ipsum is simply dummy text of the printing",
    tag: "Lorem Ipsum",
  },
  {
    year: "2016",
    description: "Lorem Ipsum is simply dummy text of the printing",
    tag: "Lorem Ipsum",
  },
];

export default function OurJourney() {
  return (
    <section className="bg-[#020617] text-slate-200 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Our Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Key milestones in our growth and evolution
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-50" />

          {/* Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-16 md:pl-32">
                
                {/* Glowing Dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-[11px] md:left-[43px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,1)] z-10 border-2 border-[#020617]"
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0f1e] border border-white/5 rounded-xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/10 transition-all duration-300 group shadow-2xl"
                >
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {milestone.year}
                    </h3>
                    <p className="text-slate-400 text-lg">
                      {milestone.description}
                    </p>
                  </div>

                  <button className="self-start md:self-center px-10 py-2.5 rounded-full border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all whitespace-nowrap">
                    {milestone.tag}
                  </button>
                </motion.div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}