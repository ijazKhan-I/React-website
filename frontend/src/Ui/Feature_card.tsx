
// const FeatureCard = ({ icon ,title, description }:{icon:any,title:string,description:string}) => {
//   return (
//     <div className="bg-[#0b1224] border border-purple-500/40 rounded-xl p-6
//                     hover:border-purple-400 transition duration-300
//                     hover:shadow-lg hover:shadow-purple-500/10">

//       {/* Icon */}
//       <div className="text-2xl mb-4">{icon}</div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold text-white mb-2">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="text-gray-400 text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default FeatureCard;



// const FeatureCard = ({
//   icon,
//   title,
//   description,
// }: {
//   icon: any;
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div
//       className="
//         bg-[#0b1224]
//         border border-purple-500/40
//         rounded-xl
//         p-6

//         transform transition-all duration-700 ease-out

//         opacity-0 translate-y-16
//         group-hover:opacity-100
//         group-hover:translate-y-0

//         hover:border-purple-400
//         hover:shadow-lg hover:shadow-purple-500/10
//       "
//     >
//       {/* Icon */}
//       <div className="text-2xl mb-4">{icon}</div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold text-white mb-2">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="text-gray-400 text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default FeatureCard;










const FeatureCard = ({
  icon,
  title,
  description,
  show,
  delay = 0,
}: {
  icon: any;
  title: string;
  description: string;
  show: boolean;
  delay?: number;
}) => {
  return (
    <div
      className={`bg-[#0b1224] border border-purple-500/40 rounded-xl p-6
        transform transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 
      `}
      style={{ transitionDelay: `${delay}ms` }} // stagger animation
    >
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;