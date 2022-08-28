import React, { LegacyRef } from "react";
import ProjectItem from "./projectItem";

const ProjectSection = React.forwardRef((props, ref: LegacyRef<HTMLElement> | undefined) => (
  <section ref={ref} className="w-full min-h-screen bg-[#389583] flex p-[3rem]">
    <div className="block w-full">
      <h2 className="title">Projekt</h2>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  </section>
));

export default ProjectSection;
