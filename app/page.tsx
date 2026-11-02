import About from "@/components/About";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
        <Profile />
        <About />
      </div>
      <Projects />
      <Contact />
    </>
  );
}
