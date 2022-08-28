import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { LegacyRef } from "react";

const LandingSection = React.forwardRef((props, ref: LegacyRef<HTMLElement> | undefined) => (
  <section ref={ref} className="w-full h-screen flex items-center bg-[#01E08F] p-[3rem] landingSection">
    <div className="block w-full">
      <h1 className="text-[6rem] font-[SairaExtraCondensed] leading-[1] mb-0 font-bold text-[#EDF4E0] uppercase select-none">
        Emil<span className="text-[#05396B]">Risberg</span>
      </h1>
      <div className="mb-[3rem] flex">
        <a href="mailto:name@email.com">
          <p className="text-[#05396B] font-bold uppercase hover:underline text-[1.5rem]">emilrisberg17@gmail.com</p>
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
));

export default LandingSection;
