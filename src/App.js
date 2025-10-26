import './App.css'

import { Routes, Route, useNavigate } from "react-router-dom";

import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

import LandingPage from '../src/Pages/LandingPage';
import ReservationPage from '../src/Pages/ReservationPage';


function App() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };


  

  return (
    <>
      {/* Header section */}
      <header className="">
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage navigateFunc={handleNavigation} />} />
          <Route path="/reservation" element={<ReservationPage navigateFunc={handleNavigation} />} />
        </Routes>
      </main>

      {/* Footer section */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
