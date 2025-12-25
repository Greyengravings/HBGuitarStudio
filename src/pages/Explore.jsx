

import React from 'react';
import Layout from '../components/Layout/Layout';
import InstrumentCard from '../components/InstrumentCard/InstrumentCard';

const Explore = () => {
  const guitarTypes = [
    {
      id: 1,
      name: "Acoustic Guitar",
      description: "Perfect for beginners, rich natural sound",
      icon: "🎵",
      audioFile: "/audio/acoustic-guitar.mp3",
      backgroundImage: "/images/acoustic.jpg",
      features: [
        "No amplification needed",
        "Rich, warm tone",
        "Great for fingerpicking",
        "Ideal for songwriting"
      ]
    },
    {
      id: 2,
      name: "Electric Guitar",
      description: "Versatile & powerful, perfect for rock & blues",
      icon: "🎵",
      audioFile: "/audio/electric-guitar.mp3",
      backgroundImage: "/images/electric.jpg",
      features: [
        "Amplified sound",
        "Wide range of effects",
        "Perfect for solos",
        "Great for modern music"
      ]
    },
    {
      id: 3,
      name: "Bass Guitar",
      description: "The foundation of rhythm section",
      icon: "🎵",
      audioFile: "/audio/bass-guitar.mp3",
      backgroundImage: "/images/bass.jpg",
      features: [
        "Deep, low-end sound",
        "Rhythm foundation",
        "Essential in bands",
        "Groove and rhythm"
      ]
    }
  ];

  const otherInstruments = [
    {
      id: 4,
      name: "Traditional Harmonium",
      description: "Classical Indian music instrument",
      icon: "🎵",
      audioFile: "/audio/harmonium.mp3",
      backgroundImage: "/images/Harmonium.jpg",
      features: [
        "Bellows operated",
        "Traditional sound",
        "Indian classical music",
        "Portable design"
      ]
    },
    {
      id: 5,
      name: "Ukulele",
      description: "Small, easy to learn, joyful instrument",
      icon: "🎵",
      audioFile: "/audio/ukulele.mp3",
      backgroundImage: "/images/ukulele.jpg",
      features: [
        "Beginner friendly",
        "Small and portable",
        "Sweet, bright sound",
        "Hawaiian origins"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/80 to-wood-dark/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Explore Music Instruments
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Listen to the beautiful sounds of different instruments and discover which one resonates with your soul
            </p>
          </div>
        </div>
      </section>

      {/* Guitar Section */}
      <section className="py-20 bg-gradient-to-b from-wood-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
              Guitar Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From acoustic warmth to electric power, explore the versatility of guitar family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guitarTypes.map((guitar) => (
              <InstrumentCard key={guitar.id} instrument={guitar} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Instruments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
              Other Instruments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore unique instruments with rich cultural heritage and joyful melodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherInstruments.map((instrument) => (
              <InstrumentCard key={instrument.id} instrument={instrument} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-white to-wood-dark text-wood-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-800">
            Choose your instrument and let our expert tutors guide you to musical excellence
          </p>
          <div className="space-x-4">
            <button className="bg-wood-medium hover:bg-wood-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book a Trial Class
            </button>
            <button className="border-2 border-white hover:text-white hover:bg-wood-dark bg-white text-wood-dark font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Explore;
