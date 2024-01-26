import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navs from "./components/Navs/Navs";
import PortFolio from "./components/PortFolio/PortFolio";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonials/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Navs/>
      <About/>
      <Experience/>
      <Service/>
      <PortFolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
