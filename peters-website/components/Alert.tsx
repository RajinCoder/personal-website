import React, { useState } from "react";

interface Props {
  colorNum: number;
  messageNum: number;
}
const Alert = ({ colorNum, messageNum }: Props) => {
  const messageName = ["This is a success alert!", "This is a error alert!"];
  const messageBody = [
    "Your message was successfully sent!",
    "Error with your message please ensure you filled out every field.",
  ];
  const colorBody = [
    "p-4 mb-4 w-1/5 text-green-800 border border-green-300 rounded-lg dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
    "p-4 mb-4 w-1/5 text-red-800 border border-red-300 rounded-lg dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
  ];
  return (
    <div
      id="alert-additional-content-3"
      className={colorBody[colorNum]}
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{messageName[messageNum]}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{messageBody[messageNum]}</div>
    </div>
  );
};

export default Alert;
