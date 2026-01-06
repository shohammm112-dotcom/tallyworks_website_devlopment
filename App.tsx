
import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import SolutionsPage from './pages/SolutionsPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import PricingPage from './pages/PricingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import LegalPage from './pages/LegalPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage navigate={navigate} />;
      case 'About':
        return <AboutPage />;
      case 'Support':
        return <SupportPage />;
      case 'Solutions':
        return <SolutionsPage />;
      case 'Products':
        return <ProductsPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Resources':
        return <ResourcesPage />;
      case 'Pricing':
        return <PricingPage />;
      case 'Case Studies':
        return <CaseStudiesPage />;
      case 'Blog':
        return <BlogPage />;
      case 'Terms':
        return <LegalPage type="Terms" />;
      case 'Privacy':
        return <LegalPage type="Privacy" />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
