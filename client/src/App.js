import React from 'react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box } from '@chakra-ui/react';
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Box>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </Box>
    </BrowserRouter>
  );
}

export default App;
