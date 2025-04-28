import React from "react";
import OutsideLinkButton from "./OutsideLinkButton";
import Image from "next/image";

interface Props {
  imageSrc: string;
  targetSection: string;
  targetName: string;
  message: string;
}
const ProjectCard = ({
  imageSrc,
  targetName,
  targetSection,
  message,
}: Props) => {
  return (
    <a
      target="_blank"
      href={`${targetSection}`}
      className="bg-[#313131] hover:bg-[#242424] hover:shadow-xl shadow-md rounded-md flex p-6 space-x-4"
    >
      <div className="w-[200px] shrink-0">
        <Image
          className=""
          src={`/${imageSrc}`}
          alt={targetName}
          width={200}
          height={200}
        ></Image>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{targetName}</div>
        <div>{message}</div>
      </div>
    </a>
  );
};

export default ProjectCard;
