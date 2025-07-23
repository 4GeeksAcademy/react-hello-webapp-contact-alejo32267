import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactHome } from "./components/ContactHome";
import { ContactDetails } from "./components/ContactDetails";
import { EditContact } from "./components/EditContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactHome />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
