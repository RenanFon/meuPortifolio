import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
