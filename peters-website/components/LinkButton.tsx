"use client";

import React from "react";
import Link from "next/link";

interface Props {
  name: string;
  styling: string;
  targetSection: string;
}
const LinkButton = ({ name, styling, targetSection }: Props) => {
  return (
    <Link className="max-w-3/4 h-full" href={`/${targetSection}`}>
      <button className={styling}>{name}</button>
    </Link>
  );
};

export default LinkButton;
