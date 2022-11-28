import './App.scss';
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import VerticalScrollNav from './components/VerticalScrollNav.jsx'
import { Box } from '@mui/material';

function App() {
  return (
    <main>
      <Box className="container">
        <Header />
        <AboutMe />
        <WorkExperience />
        <Projects />
        <ContactMe />
      </Box>
      <VerticalScrollNav />
    </main>
  );
}

export default App;
