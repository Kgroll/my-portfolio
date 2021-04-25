import React from 'react';

const Project = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState();
  // const [photos] = useState([
  //     {
  //          name: 'e-z-Budget', 
  //          category: 'project',
  //          description: '<a href="https:github.com/ez-budget/e-z-budget/<a>'
  //     },
  //     { 
  //       name: 'REFRAIN', 
  //       category: 'project',
  //       description: 'Refrain' 
  //     },
  //     { 
  //       name: 'Run-Buddy', 
  //       category: 'project',
  //       description: 'Run Buddy' 
  //     },
  //     { 
  //       name: 'Horiseon', 
  //       category: 'project',
  //       description: 'Horiseon'
  //      },
  //     {
  //       name: 'Weather-Dashboard', 
  //       category: 'project',
  //       description: 'Weather'
  //     },
  //     {
  //       name: 'Easy-e-commerce', 
  //       category: 'project',
  //       description: 'e-commerce'
  //     },
  // ]);   

  return (
    <section className="grid-container" id="projects">

      <div>
        <a href="https:github.com/ez-budget/e-z-budget/" class="grid-item e-z-Budget">
          <h3>E-Z-BUDGET</h3>
          <span>Group Project 2/Fullstack Program</span>
        </a>
      </div>

      <div>
        <a href="https:codinggroupproject1.github.io/REFRAIN/" class="grid-item REFRAIN">
          <h3>REFRAIN</h3>
          <span>HTML/CSS</span>
        </a>
      </div>

      <div>
        <a href="https:kgroll.github.io/run-buddy/" class="grid-item run-buddy">
          <h3>RUN BUDDY</h3>
          <span>HTML/CSS</span>
        </a>
      </div>

      <div>
        <a href="https:kgroll.github.io/urban-octo-telegram/" class="grid-item Horiseon">
          <h3>HORISEON MARKETING</h3>
          <span>HTML/CSS</span>
        </a>
      </div>

      <div>
        <a href="https:kgroll.github.io/weather-dashboard/" class="grid-item weather-dashboard">
          <h3>WEATHER DASHBOARD</h3>
          <span>JavasScript/HTML/CSS</span>
        </a>
      </div>

      <div>
        <a href="https:github.com/Kgroll/easy-e-commerce" class="grid-item easy-e">
          <h3>EASY-E-COMMERCE</h3>
          <span>Express.js/Sequelize/MySQL</span>
        </a>
      </div>


    </section>
  );
}


export default Project;