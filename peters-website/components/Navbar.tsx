import React from "react";
import Image from "next/image";
import OutsideLinkButton from "./OutsideLinkButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-dark-blueish h-2/5 w-full shadow-md flex justify-between ">
      <div className="w-3/4 flex ">
        <Link
          className="hover:bg-dark-dark-blueish content-center p-4"
          href="/"
        >
          About
        </Link>
        <Link
          className="hover:bg-dark-dark-blueish content-center p-4"
          href="/experience"
        >
          Experience
        </Link>
        <Link
          className="hover:bg-dark-dark-blueish content-center p-4"
          href="/projects"
        >
          Projects
        </Link>
      </div>

      <div className="w-1/4 flex justify-end">
        <OutsideLinkButton
          targetSection={"https://www.linkedin.com/in/petermoise/"}
          src={"linkedin.svg"}
        />
        <OutsideLinkButton
          targetSection={"https://github.com/RajinCoder"}
          src={"github.svg"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
