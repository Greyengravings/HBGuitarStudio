import React from 'react';

const VideoHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/guitar.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Musical Journey
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Experience the joy of music with our expert tutors. From guitar to harmonium, 
            unlock your potential and let your soul sing.
          </p>
          <div className="space-x-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button className="hover:bg-wood-medium bg-wood-dark hover:text-wood-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Learning
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-wood-dark font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Floating Musical Notes Animation */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="floating-animation" style={{ animationDelay: '0s' }}>
          <span className="absolute top-1/4 left-1/4 text-white/20 text-4xl">♪</span>
        </div>
        <div className="floating-animation" style={{ animationDelay: '2s' }}>
          <span className="absolute top-1/3 right-1/4 text-white/20 text-3xl">♫</span>
        </div>
        <div className="floating-animation" style={{ animationDelay: '4s' }}>
          <span className="absolute bottom-1/3 left-1/3 text-white/20 text-5xl">♪</span>
        </div>
        <div className="floating-animation" style={{ animationDelay: '1s' }}>
          <span className="absolute bottom-1/4 right-1/3 text-white/20 text-3xl">♬</span>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
