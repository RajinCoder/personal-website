import NavBar from "../components/Navbar";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky-top h-1/6 w-full mb-5">
        <NavBar />
      </div>
      <main className="h-5/6 mt-5">
        <AboutSection />
      </main>
    </div>
  );
}
