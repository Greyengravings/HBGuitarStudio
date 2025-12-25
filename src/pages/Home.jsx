
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import VideoHero from '../components/VideoHero/VideoHero';

import ScrollingCarousel from '../components/SpinningCarousel/ScrollingCarousel';
import AboutMaster from '../components/AboutMaster/AboutMaster';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col wood-texture">
      <Header />
      <main className="flex-grow">
        <VideoHero />
        <ScrollingCarousel />
        <AboutMaster />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
