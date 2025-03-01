import React from 'react';
import {
  Header,
  Hero,
  SocialLinks,
  Contact,
  Education,
  About,
  Projects,
  Footer
} from './components';

import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialLinks />
        <Contact />
        <Education />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App;
