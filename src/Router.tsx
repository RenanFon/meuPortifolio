import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Technologies } from './pages/Technologies';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/tecnologias" element={<Technologies />} />
      <Route path="/formacao" element={<Education />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}
