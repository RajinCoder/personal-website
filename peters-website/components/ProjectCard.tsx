import React from "react";
import OutsideLinkButton from "./OutsideLinkButton";
import Image from "next/image";

interface Props {
  imageSrc: string;
  targetSection: string;
  targetName: string;
  message: string;
  privateRepo: boolean;
}
const ProjectCard = ({
  imageSrc,
  targetName,
  targetSection,
  message,
  privateRepo,
}: Props) => {
  return (
    <a
      target="_blank"
      href={`${targetSection}`}
      className="group bg-[#313131] font-thin hover:bg-[#242424] hover:shadow-xl shadow-md rounded-md max-w-md h-[380px] overflow-scroll flex px-6 py-4 space-x-4"
    >
      <div className="w-1/2 shrink-0 flex flex-col items-center justify-between">
        <Image
          className=""
          src={`/${imageSrc}`}
          alt={targetName}
          width={200}
          height={200}
        ></Image>
        {privateRepo && (
          <div className="w-auto  text-[0.5rem] bg-red-300 border border-red-900 rounded-2xl text-red-800 flex justify-center p-2">
            Private Repo
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="font-bold group-hover:text-[#5dbef5] transition-colors duration-200">
          {targetName}
        </div>
        <div>{message}</div>
      </div>
    </a>
  );
};

export default ProjectCard;
