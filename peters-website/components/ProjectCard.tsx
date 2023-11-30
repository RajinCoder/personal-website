import React from "react";
import OutsideLinkButton from "./OutsideLinkButton";
import Image from "next/image";

interface Props {
  imageSrc: string;
  targetSection1: string;
  targetSection2: string;
  targetName: string;
  message: string;
}
const ProjectCard = ({
  imageSrc,
  targetName,
  targetSection1,
  targetSection2,
  message,
}: Props) => {
  return (
    <div className="h-full w-full grid grid-rows-3 bg-gray shadow-lg">
      <div className="h-full">
        <Image
          className="p-6"
          src={`/${imageSrc}`}
          alt={targetName}
          width={400}
          height={0}
        ></Image>
      </div>
      <div className="h-full px-6 p-4 mt-12">
        <p>{message}</p>
      </div>
      <div className="flex self-end h-1/2 w-ful">
        <OutsideLinkButton
          name="Try it"
          src=""
          svgStyling="hidden"
          styling="bg-dark-blueish w-full h-full flex flex-row items-center justify-around hover:bg-dark-dark-blueish shadow-sm text-xl"
          targetSection={targetSection1}
        />
        <OutsideLinkButton
          src="github.svg"
          styling="bg-dark-blueish w-full h-full flex flex-row items-center justify-around hover:bg-dark-dark-blueish shadow-sm"
          targetSection={targetSection2}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
