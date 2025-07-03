
import TopBar from './components/topbar'
import Navbar from './components/navbar'
import HeroCarousel from './components/Carousel';
import ServicesSection from "./components/ServicesSection";
import ImpactSection from './components/Impact';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroCarousel />
      <ServicesSection />
      <ImpactSection />
      <Footer />
    </>
  );
};

export default App;

