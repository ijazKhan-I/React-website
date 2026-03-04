// import development_service_icon from "../assets/development_service_icon.png"
// import { useState } from "react";
// function Development() {
//       const [showCards, setShowCards] = useState(false);
    
//     return (
//         <div className="max-w-[1440px] w-full mx-auto bg-[#060d1f] py-16 px-6 text-white">

//             {/* Header */}
//             <div className="flex flex-col items-center text-center mb-12">
//                 <img src={development_service_icon} alt="Development Icon" className="mb-4 h-20 w-20" />
//                 <h3 className="text-4xl font-bold mb-2">Development Services</h3>
//                 <p className="text-lg text-gray-300">
//                     Building scalable, secure, performant applications
//                 </p>
//             </div>

//             {/* Services Grid */}
//             <div style={{ transitionDelay: `${100}ms` }} 
//              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center m-auto mx-20 ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}  onMouseEnter={() => setShowCards(true)} >

//                 <div   className="bg-black rounded-lg w-[580px] h-[352px]   p-6 border border-[#8A38F5] justify-items-start ${}">
//                     <img src={development_service_icon} alt="icon" />
//                     <h3 className="text-2xl  font-bold">Custom Web & Mobile Development</h3>
//                     <p className="text-gray-300">This is web and mobile app development</p>
//                     <ol className="list-disc list-inside marker:text-[#8A38F5] text-gray-400 space-y-1">
//                         <li>Feature 1</li>
//                         <li>Feature 2</li>
//                         <li>Feature 3</li>
//                     </ol>
//                 </div>
//                  <div className="bg-black w-[580px] h-[352px] rounded-lg p-6 border border-[#8A38F5] justify-items-start">
//                     <img src={development_service_icon} alt="icon" />
//                     <h3 className="text-2xl  font-bold">Custom Web & Mobile Development</h3>
//                     <p className="text-gray-300">This is web and mobile app development</p>
//                     <ol className="list-disc list-inside marker:text-[#8A38F5] text-gray-400 space-y-1">
//                         <li>Feature 1</li>
//                         <li>Feature 2</li>
//                         <li>Feature 3</li>
//                     </ol>
//                 </div>
//                  <div className="bg-black rounded-lg w-[580px] h-[352px] p-6 border border-[#8A38F5] justify-items-start">
//                     <img src={development_service_icon} alt="icon" />
//                     <h3 className="text-2xl  font-bold">Custom Web & Mobile Development</h3>
//                     <p className="text-gray-300">This is web and mobile app development</p>
//                     <ol className="list-disc list-inside marker:text-[#8A38F5] text-gray-400 space-y-1">
//                         <li>Feature 1</li>
//                         <li>Feature 2</li>
//                         <li>Feature 3</li>
//                     </ol>
//                 </div>
//                  <div className="bg-black rounded-lg w-[580px] h-[352px] p-6 border border-[#8A38F5] justify-items-start">
//                     <img src={development_service_icon} alt="icon" />
//                     <h3 className="text-2xl  font-bold">Custom Web & Mobile Development</h3>
//                     <p className="text-gray-300">This is web and mobile app development</p>
//                     <ol className="list-disc list-inside marker:text-[#8A38F5] text-gray-400 space-y-1">
//                         <li>Feature 1</li>
//                         <li>Feature 2</li>
//                         <li>Feature 3</li>
//                     </ol>
//                 </div>
                
//             </div>

//         </div>
//     );
// }

// export default Development;












import { Code2, Database, Cloud, Wrench } from "lucide-react";


const services = [
  {
    title: "Custom Web & Mobile Development",
    description: "Full-stack development of web and mobile applications tailored to your business needs.",
    icon: <Code2 size={32} />,
    points: [
      "Responsive web applications",
      "Progressive web apps (PWA)",
      "Native & cross-platform mobile apps",
      "Single-page applications (SPA)",
    ],
  },
  {
    title: "Backend Systems & APIs",
    description: "Robust server-side solutions with RESTful and GraphQL APIs.",
    icon: <Database size={32} />,
    points: [
      "Microservices architecture",
      "API development & integration",
      "Database design & optimization",
      "Real-time data processing",
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Cloud-native solutions with automated deployment and scaling.",
    icon: <Cloud size={32} />,
    points: [
      "AWS, Azure, GCP deployment",
      "CI/CD pipeline setup",
      "Container orchestration",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Software Maintenance & Scaling",
    description: "Ongoing support, optimization, and scaling of existing applications.",
    icon: <Wrench size={32} />,
    points: [
      "Performance optimization",
      "Bug fixes & updates",
      "System monitoring",
      "Scalability improvements",
    ],
  },
];
import { useState } from "react";
import development_service_icon from "../assets/development_service_icon.png";

function Development() {
  const [showCards, setShowCards] = useState(false);

  const cards = [
    "Custom Web & Mobile Development",
    "API & Backend Development",
    "UI/UX Implementation",
    "Maintenance & Support",
  ];

  return (
    <div className="max-w-[1440px] w-full mx-auto bg-[#060d1f] py-16 px-6 text-white">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <img
          src={development_service_icon}
          alt="Development Icon"
          className="mb-4 h-20 w-20"
        />
        <h3 className="text-4xl font-bold mb-2">
          Development Services
        </h3>
        <p className="text-lg text-gray-300">
          Building scalable, secure, performant applications
        </p>
      </div>

      {/* Services Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1200px] mx-auto
        transform transition-all duration-700 ease-out
        ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        onMouseEnter={() => setShowCards(true)}
      >
        {services.map((service, index) => (
          <div key={index} className="relative group rounded-xl ">

            {/* Rotating Border Layer */}
            <div className="absolute -inset-[2px] rounded-xl rotating-border opacity-0 group-hover:opacity-200 transition-opacity duration-300 pointer-events-none" />

            {/* Card */}
            <div className="relative bg-black rounded-xl p-6 flex flex-col gap-4 z-10 border border-purple-400">
              <img
                src={development_service_icon}
                alt="icon"
                className="h-16 w-16"
              />

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="text-gray-300">
                {service.description}
              </p>

              <ol className="list-disc list-inside marker:text-[#8A38F5] text-gray-400 space-y-1 justify-items-start">
                 {service.points.map((point, pIndex) => (
                      <li key={pIndex} className="">
                       
                        {point}
                      </li>
                 ))}
              </ol>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Development;