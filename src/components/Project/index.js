import React from 'react';

const Project = () => {

    return (
        <div className="flex-row" id="projects">
            <h2>Projects</h2>
            <div>
                <a href="https://currenseed.herokuapp.com/" class="grid-item currenseed">
                    <h3>CurrenSeed</h3>
                    <span>Final Fullstack Project</span>
                </a>
            </div>
            <div>
                <a href="//ez-budget10.herokuapp.com/" class="grid-item e-z-Budget">
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
                    <span>JavasScript/
            HTML/CSS</span>
                </a>
            </div>
        </div>
    );
}


export default Project;