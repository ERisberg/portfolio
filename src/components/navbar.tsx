interface NavbarProps {
  scrollToProject?: (index: number) => void;
}

const Navbar = ({ scrollToProject }: NavbarProps) => {
  return (
    <nav className="lg:navbar navbarMobile">
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1416909276233281537/WTe5KGlq_400x400.jpg"
          alt=""
          className="max-w-[10rem] max-h-[10rem] rounded-full border-[0.5rem] mb-[0.5rem] border-[#8DE4AF]"
        />
      </div>
      <div className="w-full flex justify-center items-center py-[1rem]">
        <ul className="flex flex-col items-center justify-center space-y-4">
          <li>
            <CustomLink label="Hem" index={0} onClick={(index: number) => scrollToProject?.(index)} />
          </li>
          <li>
            <CustomLink label="Projekt" index={1} onClick={(index: number) => scrollToProject?.(index)} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

//#region CustomLink
interface LinkProps {
  label: string;
  index: number;
  onClick?: (index: number) => void;
}

const CustomLink = ({ label, index, onClick }: LinkProps) => {
  return (
    <button onClick={() => onClick?.(index)}>
      <p className="font-bold tracking-[0.05rem] text-[#EDF4E0] text-lg hover:text-[#5CDB94] transition-colors ease-in-out duration-75">
        {label}
      </p>
    </button>
  );
};
//#endregion

export default Navbar;
