import { MotionConfig } from "framer-motion";
import "./App.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Tools from "./sections/Tools";
import Works from "./sections/Works";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg text-ink">
        <Cursor />
        <Navbar />
        <div className="lg:pl-56">
          <main>
            <Home />
            <Experience />
            <Works />
            <About />
            <Tools />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
