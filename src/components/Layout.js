import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <ThemeProvider>
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;
