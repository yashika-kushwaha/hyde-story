import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// main pages
import Home from "./pages/home/Home";
import Collections from "./pages/collections/Collections";
import FineJewelry from "./pages/fineJewelry/FineJewelry";
import Diamonds from "./pages/diamonds/Diamonds";
import About from "./pages/about/About";

// sub pages
import EngagementRings from "./pages/collections/EngagementRings";
import Necklaces from "./pages/collections/Necklaces";
import Earrings from "./pages/collections/Earrings";
import Bracelets from "./pages/collections/Bracelets";

import GoldJewelry from "./pages/fineJewelry/GoldJewelry";
import SilverJewelry from "./pages/fineJewelry/SilverJewelry";

import LooseDiamonds from "./pages/diamonds/LooseDiamonds";
import DiamondRings from "./pages/diamonds/DiamondRings";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/fine-jewelry" element={<FineJewelry />} />
        <Route path="/diamonds" element={<Diamonds />} />
        <Route path="/about" element={<About />} />

        {/* Collections Pages */}
        <Route path="/collections/engagement-rings" element={<EngagementRings />} />
        <Route path="/collections/necklaces" element={<Necklaces />} />
        <Route path="/collections/earrings" element={<Earrings />} />
        <Route path="/collections/bracelets" element={<Bracelets />} />

        {/* Fine Jewelry Pages */}
        <Route path="/fine-jewelry/gold" element={<GoldJewelry />} />
        <Route path="/fine-jewelry/silver" element={<SilverJewelry />} />

        {/* Diamond Pages */}
        <Route path="/diamonds/loose-diamonds" element={<LooseDiamonds />} />
        <Route path="/diamonds/diamond-rings" element={<DiamondRings />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;