import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScene from './components/loadingscene';
import Navigation from './components/navigation';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Contactus from './components/Contactus';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the page is being refreshed
    const isRefreshed = performance.navigation.type === 1;

    // Show loading scene only on refresh
    if (isRefreshed) {
      setLoading(true);

      // Simulate loading time (you can replace this with an actual async operation)
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 3000);

      // Clean up timeout on component unmount
      return () => clearTimeout(loadingTimeout);
    } else {
      setLoading(false); // Set loading to false if it's not a refresh
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {loading ? (
          <LoadingScene onLoadingComplete={() => setLoading(false)} />
        ) : (
          <>
            <Navigation />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/aboutus' element={<Aboutus />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contactus' element={<Contactus />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
