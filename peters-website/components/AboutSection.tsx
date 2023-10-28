"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const AboutSection = () => {
  return (
    <div
      id="AboutSection"
      className=" w-full h-full p-4 grid grid-rows-2 grid-cols-1 gap-y-10 items-center"
    >
      <div className="col-span-1 text-9xl">
        <Typewriter
          options={{ strings: ["About Me..."], autoStart: true, loop: true }}
        />
      </div>
      <div className="col-span-1 text-2xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam magni,
          culpa sunt non mollitia minima laboriosam inventore quas saepe et
          suscipit harum tenetur eligendi quaerat corrupti dolore quia?
          Deleniti, ex.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
