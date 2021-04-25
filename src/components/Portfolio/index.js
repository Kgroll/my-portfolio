import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio(props) {
  
    const currentCategory = {
      name: "Portfolio",
      description:
        "Many projects",
    };
    return (
     
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
       
        
    )
    };

export default Portfolio;
