import React, { useEffect } from 'react';
import PortfolioList from '../PortfolioList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
//   const { currentCategory } = props;
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;


  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PortfolioList category={currentCategory.name} />
      {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
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
    </section>
  );
}
export default Portfolio;

