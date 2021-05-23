import React, { useState } from 'react';
import Modal from '../Modal';

const Project = ({ name }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        // {   id: 1,
        //     name: 'CurrenSeed',            
        //     image : '',
        // },
        {
            name: 'E-Z-Budget',
           
            // link: 'ez-budget10.herokuapp.com/'
        },
        // {
        //     name: 'RefRain',
        //     name: 'projects',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        // },
        // {
        //     name: 'Run Buddy',
        //     name: 'projects',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        // },
        // {
        //     name: 'Horiseon',
        //     name: 'projects',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        // },
        // {
        //     name: 'Weather Dashboard',
        //     name: 'projects',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        // },     
        // {
        //     name: 'Pug smile',
        //     name: 'projects',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        // }        
    ]);

    const currentProjects = projects.filter((project) => project.name === name);
    const toggleModal = (image, i) => {
        setCurrentProject({ ...image, index: i })
        setIsModalOpen(!isModalOpen);
    }


    return (
        <div>
            {isModalOpen && (
            <Modal currentProject={currentProject} onClose={toggleModal}/>
            )}
            <div className="flex-row">
                {currentProjects.map((image, i) => (
                    <img
                        src={require(`../../assets/large/${name}/${i}.jpg`).default}
                        alt= ""
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        // key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
