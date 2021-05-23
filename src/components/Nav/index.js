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

    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          {/* <span role="img" aria-label="camera"> 📸</span> Oh Snap! */}
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
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
        {/* projects */}
        <li className="mx-2">
          <a data-testid="projects" href="#projects" onClick={() => setContactSelected(false)}>
            Projects
            </a>
        </li>
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
      </nav>
    </header>
    
  );

}

export default Nav;