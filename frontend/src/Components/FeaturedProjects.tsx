// // import React from "react";
// // import ProjectCard from "../Ui/ProjectCard";
// // const projects = [
// //   {
// //     category: "Development",
// //     title: "E-Commerce Platform",
// //     description:
// //       "Scalable marketplace with real-time inventory and payment processing.",
// //     tech: ["Flutter", "GetX", "MVVM Architecture"],
// //   },
// //   {
// //     category: "UI/UX Designing",
// //     title: "Learnify",
// //     description:
// //       "Learnify is a scalable learning application designed by following Design System.",
// //     tech: ["Figma", "Design System"],
// //   },
// //   {
// //     category: "Development",
// //     title: "E-Commerce Platform",
// //     description:
// //       "Scalable marketplace with real-time inventory and payment processing.",
// //     tech: ["Flutter", "GetX", "MVVM Architecture"],
// //   },
// // ];

// // const FeaturedProjects = () => {
// //   return (
// //     <section
// //       className="
      
// //       py-24 text-white
// //       bg-gradient-to-r
// //       from-[#020617]
// //       via-[#031b3b]
// //       to-[#020617]
// //     "
// //     >
// //       <div className="max-w-7xl mx-auto px-6 ">

// //         {/* Heading */}
// //         <div className="text-center mb-14">
// //           <h2 className="text-3xl md:text-4xl font-bold">
// //             Featured Projects
// //           </h2>
// //           <p className="text-gray-400 mt-3">
// //             Showcase of our recent work across development and AI domains
// //           </p>
// //         </div>

// //         {/* Cards Grid */}
// //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// //           {projects.map((project, index) => (
// //             <ProjectCard key={index} {...project} />
// //           ))}
// //         </div>

// //         {/* Button */}
// //         <div className="flex justify-center mt-14">
// //           <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold transition">
// //             View All Projects →
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturedProjects;















// import React from "react";
// import ProjectCard from "../Ui/ProjectCard";

// const projects = [
//   {
//     category: "Development",
//     title: "E-Commerce Platform",
//     description:
//       "Scalable marketplace with real-time inventory and payment processing.",
//     tech: ["Flutter", "GetX", "MVVM Architecture"],
//   },
//   {
//     category: "UI/UX Designing",
//     title: "Learnify",
//     description:
//       "Learnify is a scalable learning application designed by following Design System.",
//     tech: ["Figma", "Design System"],
//   },
//   {
//     category: "Development",
//     title: "E-Commerce Platform",
//     description:
//       "Scalable marketplace with real-time inventory and payment processing.",
//     tech: ["Flutter", "GetX", "MVVM Architecture"],
//   },
// ];

// const FeaturedProjects = () => {
//   return (
//     <section
//       className="
//         w-full
//         bg-gradient-to-r
//         from-[#020617]
//         via-[#031b3b]
//         to-[#020617]
//         flex justify-center
//       "
//     >
//       {/* Centered 1440px Container */}
//       <div className="w-full max-w-[1440px] lg:h-[1063px]  px-6 sm:px-10 lg:px-16 py-24 text-white flex flex-col justify-between">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Featured Projects
//           </h2>
//           <p className="text-gray-400 mt-3">
//             Showcase of our recent work across development and AI domains
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-14">
//           <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold transition">
//             View All Projects →
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;


import React from "react";
import ProjectCard from "../Ui/ProjectCard";

const projects = [
  {
    category: "Development",
    title: "E-Commerce Platform",
    description:
      "Scalable marketplace with real-time inventory and payment processing.",
    tech: ["Flutter", "GetX", "MVVM Architecture"],
  },
  {
    category: "UI/UX Designing",
    title: "Learnify",
    description:
      "Learnify is a scalable learning application designed by following Design System.",
    tech: ["Figma", "Design System"],
  },
  {
    category: "Development",
    title: "E-Commerce Platform",
    description:
      "Scalable marketplace with real-time inventory and payment processing.",
    tech: ["Flutter", "GetX", "MVVM Architecture"],
  },
];

const FeaturedProjects = () => {
  return (
    <section
      className="
        w-full
        bg-gradient-to-r
        from-[#020617]
        via-[#031b3b]
        to-[#020617]
        flex justify-center
      "
    >
      {/* 1440px Centered Container */}
      <div
        className="
          w-full
          max-w-[1440px]
          lg:h-[710px]
          px-6 sm:px-10 lg:px-16
          py-16 lg:py-20
          text-white
          flex flex-col
          justify-between
        "
      >
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Showcase of our recent work across development and AI domains
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10 lg:mt-14">
          <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold transition">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;