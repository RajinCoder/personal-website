import NavBar from "../components/Navbar";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col h-screen space-y-40 font-sans">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <div className="h-4/5">
        <AboutSection />
      </div>
    </main>
  );
}
