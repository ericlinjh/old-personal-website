import './App.scss';
import { useEffect, useState } from "react"
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import VerticalScrollNav from './components/VerticalScrollNav.jsx'
import Intro from './components/Intro.jsx'
import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='header'>
          <Intro setLoading={setLoading} />
        </motion.div>

      ): (
        <> 
          <motion.Box className="container" >
            <Header />
            <AboutMe />
            <WorkExperience />
            <Projects />
            <ContactMe />
          </motion.Box>
          <VerticalScrollNav />
        </>
      )}

        
    </AnimatePresence>
  );
}

export default App;
