import React, { useEffect, useState } from 'react';

const SpinningCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoSpaces = [
    {
      id: 1,
      title: "Guitar Studio",
      description: "Professional guitar lessons",
      image: "/images/guitar-studio.jpg",
      delay: "0s"
    },
    {
      id: 2,
      title: "Harmonium Room",
      description: "Traditional harmonium training",
      image: "/images/harmonium-room.jpg",
      delay: "0.5s"
    },
    {
      id: 3,
      title: "Practice Space",
      description: "Individual practice rooms",
      image: "/images/practice-space.jpg",
      delay: "1s"
    },
    {
      id: 4,
      title: "Recording Studio",
      description: "Professional recording setup",
      image: "/images/recording-studio.jpg",
      delay: "1.5s"
    },
    {
      id: 5,
      title: "Group Sessions",
      description: "Collaborative music sessions",
      image: "/images/group-session.jpg",
      delay: "2s"
    },
    {
      id: 6,
      title: "Performance Hall",
      description: "Live performance venue",
      image: "/images/performance-hall.jpg",
      delay: "2.5s"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSpaces.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [videoSpaces.length]);


  return (
    <section className="py-32 bg-gradient-to-b from-wood-light to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            Explore Our Studios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step into our world-class facilities designed to inspire and nurture your musical talents
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex justify-center items-center overflow-hidden py-8">
            <div className="flex space-x-12 transform transition-transform duration-700 ease-in-out">
              {videoSpaces.map((space, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + videoSpaces.length) % videoSpaces.length;
                const isNext = index === (currentIndex + 1) % videoSpaces.length;

                return (
                  <div
                    key={space.id}
                    className={`flex-shrink-0 transition-all duration-500 ${
                      isActive 
                        ? 'w-80 h-80 transform scale-110 z-10' 
                        : isPrev || isNext 
                        ? 'w-64 h-64 transform scale-95 opacity-70' 
                        : 'w-48 h-48 transform scale-90 opacity-50'
                    }`}
                    style={{ animationDelay: space.delay }}
                  >

                    <div className={`relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-white ${
                      isActive ? 'spinning-card' : ''
                    }`}>
                      {/* Placeholder for actual images */}
                      <div className="w-full h-full bg-gradient-to-br from-wood-light to-wood-medium flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🎵</div>
                          <h3 className="text-xl font-bold text-wood-dark mb-2">
                            {space.title}
                          </h3>
                          <p className="text-sm text-wood-dark/80">
                            {space.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Overlay for active card */}
                      {isActive && (
                        <div className="absolute inset-0 bg-wood-dark/20 flex items-center justify-center">
                          <button className="bg-white/90 hover:bg-white text-wood-dark font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                            Explore
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {videoSpaces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-wood-dark scale-125' 
                    : 'bg-wood-light hover:bg-wood-medium'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpinningCarousel;
