"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  name?: string;
  styling: string;
  targetSection: string;
  src: string;
  svgStyling?: string;
}
const LinkButton = ({
  name,
  styling,
  targetSection,
  src,
  svgStyling = "w-1/4 h-full",
}: Props) => {
  return (
    <a
      className="w-full h-full flex justify-center"
      target="_blank"
      href={`${targetSection}`}
    >
      <button className={styling}>
        {name}
        <Image
          src={`/${src}`}
          alt=""
          className={svgStyling}
          width={0}
          height={0}
        ></Image>
      </button>
    </a>
  );
};

export default LinkButton;
