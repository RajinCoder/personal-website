import React from "react";
import LinkButton from "./LinkButton";
import Image from "next/image";
import OutsideLinkButton from "./OutsideLinkButton";

const Navbar = () => {
  return (
    <nav className="bg-dark-blueish h-2/5 w-full shadow-md grid grid-cols-6 lg:grid-cols-10">
      <LinkButton
        targetSection=""
        styling="bg-dark-blueish w-full h-full hover:bg-dark-dark-blueish shadow-sm text-xs sm:text-sm lg:text-base"
        name="About"
      />
      <LinkButton
        targetSection="experience"
        styling="bg-dark-blueish w-full h-full hover:bg-dark-dark-blueish shadow-sm text-xs sm:text-sm lg:text-base"
        name="Experience"
      />
      <LinkButton
        targetSection="projects"
        styling="bg-dark-blueish w-full h-full hover:bg-dark-dark-blueish shadow-sm text-xs sm:text-sm lg:text-base"
        name="Projects"
      />
      <LinkButton
        targetSection="contact"
        styling="bg-dark-blueish w-full h-full hover:bg-dark-dark-blueish shadow-sm text-xs sm:text-sm lg:text-base"
        name="Contact"
      />
      <div className="hidden lg:block lg:col-span-4"></div>
      <OutsideLinkButton
        styling={"w-1/3 h-full justify-self-center"}
        svgStyling="w-full md:w-3/4 lg:w-full"
        targetSection={"https://www.linkedin.com/in/petermoise/"}
        src={"linkedin.svg"}
      />
      <OutsideLinkButton
        styling={"w-1/3 h-full"}
        svgStyling="w-full md:w-3/4 lg:w-full"
        targetSection={"https://github.com/RajinCoder"}
        src={"github.svg"}
      />
    </nav>
  );
};

export default Navbar;
