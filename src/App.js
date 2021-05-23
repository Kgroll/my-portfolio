import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {
  const [projects] = useState([
    {
      name: 'My Portfolio'
    
    },

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
            {/* <Gallery currentProject={currentProject}></Gallery> */}
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
