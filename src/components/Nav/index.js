import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import myPic from '../../assets/mypic/my-pic.jpg';

function Nav(props) {
  const {
    // categories = [],
    // setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera" onClick="myPic" > 📸</span> Kristen Groller</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="header" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          {/* portfolio */}
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          {/* contact */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* resume */}
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
