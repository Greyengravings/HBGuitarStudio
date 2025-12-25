import React from 'react';
import Layout from '../components/Layout/Layout';
import CourseCard from '../components/CourseCard/CourseCard';

const Courses = () => {
  const courses = [
    {
      title: "Guitar Fundamentals",
      type: "Beginner",
      level: "Beginner",
      duration: "3 Months",
      price: "4,200",
      description: "Start your musical journey with our comprehensive guitar fundamentals course. Learn basic chords, strumming patterns, and your first songs.",
      features: [
        "Basic chord progressions",
        "Right and left hand techniques",
        "Simple songs and melodies",
        "Music reading basics",
        "Practice routine development"
      ],
      icon: "🎸",
      color: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      title: "Advanced Guitar Mastery",
      type: "Advanced",
      level: "Intermediate",
      duration: "6 Months",
      price: "12,000",
      description: "Master advanced guitar techniques including fingerpicking, improvisation, and complex chord progressions. Perfect for intermediate players.",
      features: [
        "Advanced fingerpicking patterns",
        "Guitar improvisation techniques",
        "Complex chord progressions",
        "Solo and lead guitar skills",
        "Performance techniques"
      ],
      icon: "🎸",
      color: "bg-gradient-to-br from-amber-600 to-red-600"
    },
    {
      title: "Harmonium Basics",
      type: "Traditional",
      level: "Beginner",
      duration: "4 Months",
      price: "7,000",
      description: "Learn the traditional Indian harmonium with proper sitting posture, hand positions, and basic ragas. Perfect for beginners.",
      features: [
        "Proper sitting posture and hand position",
        "Basic shruti (tuning) techniques",
        "Simple raga practice",
        "Traditional playing techniques",
        "Basic music theory"
      ],
      icon: "🎹",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Harmonium Intermediate",
      type: "Traditional",
      level: "Intermediate",
      duration: "5 Months",
      price: "8,500",
      description: "Progress to intermediate level with advanced ragas, accompaniment techniques, and solo performance skills.",
      features: [
        "Advanced raga systems",
        "Accompaniment for vocals",
        "Solo performance techniques",
        "Complex rhythmic patterns",
        "Traditional compositions"
      ],
      icon: "🎹",
      color: "bg-gradient-to-br from-green-600 to-blue-600"
    },
    {
      title: "Music Theory Fundamentals",
      type: "Theory",
      level: "All Levels",
      duration: "2 Months",
      price: "6,550",
      description: "Understand the language of music with comprehensive music theory covering scales, chords, progressions, and composition basics.",
      features: [
        "Scales and modes",
        "Chord construction and progressions",
        "Rhythm and time signatures",
        "Basic composition principles",
        "Ear training exercises"
      ],
      icon: "🎵",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      title: "Complete Musician Package",
      type: "Comprehensive",
      level: "All Levels",
      duration: "8 Months",
      price: "6,500",
      description: "Our most comprehensive course combining guitar, harmonium, and music theory for the complete musical education.",
      features: [
        "All instruments included",
        "Personalized lesson plans",
        "Performance opportunities",
        "Advanced theory application",
        "Monthly progress assessments"
      ],
      icon: "🎼",
      color: "bg-gradient-to-br from-rose-500 to-pink-600"
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
              Our Courses
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover your perfect musical path with our expertly designed courses. 
              From beginner to advanced, we have the right course for you.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gradient-to-b from-wood-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
              Choose Your Musical Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each course is carefully crafted to provide comprehensive learning experiences
              tailored to different skill levels and musical interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Course Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
              Course Types Explained
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guitar Courses */}
            <div className="bg-wood-light/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-wood-medium to-wood-dark rounded-full flex items-center justify-center text-white text-3xl mr-4">
                  🎸
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-wood-dark">Guitar Courses</h3>
                  <p className="text-wood-medium">Acoustic & Electric</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Guitar Fundamentals</h4>
                  <p className="text-gray-600 text-sm">
                    Perfect for absolute beginners. Learn basic chords, strumming patterns, and play your first songs within weeks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Advanced Guitar Mastery</h4>
                  <p className="text-gray-600 text-sm">
                    For intermediate players ready to master advanced techniques like fingerpicking, improvisation, and complex solos.
                  </p>
                </div>
              </div>
            </div>

            {/* Harmonium Courses */}
            <div className="bg-wood-light/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-wood-medium to-wood-dark rounded-full flex items-center justify-center text-white text-3xl mr-4">
                  🎹
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-wood-dark">Harmonium Courses</h3>
                  <p className="text-wood-medium">Traditional Indian</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Harmonium Basics</h4>
                  <p className="text-gray-600 text-sm">
                    Learn proper sitting posture, hand positions, and basic shruti (tuning) with simple ragas and traditional techniques.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Harmonium Intermediate</h4>
                  <p className="text-gray-600 text-sm">
                    Progress to advanced ragas, learn accompaniment techniques for vocals, and develop solo performance skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-b from-wood-dark to-white text-white font-semibold rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Musical Journey?</h3>
              <p className="text-wood-light mb-6 max-w-2xl mx-auto">
                Not sure which course is right for you? Book a free consultation with our master instructor 
                to discuss your musical goals and create a personalized learning plan.
              </p>
              <button className="bg-wood-dark hover:bg-wood-darker text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
