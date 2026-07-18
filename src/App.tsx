import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#142C4E]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
