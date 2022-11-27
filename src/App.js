import './App.scss';
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'
import { Box } from '@mui/material';

function App() {
  return (
    <main>
      <Box id="container">
        <Header />
        <AboutMe />
      </Box>
    </main>
  );
}

export default App;
