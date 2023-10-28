import NavBar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen space-y-80">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <div className="h-4/5">
        <AboutSection />
      </div>
      <div className="h-4/5">
        <ExperienceSection />
      </div>
    </div>
  );
}
