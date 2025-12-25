import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Chatbot from '../Chatbot/Chatbot';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col wood-texture">

      <Header />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
