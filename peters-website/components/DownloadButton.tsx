"use client";
import React from "react";
const DownloadButton = () => {
  return (
    <button className="flex justify-center h-full w-1/6 bg-dark-blueish hover:bg-dark-dark-blueish shadow-sm">
      <a
        href="/documents/PetersResume.pdf"
        download="PetersResume.pdf"
        className="self-center justify-self-center text-xl"
      >
        Download
      </a>
      <svg
        className="self-center"
        width="28px"
        height="28px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Interface / Download">
            {" "}
            <path
              id="Vector"
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  );
};

export default DownloadButton;
