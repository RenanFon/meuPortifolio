import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Technologies } from './pages/Technologies';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}
