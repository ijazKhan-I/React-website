function ProcessSteps() {
  const steps = [
    {
      number: "01",
      iconBg: "bg-cyan-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Requirement Analysis",
      description:
        "We start by deeply understanding your business goals, challenges, and technical requirements.",
      keyActivities: [
        "Stakeholder interviews",
        "Business analysis",
        "Technical feasibility study",
        "Requirements documentation",
      ],
      deliverables: [
        "Project scope document",
        "Technical requirements spec",
        "Timeline and budget estimate",
      ],
    },
    {
      number: "02",
      iconBg: "bg-purple-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Design & Architecture",
      description:
        "Creating the blueprint for your solution with detailed technical and UX design.",
      keyActivities: [
        "System architecture design",
        "Database schema design",
        "UI/UX wireframes and mockups",
        "API design",
      ],
      deliverables: [
        "Architecture diagrams",
        "Design mockups",
        "Technical specifications",
      ],
    },
    {
      number: "03",
      iconBg: "bg-cyan-400",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 18l6-6m0 0l-6-6m6 6H2"
          />
        </svg>
      ),
      title: "Development & Model Training",
      description:
        "Building your solution with clean code and training AI models with quality data.",
      keyActivities: [
        "Code implementation",
        "Model training and validation",
        "Testing and QA",
        "Deployment",
      ],
      deliverables: [
        "Working software",
        "Trained AI models",
        "Test reports",
        "Deployment documentation",
      ],
    },
  ];

  return (
    <div className="w-full max-w-[900px] mx-auto px-6 py-16 text-white bg-[#060d1f] mt-30">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`relative rounded-md border border-purple-500 p-6 mb-12 last:mb-0`}
        >
          {/* Left Icon + Number */}
          <div className="absolute -left-14 top-8 flex flex-col items-center space-y-1">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${step.iconBg}`}
            >
              {step.icon}
            </div>
            <span className="text-gray-500 text-lg font-mono">{step.number}</span>
            {idx < steps.length - 1 && (
              <div className="w-px h-20 bg-gray-700 mt-1" />
            )}
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-300 mb-6 text-sm">{step.description}</p>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Key Activities */}
            <div className="flex-1">
              <h4 className="font-semibold mb-3">Key Activities</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {step.keyActivities.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-cyan-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="flex-1">
              <h4 className="font-semibold mb-3">Deliverables</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {step.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-purple-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProcessSteps;