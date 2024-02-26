import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Chapters from './pages/Chapters';
import Contact from './pages/Contact';

/* Notes 2/25:
- Order of development: 
  1. Build all pages of website (visuals)
  2. Add functionality (make sure everything works)
  3. Make responsive
  4. Add animations
*/ 

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
        <Route exact path="/about" element={<About></About>}/>
        <Route exact path="/chapters" element={<Chapters></Chapters>}/>
        <Route exact path="/events" element={<Events></Events>}/>
        <Route exact path="/contact-us" element={<Contact></Contact>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
