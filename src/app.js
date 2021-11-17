import React, { useEffect } from "react";
import preLoad from "../src/components/pre";
import Navbar from "./components/navBar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import footer from "./components/footer";
import resume from "./components/resume/resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style";
import "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import scrollToTop from "./components/scrollToTop";

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
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <scrollToTop />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/project" exact component={Projects} />
                    <Route path="/about" exact component={About} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;