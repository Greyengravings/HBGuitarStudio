import React from 'react';
import profileImage from '../../assets/images/profile.png';

const AboutMaster = () => {
  const masterInfo = {
    name: "Hrushikesh Bhishnurkar",
    title: "Master Music Instructor",
    experience: "8+ Years",
    specialties: ["Guitar", "Harmonium", "Music Theory","Ukulele","Vocal Training"],
    description: "Welcome to my musical space. I’m a professional musician and music educator with 15+ years of experience in the music industry and 8+ years of teaching experience, spanning classical and contemporary music I specialize in playing and teaching multiple musical instruments, with a strong focus on correct technique, traditional methods, and musical discipline. I believe music should be learned the right way—without shortcuts—while respecting the craftsmanship and intent behind every instrument.Over the years, I’ve had the privilege of mentoring 1,000+ students, helping them build a solid musical foundation and confident performance skills. Alongside teaching, I actively perform through live café shows, karaoke sessions, jamming collaborations, and my own concert performances, which keeps my approach practical and performance-driven.I offer music tutoring in Amravati, Nagpur, and Vadodara, and perform across multiple cities. Whether you’re a beginner or an advanced learner, my goal is to help you develop an authentic, lifelong connection with music.",
    achievements: [
      "Awarded 'Best Music Teacher' by Music Education Society",
      "Published 3 instructional books on Indian classical music",
      "Performed at major music festivals across India",
      "Mentored over 500 successful students"
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-wood-light to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            Meet Your Master
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from an experienced musician dedicated to nurturing your musical journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Master Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-full shadow-2xl">
              {/* Master photo placeholder */}
              <div className="aspect-square bg-gradient-to-br from-wood-medium to-wood-dark flex items-center justify-center">
                <img
                  src={profileImage}
                  alt={masterInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div className="text-center" style={{display: 'none'}}>
                  <div className="w-32 h-32 bg-wood-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-6xl">🎼</span>
                  </div>
                  <h3 className="text-3xl font-bold text-wood-dark mb-2">
                    {masterInfo.name}
                  </h3>
                  <p className="text-wood-dark/80">
                    {masterInfo.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-wood-dark text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-bold text-lg">{masterInfo.experience}</span>
                <span className="text-sm block">Experience</span>
              </div>
            </div>
          </div>

          {/* Master Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-wood-dark mb-4">
                {masterInfo.name}
              </h3>
              <p className="text-xl text-wood-medium font-semibold mb-4">
                {masterInfo.title}
              </p>
              
              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {masterInfo.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-wood-light text-wood-dark rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-black-700 leading-relaxed mb-6">
                {masterInfo.description}
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Achievements</h4>
              <ul className="space-y-2">
                {masterInfo.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-wood-medium mr-2 mt-1">🏆</span>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-wood-dark hover:bg-wood-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-115 shadow-lg">
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMaster;
