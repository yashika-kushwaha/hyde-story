import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import FineJewelry from "./pages/FineJewelry";
import Diamonds from "./pages/Diamonds";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/fine-jewelry" element={<FineJewelry />} />
        <Route path="/diamonds" element={<Diamonds />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;