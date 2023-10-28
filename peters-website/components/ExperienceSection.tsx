import React from "react";
import JobEntries from "./JobEntries";

const huskySummary: string[] = [
  "Husky Ambassadors are a distinguished group of undergraduate student leaders dedicated to providing campus visitors a glimpse into the Northeastern student experience.",
];

const nerSummary: string[] = [
  "The Software subteam builds and maintains a full-stack web application, FinishLine, to automate our project and budget management.",
];

const ucfSummary: string[] = [
  "Modeled after the ACM International Collegiate Programming Contest (ICPC), we give ten or more problems of varying difficulty to be solved in four hours. Each high school team consists of up to three students.",
];
const ExperienceSection = () => {
  return (
    <div id="ExperienceSection" className="h-full px-20">
      <h1 className="text-8xl">Experience</h1>
      <div className="grid grid-rows-3 p-4 mt-10">
        <JobEntries
          date="Sept. 2023 - Present"
          jobTitle="Software Developer"
          summary={nerSummary}
        />
        <JobEntries
          date="Jan. 2023 - Apr. 2023"
          jobTitle="Student Ambassador"
          summary={huskySummary}
        />
        <JobEntries
          date="Mar. 2022"
          jobTitle="Lead Programmer"
          summary={ucfSummary}
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
