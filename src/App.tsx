import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Header } from './components/Header';
import './styles/globals.css';
import './styles/animations.css';

function App() {
  return (
    <BrowserRouter basename="/meuPortifolio">
      <div className="app">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
