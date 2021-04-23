import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';


function App() {
  const [categories] = useState([ 
    {
      name: '', desciption: ''},
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
      
          
            <Portfolio ></Portfolio>
        <About></About>
     
      <ContactForm></ContactForm>
      
      </main>
    </div>
     
  );
}

export default App;
