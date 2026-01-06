
import React, { useState } from 'react';
import { Page } from '../types';
import { PhoneIcon, WhatsAppIcon, MenuIcon, XIcon, ChevronDownIcon } from './icons';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, navigate, children }) => (
  <button
    onClick={() => navigate(page)}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      currentPage === page
        ? 'text-tally-gold'
        : 'text-white hover:bg-tally-blue-dark hover:text-white'
    }`}
  >
    {children}
  </button>
);

const MobileNavLink: React.FC<{
  page: Page;
  navigate: (page: Page) => void;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}> = ({ page, navigate, setIsOpen, children }) => (
  <button
    onClick={() => {
      navigate(page);
      setIsOpen(false);
    }}
    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-tally-blue-dark"
  >
    {children}
  </button>
);


const NavDropdown: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-tally-blue-dark hover:text-white flex items-center">
        {title}
        <ChevronDownIcon className="ml-1 h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const TallyLogo = () => (
    <div className="flex items-center cursor-pointer" onClick={() => navigate('Home')}>
      <span className="text-2xl font-bold text-white">Tally</span>
      <span className="text-2xl font-bold text-tally-gold">works</span>
    </div>
  );

  return (
    <nav className="bg-tally-blue shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TallyLogo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink page="Home" currentPage={currentPage} navigate={navigate}>Home</NavLink>
                <NavDropdown title="Products">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('Products'); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Products</a>
                </NavDropdown>
                <NavDropdown title="Solutions">
                   <a href="#" onClick={(e) => { e.preventDefault(); navigate('Solutions'); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Solutions</a>
                </NavDropdown>
                <NavDropdown title="Support">
                   <a href="#" onClick={(e) => { e.preventDefault(); navigate('Support'); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support Center</a>
                </NavDropdown>
                <NavLink page="About" currentPage={currentPage} navigate={navigate}>About Us</NavLink>
                <NavLink page="Resources" currentPage={currentPage} navigate={navigate}>Resources</NavLink>
                <NavLink page="Contact" currentPage={currentPage} navigate={navigate}>Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+971000000000" className="flex items-center text-white hover:text-tally-gold">
                <PhoneIcon className="h-5 w-5 mr-1" />
                <span>+971 XX XXX XXXX</span>
            </a>
            <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-tally-blue bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Chat Now
            </a>
            <button onClick={() => navigate('Pricing')} className="bg-tally-gold text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-tally-gold-dark transition-colors">
              Request Quote
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-tally-blue-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-tally-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink page="Home" navigate={navigate} setIsOpen={setIsOpen}>Home</MobileNavLink>
            <MobileNavLink page="Products" navigate={navigate} setIsOpen={setIsOpen}>Products</MobileNavLink>
            <MobileNavLink page="Solutions" navigate={navigate} setIsOpen={setIsOpen}>Solutions</MobileNavLink>
            <MobileNavLink page="Support" navigate={navigate} setIsOpen={setIsOpen}>Support</MobileNavLink>
            <MobileNavLink page="About" navigate={navigate} setIsOpen={setIsOpen}>About Us</MobileNavLink>
            <MobileNavLink page="Resources" navigate={navigate} setIsOpen={setIsOpen}>Resources</MobileNavLink>
            <MobileNavLink page="Contact" navigate={navigate} setIsOpen={setIsOpen}>Contact</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
             <div className="flex flex-col items-center space-y-3">
                <a href="tel:+971000000000" className="flex items-center text-white hover:text-tally-gold">
                    <PhoneIcon className="h-5 w-5 mr-1" />
                    <span>+971 XX XXX XXXX</span>
                </a>
                <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="w-4/5 text-center inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    Chat Now
                </a>
                <button onClick={() => {navigate('Pricing'); setIsOpen(false);}} className="w-4/5 text-center bg-tally-gold text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-tally-gold-dark transition-colors">
                  Request Quote
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
