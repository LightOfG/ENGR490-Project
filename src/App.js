import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Calculations from './components/Calculations';
import { AboutUs } from './components/AboutUs';


function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <Landing />

        <Calculations/>

        <AboutUs />

        <Footer />

      </div>
    </ChakraProvider>
  );
}

export default App;
