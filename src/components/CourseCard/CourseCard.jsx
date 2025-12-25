import React from 'react';

const CourseCard = ({ course }) => {
  const {
    title,
    type,
    level,
    duration,
    price,
    description,
    features,
    icon,
    color
  } = course;

  return (
    <div className="bg-white rounded-[40px] shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      {/* Card Header */}
      <div className={`h-32 ${color} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative z-10 text-center">
          <div className="text-6xl mb-2">{icon}</div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        {/* Floating elements */}
        <div className="absolute top-2 right-2 text-white/30 text-2xl floating-animation">
          ♪
        </div>
        <div className="absolute bottom-2 left-2 text-white/30 text-xl floating-animation" style={{animationDelay: '1s'}}>
          ♫
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Course Type and Level */}
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 bg-wood-light text-wood-dark rounded-full text-sm font-medium">
            {type}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            {level}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">What You'll Learn:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="text-wood-medium mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration and Price */}
        <div className="flex justify-between items-center mb-6 p-4 bg-wood-light/30 rounded-lg">
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
            <p className="font-semibold text-wood-dark">{duration}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Price</p>
            <p className="font-bold text-2xl text-wood-dark">₹{price}</p>
            <p className="text-xs text-gray-500">per month</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-wood-medium hover:bg-wood-dark text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
