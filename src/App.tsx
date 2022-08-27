import React, { useRef } from "react";
import Sidebar from "./components/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const scrollRefs = useRef<Array<HTMLDivElement | null>>([]);

  const executeScroll = (index: number) =>
    scrollRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden">
      <Sidebar scrollToProject={(index: number) => executeScroll(index)} />
      <div className="w-full pl-[17rem] min-h-screen flex flex-col">
        <section
          ref={(el: HTMLDivElement) => (scrollRefs.current[0] = el)}
          className="w-full h-screen flex items-center bg-[#01E08F] p-[3rem]"
        >
          <div className="block w-full">
            <h1 className="text-[6rem] font-[SairaExtraCondensed] leading-[1] mb-0 font-bold text-[#EDF4E0] uppercase select-none">
              Emil<span className="text-[#05396B]">Risberg</span>
            </h1>
            <div className="mb-[3rem] ">
              <a href="mailto:name@email.com">
                <p className="text-[#05396B] font-bold uppercase hover:underline text-[1.5rem]">
                  emilrisberg17@gmail.com
                </p>
              </a>
            </div>
            <p className="text-[#EDF4E0] text-[1.15rem] font-bold mb-[3rem]">C# utvecklare</p>
            <button>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="hover:text-[#edf4e0] text-[#05396B] transition-colors ease-in-out duration-100"
              />
            </button>
          </div>
        </section>
        <hr className="divide-[#EDF4E0] border-2" />
        <section
          ref={(el: HTMLDivElement) => (scrollRefs.current[1] = el)}
          className="w-full min-h-screen bg-[#389583] flex p-[3rem]"
        >
          <div className="block w-full">
            <h2 className="title">Projekt</h2>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </section>
        <hr className="divide-[#EDF4E0] border-2" />
        <section className="w-full bg-[#01E08F] flex p-[3rem]">
          <h3 className="subheading text-[#05396B]">Footer</h3>
        </section>
      </div>
    </div>
  );
}

const ProjectItem = () => {
  return (
    <div className="mb-[3rem]">
      <div>
        <h3 className="projectTitle">Title</h3>
        <div className="subheading mb-[1rem]">Description</div>
        <p className="mb-[1rem] text-[#05396B]">
          Startup that allows users to find local runners, start running clubs, and/or schedule running events. Users
          are incentivized to invite and run with others via real-time chat, invitations, and following/like features.
        </p>
        <ul className="text-[#edf4e0] flex space-x-4 transition-colors duration-100 ease-in-out">
          <li>
            <button>
              <FontAwesomeIcon icon={faLink} className="hover:text-[#05396B]" />
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faGithub} className="hover:text-[#05396B]" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
