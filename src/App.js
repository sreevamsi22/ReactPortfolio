import React from 'react';
import Header from './Header';
import About from './About';  
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <Footer/>

    </div>
  );
}

export default App;
