import { useEffect, useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className= {`app ${isLoaded ? "loaded" : ""} `}>
    <Navbar/>
    <Hero/>
    <Projects/>
    {/* <Contact/> */}
    <>
    <p className='footer'>&copy; 2025 Roxanna Alburquerque</p>
    </>
    </div>
  );
}

export default App;
