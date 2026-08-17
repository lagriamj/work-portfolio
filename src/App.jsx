import "./App.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Service from "./sections/Service";
import Tools from "./sections/Tools";
import Works from "./sections/Works";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Cursor />
      <Navbar />
      <main>
        <Home />
        <Works />
        <About />
        <Service />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
