
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Video from './components/Video';
import Work from "./components/Work"
import Models from './components/Models';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Video/>
      <Work/>
      <Models/>
      <Footer/>
      
    </div>
  );
}

export default App;
