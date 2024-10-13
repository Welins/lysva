import React from "react";
import Advantages from "./components/Advantages";
import Header from "./components/Header";
import Heroes from "./components/Heroes";
import About from "./components/About";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Results from "./components/Results";
import Faq from "./components/Faq";
import Contacts from "./components/Contacts";
import Info from "./components/Info";
import Footer from "./components/Footer";
import './styles.css';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Heroes />
      <Advantages />
      <About />
      <Services />
      <Tools />
      <Results />
      <Faq />
      <Contacts />
      <Info />
      <Footer />
    </div >
  );
}

export default App;
