import React, { Suspense } from 'react';
//css
import './App.css';
//compenents
import Header from './components/Header';
import Home from './components/Home';

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
function App() {
  return (
    <Suspense fallback="loading">
      <Header />
      <Home />
    </Suspense>
  );
}

export default App;
