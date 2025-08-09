import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Restaurants from './pages/Restaurants';
import FloatingButton from "./components/FloatingButton";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButton />
      <BackToTop />
    </div>
  );
}

export default App;
