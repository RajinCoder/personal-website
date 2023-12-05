import React from "react";

const huskySummary =
  "I engaged with more than 100 prospective students and their families, ensuring clear and effective communication throughout. This experience significantly enhanced my capacity to handle stressful situations calmly and rationally. Additionally, I collaborated with colleagues to organize a successful welcome day event for over 200 potential students, showcasing our teamwork and event planning skills.";

const nerSummary =
  "I helped implement numerous features and bug fixes for the Club website, catering to a vibrant community of nearly 1,000 active members. This involved redesigning critical components to bolster user experience and proactively prevent potential future issues. Collaborating closely with tech leads, I refined my web development skills by adopting and applying industry-best coding practices throughout the process.";

const oasisSummary =
  "Led a team of four developers in creating a full-stack mobile application, adhering closely to industry best practices. With a mentor's guidance, we employed agile methodologies, conducted sprints, and held weekly standups to maintain our vision. To visualize our goals, we developed both lo-fi and hi-fi design boards. Utilizing React Native on separate screens allowed us to lay the foundation for future cross-platform support, ensuring scalability and versatility.";

const Timeline = () => {
  const experiences = [
    {
      date: "Sept. 2023 - Present",
      title: "Software Developer",
      company: "Northeastern Electric Racing",
      summary: nerSummary,
    },
    {
      date: "Sept. 2023 - Dec. 2023",
      title: "Mobile Developer",
      company: "Oasis",
      summary: oasisSummary,
    },
    {
      date: "Jan. 2023 - Apr. 2023",
      title: "Student Ambassador",
      company: "Northeastern University",
      summary: huskySummary,
    },
    // Add more experiences following the same structure
  ];

  return (
    <div id="Timeline" className="h-full sm:px-20">
      <h1 className="px-4 text-5xl sm:text-8xl">Experience</h1>
      <div className="grid grid-rows-3 p-4 mt-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex flex-row w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="hidden sm:block sm:w-2/5 sm:px-2 sm:py-10"></div>
            <div className="hidden sm:w-1/5 sm:flex sm:justify-center sm:relative">
              <div className="absolute h-full w-1 bg-dark-blueish"></div>
              <div className="absolute -z-1 flex items-center justify-center h-8 w-8 rounded-full bg-white border-2 border-teal-900">
                {/* Date or month */}
              </div>
            </div>
            <div className="w-full mb-5 sm:w-2/5 sm:mb-0">
              <div className="flex flex-col w-full h-full rounded shadow-lg bg-dark-blueish px-4 py-5">
                <div className="text-gray-600 mb-2 flex justify-between">
                  <div className="font-bold">{experience.date}</div>
                  <div className="flex flex-row">
                    {/* Optional: Edit and Delete buttons */}
                  </div>
                </div>
                <div className="text-gray-600">
                  <h3 className="mb-3 font-bold text-2xl">
                    {experience.title}
                  </h3>
                  <p className="pb-4 text-sm text-gray-200">
                    {experience.company}
                  </p>
                  <hr />
                  <p className="text-sm font-medium leading-snug mt-5 tracking-wide text-gray-300 text-opacity-100">
                    {experience.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
