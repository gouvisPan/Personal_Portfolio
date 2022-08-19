import React from 'react'
import About from '../../components/about/About';
import Header from '../../components/header/Header';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';

const Home = () => {
  return (
    <div className="App">
      <Header />
  
      <About />
      <Projects/>
      <Contact />
    </div>
  )
}

export default Home