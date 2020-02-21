import React from 'react';
import Footer from './Footer';

const Layout: React.SFC = ({ children }: any) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
