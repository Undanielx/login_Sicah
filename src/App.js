import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import CarouselComponent from './Carousel';

function App() {
  return (
    <div className="app-container">
      <div className="left-side">
        <CarouselComponent />
      </div>
      <div className="right-side">
      <LoginPage />
        
      </div>
    </div>
  );
}

export default App;
