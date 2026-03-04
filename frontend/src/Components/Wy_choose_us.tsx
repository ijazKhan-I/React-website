import FeatureCard from "../Ui/Feature_card";
import { useState } from "react";
import {
  Code,
  Brain,
  Zap,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Code className="text-cyan-400" />,
    title: "Development Excellence",
    description:
      "Building scalable, performant applications with modern frameworks and best practices.",
  },
  {
    icon: <Brain className="text-purple-400" />,
    title: "AI Innovation",
    description:
      "Leveraging machine learning and deep learning to solve complex real-world problems.",
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Rapid Deployment",
    description:
      "Agile methodologies and DevOps practices for fast, reliable delivery.",
  },
  {
    icon: <ShieldCheck className="text-green-400" />,
    title: "Enterprise Security",
    description:
      "Industry-leading security practices to protect your data and infrastructure.",
  },
  {
    icon: <Target className="text-red-400" />,
    title: "Result-Driven",
    description:
      "Focused on measurable outcomes and business impact from every project.",
  },
  {
    icon: <Users className="text-sky-400" />,
    title: "Expert Team",
    description:
      "Seasoned professionals in software engineering and artificial intelligence.",
  },
];


const WhyChooseUs = () => {
  const [showCards, setShowCards] = useState(false);

  return (
    <section
      className="bg-[#060d1f] py-20 text-white"
      onMouseEnter={() => setShowCards(true)} // trigger once
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-400 mt-3">
            Comprehensive technology solutions backed by expertise and innovation
          </p>
        </div>
 
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              show={showCards} // pass state
              delay={index * 100} // optional stagger
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

























