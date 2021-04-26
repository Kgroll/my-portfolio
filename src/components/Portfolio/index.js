import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio() {

  const currentCategory = {
    name: "Portfolio",
    description:
      "Many projects",
  };
  return (

    <h1 id="portfolio">{capitalizeFirstLetter(currentCategory.name)}</h1>


  )
};

export default Portfolio;
