
import React, { useState } from 'react';

const ScrollingCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const videoSpaces = [
    {
      id: 1,
      title: "Guitar Studio",
      description: "Professional guitar lessons",
      icon: "🎸",
      color: "from-wood-light to-wood-medium"
    },
    {
      id: 2,
      title: "Harmonium Room",
      description: "Traditional harmonium training",
      icon: "🎹",
      color: "from-wood-light to-wood-medium"
    },
    {
      id: 3,
      title: "Practice Space",
      description: "Individual practice sessions",
      icon: "🎵",
      color: "from-wood-light to-wood-medium"
    },
    {
      id: 4,
      title: "Recording Studio",
      description: "Professional recording setup",
      icon: "🎤",
      color: "from-wood-light to-wood-medium"
    },
    {
      id: 5,
      title: "Group Sessions",
      description: "Collaborative music making",
      icon: "🎶",
      color: "from-wood-light to-wood-medium"
    },
    {
      id: 6,
      title: "Theory Classes",
      description: "Music theory and composition",
      icon: "📚",
      color: "from-wood-light to-wood-medium"
    }
  ];

  const scrollLeft = () => {
    setScrollPosition(prev => Math.max(prev - 320, 0));
  };


  const scrollRight = () => {
    const cardWidth = 344; // 320px card + 24px gap
    const maxScroll = Math.max(0, (videoSpaces.length * cardWidth) - (window.innerWidth - 160));
    setScrollPosition(prev => Math.min(prev + cardWidth, maxScroll));
  };

  const scrollToCard = (index) => {
    const cardWidth = 344;
    setScrollPosition(index * cardWidth);
  };


  return (
    <section className="py-32 bg-gradient-to-b from-white to-wood-light relative">

      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
            Our Learning Spaces
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our state-of-the-art facilities designed to inspire your musical journey
          </p>
        </div>


        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-colors duration-200 shadow-lg"
          >
            <svg className="w-6 h-6 text-wood-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <h3 className="text-2xl font-bold text-wood-dark">
            Interactive Learning Spaces
          </h3>

          <button
            onClick={scrollRight}
            className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-colors duration-200 shadow-lg"
          >
            <svg className="w-6 h-6 text-wood-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Scrolling Cards Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out space-x-8"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {/* Cards */}
            {videoSpaces.map((space) => (
              <div
                key={space.id}
                className="flex-shrink-0 w-80 h-96 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden group"              
                >
                <div className={`w-full h-full bg-gradient-to-br ${space.color} p-6 flex flex-col justify-between relative overflow-hidden`}>

                  {/* Background SVG Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="absolute top-4 right-4 w-24 h-24 text-wood-dark transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                    <svg className="absolute bottom-4 left-4 w-16 h-16 text-wood-medium transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3l3.09 6.26L22 10.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 15.14 2 10.27l6.91-1.01L12 3z"/>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{space.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-wood-dark mb-2">
                      {space.title}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {space.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="flex items-center justify-between">
                    <div className="text-wood-dark font-semibold">
                      Learn More
                    </div>
                    <div className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center group-hover:bg-white/60 transition-colors duration-300">
                      <svg className="w-4 h-4 text-wood-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>

        {/* Floating Music Notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 text-2xl text-wood-medium animate-float">🎵</div>
          <div className="absolute top-40 right-20 text-3xl text-wood-dark animate-float-delayed">🎶</div>
          <div className="absolute bottom-40 left-1/4 text-2xl text-wood-medium animate-float">🎼</div>
          <div className="absolute bottom-20 right-1/3 text-3xl text-wood-dark animate-float-delayed">🎵</div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingCarousel;
