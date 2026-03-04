import React from "react";

const agileItems = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v6h6M20 20v-6h-6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15l6-6"
        />
      </svg>
    ),
    title: "2-Week Sprints",
    description: "Regular delivery cycles with demos and feedback sessions",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h8m-8 4h6"
        />
      </svg>
    ),
    title: "Daily Standups",
    description: "Quick sync meetings to track progress and address blockers",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect
          width="18"
          height="18"
          x="3"
          y="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="2"
          ry="2"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
      </svg>
    ),
    title: "Transparency",
    description: "Access to project boards, code repos, and progress metrics",
  },
];

export default function AgileDevelopment() {
  return (
    <section className="bg-[#0c0a2e] py-16 px-6 text-white max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-2">Agile Development</h2>
      <p className="text-center text-sm mb-12 text-white/80 max-w-xl mx-auto">
        We work in sprints with regular feedback and iterative improvements
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {agileItems.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="border border-purple-700 rounded-lg p-6 flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded bg-purple-800 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-white/70 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}