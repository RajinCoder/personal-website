"use client";
import NavBar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import { useState } from "react";

export default function Home() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <main className="flex flex-col h-screen space-y-40">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <div className="h-4/5 bg-black rounded-lg m-4 pb-4 flex flex-col space-y-4 overflow-scroll">
        <div className="w-full h-[8%] rounded-t-lg bg-[#313131] px-4 text-lg flex items-center space-x-4">
          <div className="w-[8%] h-full flex items-center justify-between">
            <div className="bg-red-600 border border-transparent rounded-full h-[60%] lg:w-[27%] sm:w-[32%] w-[27%]"></div>
            <div className="bg-yellow-300 border border-transparent rounded-full h-[60%] w-[27%]"></div>
            <div className="bg-green-600 border border-transparent rounded-full h-[60%] w-[27%]"></div>
          </div>
          <div>Petermoise@northeastern ~</div>
        </div>
        <div className="flex text-3xl mx-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Petermoise@northeastern:~$ cat AboutMe.txt")
                .callFunction(() => {
                  setShowParagraph(true);
                })
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
            }}
          />
        </div>

        {showParagraph && (
          <div className="col-span-2 text-xl sm:text-2xl font-sans font-thin mx-4">
            <p>
              Hi, I'm Peter, a third-year computer science student at
              Northeastern University, currently interning at Geode Capital
              during the summer–fall season. I'm interested in many different
              aspects of computer science, but lately, I've been focusing
              primarily on cybersecurity and its various applications. Some
              courses that have helped refine my skills in this area include
              System Security (CY3740) and Network Fundamentals (CS4700), where
              I've learned about the evolution of internet infrastructure and
              how to discover and exploit vulnerabilities in systems—from
              binaries to web applications. I'm currently involved in the CTF
              club, where I continually improve my vulnerability-finding skills.
              <br />
              <br />
              Outside of computer science, I enjoy watching and playing sports
              such as soccer and basketball. I also love discovering new recipes
              online, trying out new meals, and enjoying them with a good show
              or book.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
