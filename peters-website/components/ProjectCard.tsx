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
    <div className="h-full w-full grid grid-rows-3 rounded-sm bg-gray shadow-lg">
      <div className="h-full">
        <Image
          className="p-6 lg:w-full"
          src={`/${imageSrc}`}
          alt={targetName}
          width={400}
          height={0}
        ></Image>
      </div>
      <div className="h-full px-4 py-4 mt-20 sm:mt-0 text-sm sm:text-sm lg:pt-20 xl:pt-32">
        <p>{message}</p>
      </div>
      <div className="flex self-end h-1/2 w-full rounded">
        <OutsideLinkButton
          name="Try it"
          src=""
          svgStyling="hidden"
          styling="bg-dark-blueish w-full h-full flex flex-row rounded-bl-sm items-center justify-around hover:bg-dark-dark-blueish shadow-sm text-xl"
          targetSection={targetSection1}
        />
        <OutsideLinkButton
          src="github.svg"
          styling="bg-dark-blueish w-full h-full flex flex-row rounded-br-sm items-center justify-around hover:bg-dark-dark-blueish shadow-sm"
          targetSection={targetSection2}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
