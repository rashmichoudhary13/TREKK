import {useState} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import Explore from './components/Explore';
import Guiding from './components/Guiding';
import Travel from './components/Travel';
import Footer from './components/Footer';

function App() {
  const [scaleCursor, setScaleCursor] = useState(1);
  return (
    <div>
     <Cursor scale={scaleCursor}/>
     <Navbar setScaleCursor={setScaleCursor}/>
     <Hero/>
     <div className="mx-3 md:mx-6">
       <Explore setScaleCursor={setScaleCursor}/>
       <Guiding setScaleCursor={setScaleCursor}/>
       <Travel/>
       <Footer/>
     </div>
    
  
    </div>
  )
}

export default App
