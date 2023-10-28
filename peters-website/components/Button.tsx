"use client";

import React from "react";
import { Link } from "react-scroll";

interface Props {
  name: string;
  styling: string;
  targetSection: string;
}
const Button = ({ name, styling, targetSection }: Props) => {
  return (
    <Link
      className="w-full h-full"
      to={targetSection}
      spy={true}
      smooth={true}
      duration={500}
      offset={-350}
    >
      <button className={styling}>{name}</button>
    </Link>
  );
};

export default Button;
