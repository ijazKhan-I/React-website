



// function OurStory() {

//     return (
//         <>
//             <div  className="bg-[#03071e] flex flex-col-1 items items-center">
//                 <div>
//                     <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>


                    
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                     </div>
//                     <div>
//                         <div>
//                             <h2 className="text-3xl md:text-4xl font-bold"> Our Vision</h2>
                           
//                             To be the global leader in integrated development and AI solutions, recognized for innovation, quality, and the transformative impact we create for our clients.

//                         </div>
//                         <div>
//                            <h2 className="text-3xl md:text-4xl font-bold"> Our Mission</h2>
//                     To empower businesses with technology that scales and intelligence that learns, creating digital solutions that drive measurable impact and sustainable growth.

//                         </div>

//                     </div>
                
//             </div>

//         </>
//     )
// }

// export default OurStory;

import { motion } from "motion/react";
import { Medal, TrendingUp } from "lucide-react";

export default function OurStory() {
  return (
    <section className="w-full bg-[#020617] text-slate-200 py-12 md:py-16 lg:py-20 flex items-center justify-center">
      <div className="w-full max-w-[1440px] lg:h-[689px] mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left Column: Our Story */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Our Story
          </h2>
          
          <div className="space-y-4 sm:space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg opacity-90">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting. 
            </p>
          </div>
        </motion.div>

        {/* Right Column: Mission & Vision Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative lg:ml-auto w-full max-w-xl"
        >
          {/* Subtle glow effect behind the card */}
          <div className="absolute -inset-10 bg-indigo-500/5 blur-[100px] rounded-full" />
          
          <div className="relative bg-[#070d1f] border border-white/5 rounded-[40px] p-8 md:p-12 lg:p-16 space-y-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
            
            {/* Mission Section */}
            <div className="space-y-4 sm:space-y-5">
              <div className="text-purple-500 mb-4">
                <Medal size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white tracking-tight">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base md:text-lg">
                To empower businesses with technology that scales and intelligence that learns, 
                creating digital solutions that drive measurable impact and sustainable growth.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-4 sm:space-y-5">
              <div className="text-cyan-400 mb-4">
                <TrendingUp size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white tracking-tight">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base md:text-lg">
                To be the global leader in integrated development and AI solutions, 
                recognized for innovation, quality, and the transformative impact we create for our clients.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}