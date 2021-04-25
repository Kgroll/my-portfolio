import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/projects/0.jpg';

function Portfolio(props) {
  
    const currentCategory = {
      name: "Portfolio",
      description:
        "Many projects",
    };
    return (
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        {/* <p>{currentCategory.name}</p> */}
        <div className="flex-row">
            <img
              src={photo}
              alt="Project Example"
              className="img-thumbnail mx-1"
            />
        </div>
      </section>
    );
  }






//   return (
//     <section className="my-5" >
//       <h1 id="portfolio">My Portfolio</h1>
//       <div >
     

        
//       </div>
//     </section>

//   );
// }

export default Portfolio;






// function Portfolio(props) {
// //   const { currentCategory } = props;
//   const {
//     categories = [],
//     setCurrentCategory,
//     currentCategory,
//     contactSelected,
//     setContactSelected
//   } = props;


//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

  
//   return (
//     <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.description}</p>
//       <Project category={currentCategory.name} />
//       {categories.map((category) => (
//             <li
//               className={`mx-1 ${
//                 currentCategory.name === category.name && !contactSelected && 'navActive'
//                 }`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category);
//                   setContactSelected(false);
//                 }}
//               >
//                 {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//     </section>
//   );
// }
// export default Portfolio;

