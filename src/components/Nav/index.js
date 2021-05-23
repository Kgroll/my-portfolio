import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {
    categories = [],
    setCurrentProject,
    contactSelected,
    currentProject,
    setContactSelected,
  } = props;


  useEffect(() => {
    document.title = capitalizeFirstLetter(currentProject.name);
  }, [currentProject]);

  return (

    <navBar>
      <ul className="flex-row" >
        <li className="mx-2">
          <a className="header" href="#about" onClick={() => setContactSelected(false)}>
            About me
            </a>
        </li>
        {/* portfolio */}
        <li className="mx-2">
          <a className="project" href="#project" onClick={() => setContactSelected(false)}>
            Project
            </a>
        </li>
        {/* resume */}
        <li className="mx-2">
          <a className="resume" href="#resume" onClick={() => setContactSelected(false)}>
            Resume
            </a>
        </li>
        {/* contact */}
        <li className="mx-2">
          <a className="contact" href="#contact" onClick={() => setContactSelected(true)}>
            Contact Me
            </a>
        </li>
        {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li> */}
        {categories.map((project) => (
          <li
            className={`mx-1 ${currentProject.name === project.name && !contactSelected && 'navActive'
              }`}
            key={project.name}
          >
            <span
              onClick={() => {
                setCurrentProject(project);
                setContactSelected(false);
              }}
            >
              {capitalizeFirstLetter(project.name)}
            </span>
          </li>
        ))}

      </ul>
    </navBar>
  );
}

export default Nav;