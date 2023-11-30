import NavBar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
export default function page() {
  return (
    <main className="flex flex-col h-screen space-y-40 font-sans">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <div className="h-4/5">
        <ProjectSection />
      </div>
    </main>
  );
}
