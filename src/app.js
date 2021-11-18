import React, { useState, useEffect } from "react";
import './app.css';
import Preload from "../src/components/pre";
import Navbar from "./components/navBar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import Resume from "./components/resume";
import { BrowserRouter as Router} from "react-router-dom";
import "./css/about.css";
import "./css/footer.css";
import "./css/main.css";
import "./css/home.css";
import "./css/index.css";
import "./css/navbar.css";
import "./css/preload.css";
import "./css/projects.css";
import "./css/resume.css";
import "./css/scrollbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/scrollToTop";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        updateLoad(false);
      }, 1200);
      return () => clearTimeout(timer);
    }, []);

    return (
      <Router>
        <Preload load={load} />
        {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
        <Navbar />
        <ScrollToTop />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Footer />
      </Router>
    );
  }
  
  export default App;