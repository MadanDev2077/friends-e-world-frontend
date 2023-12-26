
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Whatspp from './components/Whatsapp/Whatspp';
import Footer from './components/Footer/Footer';
import What from './components/What/What';
import Navbar from './components/Navbar/Navbar';
import "aos/dist/aos.css";
import Aos from 'aos';
import React, { useState, useEffect } from 'react';
import Map from './components/Map/Map';
import ResNav from './components/resNav/ResNav';
import Ma from './components/m/Ma';
import axios from 'axios';


function App() {
  // const [open, setOpen] = useState(true);
  const [messages, setmMssages] = useState([]);

  useEffect(() => {
    // axios.get('http://127.0.0.1/mayili/test')
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    axios.get('http://localhost/mayili/test')
      .then(response => {
        setmMssages(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    Aos.init({ duration: 1500 })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setmMssages(true);
  }
  return (
    <div className="app_container">

      <Navbar />
      <Banner />
      <Whatspp />
      <form onSubmit={sendMessage} action="post">
        Send Message
        <button type="submit">Submit</button>
      </form>
      {messages.map((number, index) => (
        <li key={index}>{number.name}</li>
      ))}
      <About ani="fade-right" />
      <What ani="fade-left" />
      <Services ani="fade-up" />
      <Contact />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}

export default App;
