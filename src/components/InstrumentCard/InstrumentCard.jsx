import React, { useState, useRef } from 'react';

const InstrumentCard = ({ instrument }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-[40px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">

      <div className="aspect-square bg-gradient-to-br from-wood-light to-wood-medium p-6 flex flex-col justify-between relative overflow-hidden">

        {/* Background Content (Image or Video) */}
        {instrument.backgroundImage ? (
          <div className="absolute inset-0 opacity-30">
            <img 
              src={instrument.backgroundImage} 
              alt={`${instrument.name} background`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : instrument.backgroundVideo ? (
          <div className="absolute inset-0 opacity-40">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={instrument.backgroundVideo} type="video/mp4" />
            </video>
          </div>
        ) : (
          /* Fallback SVG Pattern */
          <div className="absolute inset-0 opacity-5">
            <svg className="absolute top-4 right-4 w-20 h-20 text-wood-dark transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <svg className="absolute bottom-4 left-4 w-12 h-12 text-wood-medium transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3l3.09 6.26L22 10.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 15.14 2 10.27l6.91-1.01L12 3z"/>
            </svg>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">{instrument.icon}</span>
          </div>
          <h3 className="text-2xl font-bold text-wood-dark mb-2">
            {instrument.name}
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            {instrument.description}
          </p>
        </div>

        {/* Audio Player */}
        <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-4">
          <audio
            ref={audioRef}
            src={instrument.audioFile}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            preload="metadata"
          />
          
          {/* Play/Pause Button */}
          <div className="flex items-center justify-center mb-3">
            <button
              onClick={togglePlayPause}
              className="w-12 h-12 bg-white/40 hover:bg-white/60 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              {isPlaying ? (
                <svg className="w-6 h-6 text-wood-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-wood-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-wood-dark font-medium">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <span className="text-sm text-wood-dark font-medium">
              {formatTime(duration)}
            </span>
          </div>

          {/* Audio Status */}
          <div className="text-center mt-2">
            <p className="text-xs text-wood-dark/80">
              {isPlaying ? 'Now Playing' : 'Click to Play Sample'}
            </p>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="p-6">
        <h4 className="text-lg font-semibold text-wood-dark mb-3">Key Features</h4>
        <ul className="space-y-2">
          {instrument.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-wood-medium mr-2 mt-1">✓</span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Action Button */}
        <div className="mt-6">
          <button className="w-full bg-wood-medium hover:bg-wood-dark text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Learn This Instrument
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstrumentCard;
