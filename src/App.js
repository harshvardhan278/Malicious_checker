import React from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import MaliciousChecker from "./components/MaliciousChecker";
import { Container } from 'react-bootstrap';



function App() {
  return (
    <>
     <Navbar />
     <main className="py-3">
      <Container>
        <MaliciousChecker />

      </Container> 
      </main>
      <Footer />
  
    </>
  );
}

export default App;
