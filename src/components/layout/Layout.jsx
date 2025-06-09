import React from 'react';
import Header from './Header';
<<<<<<< HEAD
import Footer from './Footer';
=======
>>>>>>> ali

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> ali
    </div>
  );
};

export default Layout; 