import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {
  return (
    <div>
      <Header/>
      <Home/> 
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
      
    </div>
  );
}

export default App;

