"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div
      id="AboutSection"
      className=" w-full h-full p-4 grid grid-rows-2 grid-cols-2 gap-y-10 items-center"
    >
      <div className="col-span-1 text-9xl">
        <Typewriter
          options={{ strings: ["About Me..."], autoStart: true, loop: true }}
        />
      </div>
      <div className="col-span-1 flex justify-center">
        <div className="max-h-none h-max">
          <Image
            className="max-h-none border-4 w-full border-black rounded-full"
            src={"/peter.png"}
            alt={"profile pic"}
            height={300}
            width={350}
          ></Image>
        </div>
      </div>
      <div className="col-span-2 text-2xl font-sans font-thin">
        <p>
          Hey, My name is Peter Moise, I'm a second year studying computer
          science at Northeastern University. Originally from Central Florida, I
          come from a big Carribbean family with a love for sports. As a result
          I've always followed sports—I've been playing soccer for over 7 years
          and I'm also a huge fan of basketball. Other than that, you'll find me
          gaming, cooking up in the kitchen, or watching a good movie.
          <br />
          <br />
          My interest in tech started in middle school after I got a game for my
          birthday and became interested in how it was made; This led me down a
          youtube rabbit hole and eventually led to my love for programming.
          Right now, I'm really into mobile development and tinkering with APIs.
          I'm on the lookout for Co-Ops from Summer through Fall 2024. Connect
          with me if you have any questions, opportunities, or just want to
          talk.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
