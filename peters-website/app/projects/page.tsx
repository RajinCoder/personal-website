import NavBar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const dnsServer = {};
const proxmoxServer = {};
const miniShell = {};
const charityBoard = {};
const zone = {};
const bgpRouter = {};
const fairShare = {
  src: "app.png",
  target_link: "https://github.com/Oasis-NEU/f23-group04#readme",
  target_name: "FairShare",
  descr:
    "Collaborating within a team of four, I contributed to crafting a bill-splitting app, streamlining payments after social outings. My primary focus involved shaping the app's design and refining its route navigation for enhanced usability.",
};
const projects_list = [fairShare];
export default function page() {
  return (
    <main className="flex flex-col h-screen space-y-40 font-sans">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <div className="h-4/5 px-10 space-y-4">
        <h1 className="text-3xl">Projects</h1>
        {projects_list.map((project) => (
          <ProjectCard
            imageSrc={project.src}
            targetSection={project.target_link}
            targetName={project.target_name}
            message={project.descr}
          />
        ))}
      </div>
    </main>
  );
}
