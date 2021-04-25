import React from 'react';
// import myPic from '../../assets/mypic/my-pic.png';

function Portfolio() {
  return (
    <section className="my-5" >
      <h1 id="portfolio">My Portfolio</h1>
      <div >
     

        
      </div>
    </section>

  );
}

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

