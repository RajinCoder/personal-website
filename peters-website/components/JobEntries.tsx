import React from "react";

interface Props {
  date: string;
  jobTitle: string;
  summary: string;
}
const JobEntries = ({ date, jobTitle, summary }: Props) => {
  return (
    <div className="bg-[#313131] hover:bg-[#242424] hover:shadow-xl shadow-md rounded-md flex p-6 space-x-4 font-thin">
      <div className="w-[100px] shrink-0">
        <h3 className="text-md">{date}</h3>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl">{jobTitle}</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default JobEntries;
