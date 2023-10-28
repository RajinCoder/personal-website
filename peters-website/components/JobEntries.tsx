import React from "react";

interface Props {
  date: string;
  jobTitle: string;
  summary: string[];
}
const JobEntries = ({ date, jobTitle, summary }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 pb-10 pt-10 border-b border-white-10">
      <div className="date">
        <h3 className="text-2xl">{date}</h3>
      </div>
      <div className="title">
        <h2 className="text-4xl">{jobTitle}</h2>
      </div>
      <div className="summary">
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default JobEntries;
