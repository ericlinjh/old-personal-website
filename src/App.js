import './App.scss';
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import { Box } from '@mui/material';

function App() {
  return (
    <main>
      <Header />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <ContactMe />
    </main>
  );
}

export default App;
