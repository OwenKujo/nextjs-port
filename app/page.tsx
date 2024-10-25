import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Techstack from "@/components/TechStack";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Techstack />
        <Experience />
      </div>
    </main>
  );
}
