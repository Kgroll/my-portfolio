import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentProject } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <Project project={currentProject.name} />
    </section>
  );
}
export default Gallery;
