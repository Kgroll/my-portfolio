import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';
// import Modal from './components/Modal';
import Header from './components/Header';

function App() {
  const [projects] = useState([
    {
      name: 'E-Z-Budget',
      image: './assets/large/projects/0.jpg', 
      link: 'https://ez-budget10.herokuapp.com/'
    },
  //   { name: 'portraits', description: 'Portraits of people in my life' },
  //   { name: 'food', description: 'Delicious delicacies' },
  //   { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
    ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <Header></Header>
      <main>
        {!contactSelected ? (
          <>
          <About></About>
            <Gallery currentProject={currentProject}></Gallery>
            <Project></Project>            
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
          <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
