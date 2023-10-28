import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-dark-blueish h-1/2 w-full shadow-md grid grid-cols-4 gap-4 justify-items-center items-center">
      <Button
        targetSection="AboutSection"
        styling="bg-dark-blueish w-full h-full rounded hover:bg-dark-dark-blueish shadow-sm"
        name="About"
      />

      <Button
        targetSection="ExperienceSection"
        styling="bg-dark-blueish w-full h-full rounded hover:bg-dark-dark-blueish shadow-sm"
        name="Experience"
      />
      <Button
        targetSection="AboutSection"
        styling="bg-dark-blueish w-full h-full rounded hover:bg-dark-dark-blueish shadow-sm"
        name="Projects"
      />
      <Button
        targetSection="AboutSection"
        styling="bg-dark-blueish w-full h-full rounded hover:bg-dark-dark-blueish shadow-sm"
        name="Contact"
      />
    </nav>
  );
};

export default Navbar;
