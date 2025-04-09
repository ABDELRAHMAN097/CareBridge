
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Features from './Components/Pages/Features';
import About from './Components/Pages/About';
import MyComponent from './Components/Pages/MyComponent';
import TeamSection from './Components/Pages/TeamSection';
import OfferSection from './Components/Pages/OfferSection';
import Footer from './Components/Header/Footer';
import ScrollToTop from './Components/Pages/ScrollToTop';
import Privacy from './Components/Pages/PrivacyPolicy';
import ContactUs from './Components/Pages/ContactUs';
import PrivacyPopup from './Components/Pages/PrivacyPopup';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Features />
              <About />
              <MyComponent />
              <TeamSection />
              <ContactUs/>
              <OfferSection />
            </>
          }
        />
        <Route path="/About" element={
          <>
          
          <Features></Features>
          <MyComponent/>
          </>
        } />
        <Route path="/Services" element={<About></About> } />
        <Route path="/privacy" element={<Privacy/> } />
        <Route path="/privacyPopup" element={<PrivacyPopup/> } />
        <Route path="/homepage" element={<Home/> } />
        <Route path="/Contact" element={
          <>
          <ContactUs />
          </>
        } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
