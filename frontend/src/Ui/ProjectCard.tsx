import React from "react";

/* Props Type */
interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  tech,
}) => {
  return (
    <div
      className="group
        relative
        rounded-xl p-6
        bg-[#0D374C]
        border border-white/10
        hover:shadow-xl
        transition-all duration-300
        overflow-hidden
      "
    >
      {/* White background that expands from top right */}
      <div 
        className="absolute inset-0 bg-white
          scale-0 group-hover:scale-100
          transition-transform duration-1000
          origin-top-right
          rounded-xl
          opacity-0 group-hover:opacity-100"
      />

      {/* Content - relative z-index to appear above background */}
      <div className="relative z-10">
        {/* Category Badge */}
        <span className="inline-block text-xs bg-white/20 group-hover:bg-gray-500 px-3 py-1 rounded-full border-2 border-white group-hover:border-black transition-colors duration-300">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold mt-4 text-white group-hover:text-black transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm mt-2 text-white/90 group-hover:text-black/80 transition-colors duration-300">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="inline-block text-xs px-3 py-1 rounded-full bg-white/20 group-hover:bg-gray-500 border-2 border-white group-hover:border-black transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



// // animation 
// import React from "react";


// interface ProjectCardProps {
//   category: string;
//   title: string;
//   description: string;
//   tech: string[];
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   category,
//   title,
//   description,
//   tech,
// }) => {
//   return (
//     <div
//       className="
//         relative
//         rounded-xl p-6 text-white
//         bg-gradient-to-r from-[#134e5e] to-[#0c2b3a] bg-[length:200%_100%] bg-left
//         border border-white/10
//         transition-all duration-500 ease-out
//         hover:bg-right
//         hover:shadow-2xl
//       "
//     >
//       {/* Category Badge */}
//       <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
//         {category}
//       </span>

//       {/* Title */}
//       <h3 className="text-lg font-semibold mt-4">{title}</h3>

//       {/* Description */}
//       <p className="text-gray-300 text-sm mt-2">{description}</p>

//       {/* Tech Tags */}
//       <div className="flex flex-wrap gap-2 mt-5">
//         {tech.map((item, index) => (
//           <span
//             key={index}
//             className="text-xs px-3 py-1 rounded-full bg-white/20"
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;