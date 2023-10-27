import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-dark-blueish h-1/2 w-full shadow-md grid grid-cols-4 gap-4 justify-items-center items-center">
      <Button
        styling="bg-dark-blueish w-1/2 h-1/2 rounded hover:bg-dark-dark-blueish shadow-sm"
        name="About"
      />
      <Button
        styling="bg-dark-blueish w-1/2 h-1/2 rounded hover:bg-dark-dark-blueish shadow-sm"
        name="Experience"
      />
      <Button
        styling="bg-dark-blueish w-1/2 h-1/2 rounded hover:bg-dark-dark-blueish shadow-sm"
        name="Projects"
      />
      <Button
        styling="bg-dark-blueish w-1/2 h-1/2 rounded hover:bg-dark-dark-blueish shadow-sm"
        name="Contact"
      />
    </nav>
  );
};

export default Navbar;
