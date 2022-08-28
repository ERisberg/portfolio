import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default ProjectItem;
