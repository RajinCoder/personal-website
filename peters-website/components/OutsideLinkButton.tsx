"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  targetSection: string;
  src: string;
}
const LinkButton = ({ targetSection, src }: Props) => {
  return (
    <a
      className="w-full h-full flex justify-center"
      target="_blank"
      href={`${targetSection}`}
    >
      <Image src={`/${src}`} alt="" width={50} height={50}></Image>
    </a>
  );
};

export default LinkButton;
