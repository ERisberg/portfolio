import React, { useRef } from "react";
import Navbar from "./components/navbar";
import LandingSection from "./components/landingSection";
import ProjectSection from "./components/projectSection";

function App() {
  const scrollRefs = useRef<Array<HTMLDivElement | null>>([]);

  const executeScroll = (index: number) =>
    scrollRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden">
      <Navbar scrollToProject={(index: number) => executeScroll(index)} />
      <div className="w-full pl-[17rem] min-h-screen flex flex-col">
        <LandingSection ref={(el: HTMLDivElement) => (scrollRefs.current[0] = el)} />
        <hr className="divide-[#EDF4E0] border-2" />
        <ProjectSection ref={(el: HTMLDivElement) => (scrollRefs.current[1] = el)} />
        <hr className="divide-[#EDF4E0] border-2" />
        <section className="w-full bg-[#01E08F] flex p-[3rem]">
          <h3 className="subheading text-[#05396B]">Footer</h3>
        </section>
      </div>
    </div>
  );
}

export default App;
