import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, WorkData } from './container';
import { NavBar } from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
      <NavBar />
      {/*<Header />*/}
      <About />
      <Work />
      <WorkData />
      <Skills />
      {/*<Testimonial />*/}
      <Footer />
    </div>
  );
}

export default App;