import React, { useState } from 'react';

const SocialIcon = ({ social, tooltip, href, size = "md", children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-7 h-7", 
    lg: "w-8 h-8"
  };

  const containerClasses = `
    group relative flex items-center justify-center
    ${sizeClasses[size]} 
    rounded-lg transition-all duration-300 ease-in-out
    hover:scale-110 hover:shadow-lg
    cursor-pointer
  `;

  return (
    <div 
      className={containerClasses}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </a>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default SocialIcon;
