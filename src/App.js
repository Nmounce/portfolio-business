import React, {Component} from 'react';

import Nav from './components/nav';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
import resumeData from './components/resumeData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav resumeData={resumeData} />
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Projects resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Contact resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;