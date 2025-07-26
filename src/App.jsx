import './App.css'
import Aboutme from './component/Aboutme'
import Banner from './component/Banner'
import Contact from './component/Contact'
import Header from './component/Header'
import Skills from './component/Skills'
import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);

    // Use localStorage to remember user's preference
    useEffect(() => {
        const savedMode = localStorage.getItem('dark-mode');
        if (savedMode === 'enabled') {
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        if (darkMode) {
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            localStorage.setItem('dark-mode', 'enabled');
        }
    };
  

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Banner/>
    <Aboutme/>
    <Skills/>
    <Contact darkMode={darkMode}/>
    </div>
  )
}

export default App
