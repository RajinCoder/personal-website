"use client";
import NavBar from "../components/Navbar";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex flex-col h-screen space-y-40 font-sans">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <div className="h-4/5 bg-black rounded-lg m-4  flex flex-col space-y-4">
        <div className="w-full h-[8%] rounded-t-lg bg-[#313131] px-4 text-lg flex items-center space-x-4">
          <div className="w-[8%] h-full flex items-center justify-between">
            <div className="bg-red-600 border border-transparent rounded-full h-[60%] w-[25%]"></div>
            <div className="bg-yellow-300 border border-transparent rounded-full h-[60%] w-[25%]"></div>
            <div className="bg-green-600 border border-transparent rounded-full h-[60%] w-[25%]"></div>
          </div>
          <div>Petermoise@northeastern ~</div>
        </div>
        <div className="flex text-3xl mx-4">
          <Typewriter
            options={{
              strings: ["Petermoise@northeastern:~$ cat AboutMe.txt"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="col-span-2 text-xl sm:text-2xl font-sans font-thin mx-4">
          <p>
            Hi, I'm Peter, a third year computer science student at Northeastern
            University interning at Geode Capital this summer - fall season. I'm
            interested in a lot of different aspects of computer science but
            I've been spending a majority of my time learning more about
            cybersecurity and all its applications. Some courses that've helped
            refine my skills in cyber security are System Security(CY3740) and
            Network Fundamentals(4700) where I've learned about the
            infrastructure of the internet of the past to the current and how to
            find and exploit vulnerabilties in systems from binaries to web. I'm
            currently involved in the CTF club where I'm constantly refining my
            vulnerability finding skills.
            <br />
            <br />
            Outside of computer science I enjoy watching and playing sports such
            as soccer and basketball. I also love to find new recipes online to
            try new meals and enjoy them with a show or book of some kind.
          </p>
        </div>
      </div>
    </main>
  );
}
