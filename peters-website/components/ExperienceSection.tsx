"use client";
import React from "react";
import JobEntries from "./JobEntries";
import DownloadButton from "./DownloadButton";
import Timeline from "./Timeline";
import PDFViewer from "./PDFViewer";

const ExperienceSection = () => {
  return (
    <div id="ExperienceSection" className="h-full px-20 flex flex-col">
      <div>
        <Timeline />
      </div>
      <div className="mt-16">
        <h1 className="text-5xl">My Resume</h1>
        <PDFViewer />
      </div>
    </div>
  );
};

export default ExperienceSection;
