import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactDetails } from './components/ContactDetails';
import { ContactHome } from './components/ContactHome'; // ejemplo

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactHome />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/edit-contact" element={<EditContact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
