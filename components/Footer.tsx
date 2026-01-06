
import React from 'react';
import { Page } from '../types';
import { LinkedInIcon, FacebookIcon, YoutubeIcon, InstagramIcon } from './icons';

interface FooterProps {
  navigate: (page: Page) => void;
}

const FooterLink: React.FC<{ page: Page; navigate: (page: Page) => void; children: React.ReactNode }> = ({ page, navigate, children }) => (
    <a href="#" onClick={(e) => { e.preventDefault(); navigate(page); }} className="text-gray-400 hover:text-white transition-colors">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About Tallyworks */}
          <div className="space-y-4">
            <div className="flex items-center">
                <span className="text-2xl font-bold text-white">Tally</span>
                <span className="text-2xl font-bold text-tally-gold">works</span>
            </div>
            <p className="text-gray-400 text-sm">
                Your Tally Solutions Experts in the UAE. Empowering businesses with robust, reliable software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><LinkedInIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">YouTube</span><YoutubeIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><InstagramIcon className="h-6 w-6" /></a>
            </div>
            <p className="text-sm text-gray-500 pt-2">Authorized Tally Partner</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><FooterLink page="Home" navigate={navigate}>Home</FooterLink></li>
              <li><FooterLink page="About" navigate={navigate}>About Us</FooterLink></li>
              <li><FooterLink page="Support" navigate={navigate}>Support</FooterLink></li>
              <li><FooterLink page="Contact" navigate={navigate}>Contact</FooterLink></li>
              <li><FooterLink page="Blog" navigate={navigate}>Blog</FooterLink></li>
              <li><FooterLink page="Case Studies" navigate={navigate}>Success Stories</FooterLink></li>
            </ul>
          </div>
          
          {/* Column 3: Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-2">
              <li><FooterLink page="Products" navigate={navigate}>TallyPrime 7</FooterLink></li>
              <li><FooterLink page="Products" navigate={navigate}>TallyPrime Silver</FooterLink></li>
              <li><FooterLink page="Products" navigate={navigate}>TallyPrime Gold</FooterLink></li>
              <li><FooterLink page="Products" navigate={navigate}>TallyPrime Cloud</FooterLink></li>
              <li><FooterLink page="Products" navigate={navigate}>Tally.ERP 9</FooterLink></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📞</span>
                <a href="tel:+971000000000" className="hover:text-white">+971 XX XXX XXXX</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✉️</span>
                <a href="mailto:info@tallyworks.ae" className="hover:text-white">info@tallyworks.ae</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">💬</span>
                <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Us</a>
              </li>
               <li className="flex items-start">
                <span className="mr-2 mt-1">🕐</span>
                <span>Sun-Thu: 9AM-6PM</span>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2 text-sm">
            <FooterLink page="Terms" navigate={navigate}>Terms & Conditions</FooterLink>
            <FooterLink page="Privacy" navigate={navigate}>Privacy Policy</FooterLink>
          </div>
          <p className="mt-8 text-sm text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Tallyworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
