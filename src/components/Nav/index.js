import React, { useEffect, navBar } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;


  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

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
          <a className="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
            Portfolio
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
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}

      </ul>
    </navBar>
  );
}

export default Nav;