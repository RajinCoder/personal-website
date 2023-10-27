import React from "react";
import Image from "next/image";
import Ansh from "../images/ansh-chan.png";

const AboutSection = () => {
  return (
    <div className=" w-full h-full p-4 grid grid-rows-2 grid-cols-2 gap-y-10">
      <div className="col-span-1 text-9xl">
        <h1>About Me...</h1>
      </div>
      <div className="col-span-1 row-span-1">
        <Image src={Ansh} alt="Me" className="w-1/4 h-auto" />
      </div>
      <div className="col-span-2 text-2xl">
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
