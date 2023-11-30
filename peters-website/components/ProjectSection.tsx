import React from "react";
import ProjectCard from "./ProjectCard";

const foodDiary =
  "Crafted a user-centric food journal site with React.JS and Typescript, enhancing engagement through Reacts dynamic rendering. By streamlining folder structures, I elevated component reusability and slashed code clutter by over 30%.";
const secretSanta =
  "Spearheaded the creation of a Secret Santa website during the U Mass Hackathon, orchestrating a platform for an organized and enjoyable gift exchange among friends. As the lead frontend developer, I crafted multiple key pages and orchestrated the team's structural organization.";
const fairShare =
  "Collaborating within a team of four, I contributed to crafting a bill-splitting app, streamlining payments after social outings. My primary focus involved shaping the app's design and refining its route navigation for enhanced usability.";
const ProjectSection = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="text-8xl">Projects</div>
      <div className="h-full w-full mt-20 flex justify-evenly">
        <div className="h-4/5 w-1/4">
          <ProjectCard
            imageSrc={"FoodDiary.png"}
            targetSection1="https://food-diary-omega.vercel.app/"
            targetSection2="https://github.com/RajinCoder/FoodDiary"
            targetName={"Food Diary"}
            message={foodDiary}
          />
        </div>
        <div className="h-4/5 w-1/4">
          <ProjectCard
            imageSrc={"santa.png"}
            targetSection1="https://sigma-santa.vercel.app"
            targetSection2={"https://github.com/RajinCoder/SigmaSanta"}
            targetName={"Secret Santa"}
            message={secretSanta}
          />
        </div>
        <div className="h-4/5 w-1/4">
          <ProjectCard
            imageSrc={"app.png"}
            targetSection1="https://github.com/Oasis-NEU/f23-group04#readme"
            targetSection2={"https://github.com/Oasis-NEU/f23-group04"}
            targetName={"FairShare"}
            message={fairShare}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
