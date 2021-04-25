import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';


const Project = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [currentPhoto, setCurrentPhoto] = useState();
    // const [photos] = useState([
    //         {
    //             name: 'e-z-Budget',
    //             description: 'Full stack group project',
    //             category: 'e-z-Budget'
    //         },
    //         {
    //             name: 'reFrain',
    //             description: 'Group project'
    //         },
    //         {
    //             name: 'e-z-Budget',
    //             description: 'Full stack group project'
    //         },
    //         {
    //             name: 'e-z-Budget',
    //             description: 'Full stack group project'
    //         },
    //     ]);


        // const currentPhotos = photos.filter((photo) => photo.category === category);
        // // const toggleModal = (image, i) => {
        //     setCurrentPhoto({ ...image, index: i })
        //     // setIsModalOpen(!isModalOpen);
        // }
    
    
        return (
            <section className="my-5" >
                <div>
                 <a href="https://github.com/ez-budget/e-z-budget/" class="grid-item e-z-Budget">e-z-Budget</a>
                <p>Group Project 2/Fullstack Program</p>
               
            </div>
            
            <a href="https://codinggroupproject1.github.io/REFRAIN/" class="grid-item REFRAIN">
                <div>
                    <h3>REFRAIN</h3>
                    <span>HTML/CSS</span>
                </div>
            </a>    
            <a href="https://kgroll.github.io/run-buddy/" class="grid-item run-buddy">
            <div>
                <h3>Run Buddy</h3>
                <span>HTML/CSS</span>
            </div>
        </a>
        <a href="https://kgroll.github.io/urban-octo-telegram/" class="grid-item Horiseon">
            <div>
                <h3>Horiseon Marketing</h3>
                <span>HTML/CSS</span>
            </div>
        </a>
           
        <a href="https://kgroll.github.io/weather-dashboard/"  class="grid-item weather-dashboard">
        <div>
            <h3>Weather Dashboard</h3>
            <span>JavasScript/HTML/CSS</span>
            </div>
        </a>  
              
        <a href="https://github.com/Kgroll/easy-e-commerce"  class="grid-item easy-e">
        <div>
            <h3>EASY-E-COMMERCE</h3>
            <span>Express.js/Sequelize/MySQL</span>
   </div>
   </a>
            </section>
        );
    };
    
            
export default Project;