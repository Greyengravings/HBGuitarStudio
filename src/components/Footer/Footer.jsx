import React from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Single Row Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center mr-3 overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="HB Music Studio Logo" 
                  className="w-40 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">HB MUSIC STUDIO</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nurturing musical talent and passion through expert guidance and personalized learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/explore" className="text-gray-300 hover:text-white transition-colors">Explore</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Reach Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>Nizampura, Vadodara, Gujarat, India</p>
              <p>+91 97306 05718</p>
              <p>info@musicstudio.com</p>
            </div>
          </div>

          {/* Small Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Maps</h4>
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.381144792326!2d73.1784998857053!3d22.33298795900795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc908b4555331%3A0x627a4e3558869ddb!2sHB%20Guitar%20classes!5e0!3m2!1sen!2sin!4v1766694944889!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HB Guitar Classes Location"
              ></iframe>
            </div>
          </div>

          {/* Social Media Icons Only */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4 mb-8 items-center">
              {/* LinkedIn */}
              <SocialIcon social="linkedin" tooltip="LinkedIn" href="#" size="md">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16">
                  <rect width="16" height="16" className="fill-blue-600 group-hover:fill-white transition-colors duration-300" rx="3" ry="3" />
                  <path className="fill-white group-hover:fill-blue-600 transition-colors duration-300" d="M4.943 13.394V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </SocialIcon>
              {/* Facebook */}
              <SocialIcon social="facebook" tooltip="Facebook" href="https://www.instagram.com/hbhishnurkar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" size="md">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon social="instagram" tooltip="Instagram" href="https://www.instagram.com/hbhishnurkar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" size="md">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="url(#instagramGradient)" className="group-hover:fill-white transition-colors duration-300" viewBox="0 0 16 16">
                  <defs>
                    <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#f09433' }} />
                      <stop offset="25%" style={{ stopColor: '#e6683c' }} />
                      <stop offset="50%" style={{ stopColor: '#dc2743' }} />
                      <stop offset="75%" style={{ stopColor: '#cc2366' }} />
                      <stop offset="100%" style={{ stopColor: '#bc1888' }} />
                    </linearGradient>
                  </defs>
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-wood-medium text-center">
          <p className="text-gray-400">
            © 2024 Music Tutor Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
