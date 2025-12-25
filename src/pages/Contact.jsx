import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/ContactForm/ContactForm';
import { 
  LocationIcon, 
  PhoneIcon, 
  EmailIcon, 
  ClockIcon, 
  MapIcon, 
  FacebookIcon, 
  InstagramIcon, 
  YouTubeIcon, 
  WhatsAppIcon 
} from '../components/Icons/IconLibrary';

const Contact = () => {
  const contactInfo = {
    address: "Nizampura, Vadodara, Gujarat, India",
    phone: "+91 97306 05718",
    email: "info@musicstudio.com",
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 8:00 PM",
      saturday: "Saturday: 9:00 AM - 6:00 PM",
    },
    social: [
      { name: "Facebook", icon: <FacebookIcon className="w-6 h-6" />, url: "#" },
      { name: "Instagram", icon: <InstagramIcon className="w-6 h-6" />, url: "https://www.instagram.com/hbhishnurkar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
      { name: "YouTube", icon: <YouTubeIcon className="w-6 h-6" />, url: "#" },
      { name: "WhatsApp", icon: <WhatsAppIcon className="w-6 h-6" />, url: "#" }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/80 to-wood-dark/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to start your musical journey? Get in touch with us and let's make beautiful music together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-gradient-to-b from-wood-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-wood-dark mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We'd love to hear from you! Whether you're a complete beginner or an experienced musician, 
                  our team is here to help you find the perfect course and start your musical journey.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-dark rounded-2xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <LocationIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Visit Our Studio</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-dark rounded-2xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-dark rounded-2xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <EmailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  Studio Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-800">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-800">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {contactInfo.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-wood-medium hover:bg-wood-dark rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <MapIcon className="w-5 h-5 mr-2" />
                  Find Us
                </h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.381144792326!2d73.1784998857053!3d22.33298795900795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc908b4555331%3A0x627a4e3558869ddb!2sHB%20Guitar%20classes!5e0!3m2!1sen!2sin!4v1766694944889!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HB Guitar Classes Location"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4 p-4 bg-wood-light/30 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Address:</strong> {contactInfo.address}
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Visit us for expert guitar lessons and music training
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
