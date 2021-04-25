import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Project from './components/Project';




function App() {
  const [categories] = useState([
    {
      name: '',
      description: ''
    },

  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Header></Header>
            <Portfolio currentCategory={currentCategory}></Portfolio>            
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
