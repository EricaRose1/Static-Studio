import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PhotoGallery from './Components/PhotoGallery.js';
import ImageViewer from './Components/ImageViewer.js';
import Contact from './Components/Contact.js';
import Images from './ImageData.js';

import NavBar from './Components/NavBar.js';


import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={ <PhotoGallery Images={Images}/> } />
        <Route exact path='/ImageViewer/:index' element={ <ImageViewer/> } />
        <Route exact path='/Contact' element={ <Contact/> }/>
      </Routes>

    </div>
  );
}

export default App;
