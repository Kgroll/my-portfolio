import React, { useState } from 'react';
import Modal from '../Modal';



const PortfolioList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPortfolio, setCurrentPortfolio] = useState();
    const [Portfolios] = useState([
        {
            name: 'e-z-Budget',
            description: 'Full stack group project'
        },
        {
            name: 'reFrain',
            description: 'Group project'
        },
        {
            name: 'e-z-Budget',
            description: 'Full stack group project'
        },
        {
            name: 'e-z-Budget',
            description: 'Full stack group project'
        },
    ]);
        
    const currentPortfolios = Portfolios.filter((Portfolio) => Portfolio.category === category);
    const toggleModal = (image, i) => {
        setCurrentPortfolio({ ...image, index: i })
        setIsModalOpen(!isModalOpen);
    }
        
    return (
        <div>
            {isModalOpen && (
            <Modal currentPortfolio={currentPortfolio} onClose={toggleModal}/>
            )}
            <div className="flex-row">
                {currentPortfolios.map((image, i) => (
                    <img
                        src={require(`../../assets/projects/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};
export default PortfolioList;
/* <section class="page-section" id="projects">
<h2>What I've Done So Far</h2>
<div class="grid-container">

<a href="https://github.com/ez-budget/e-z-budget/" class="grid-item e-z-Budget">
    <div>
        <h3>e-z-Budget</h3>
        <span>Group Project 2/Fullstack Program</span>
    </div>
    </a> 
    
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
</a> */
