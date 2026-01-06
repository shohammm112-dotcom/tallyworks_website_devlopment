
import React from 'react';
import { Page } from '../types';
import { ComputerIcon, TrainingIcon, SupportIcon, AwardIcon, PriceTagIcon, ShieldIcon, CheckCircleIcon } from '../components/icons';

interface HomePageProps {
    navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {

    const HeroSection = () => (
        <div className="relative bg-tally-blue text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Welcome to Tallyworks</span>
                                <span className="block text-tally-gold xl:inline"> Your Tally Experts in the UAE</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Empowering small and medium-sized businesses with robust, reliable software solutions tailored to your specific needs.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3">
                                <div className="rounded-md shadow">
                                    <button onClick={() => navigate('Products')} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tally-gold hover:bg-tally-gold-dark md:py-4 md:text-lg md:px-10">
                                        Get TallyPrime 7
                                    </button>
                                </div>
                                <div className="rounded-md shadow">
                                    <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-tally-blue bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
                                        Talk to Our Experts
                                    </a>
                                </div>
                                <div className="rounded-md shadow-sm">
                                    <button onClick={() => navigate('Contact')} className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-tally-blue-dark md:py-4 md:text-lg md:px-10">
                                        Book a Free Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://picsum.photos/1000/800?random=1" alt="Dubai Business Setting" />
                 <div className="absolute inset-0 bg-gradient-to-r from-tally-blue to-transparent"></div>
            </div>
        </div>
    );
    
    const TrustBadges = () => (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                    <div className="flex flex-col items-center justify-center">
                        <img src="https://picsum.photos/80/80?random=10" alt="Authorized Tally Partner" className="h-12 w-auto mb-2 rounded-full" />
                        <p className="font-semibold text-gray-700">Authorized Tally Partner</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="text-3xl font-bold text-tally-blue">500+</p>
                         <p className="font-semibold text-gray-700">Happy Clients</p>
                    </div>
                     <div className="flex flex-col items-center justify-center">
                         <p className="text-3xl font-bold text-tally-blue">24/7</p>
                         <p className="font-semibold text-gray-700">Support Response</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="text-3xl font-bold text-tally-blue">3</p>
                         <p className="font-semibold text-gray-700">Languages Supported</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const ServicesSection = () => (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-tally-blue font-semibold tracking-wide uppercase">Our Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive Tally Solutions for Your Business
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                        <ComputerIcon className="h-12 w-12 text-tally-blue mx-auto" />
                        <h3 className="mt-4 text-xl font-bold">Complete Tally Software Suite</h3>
                        <p className="mt-2 text-gray-600">From TallyPrime 7 to legacy Tally.ERP 9 support - we've got you covered for smooth and efficient business operations.</p>
                        <button onClick={() => navigate('Products')} className="mt-4 text-tally-blue font-semibold hover:underline">Explore Products &rarr;</button>
                    </div>
                    <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                        <TrainingIcon className="h-12 w-12 text-tally-blue mx-auto" />
                        <h3 className="mt-4 text-xl font-bold">Personalized Training Programs</h3>
                        <p className="mt-2 text-gray-600">We provide personalized training to ensure you get the most out of Tally software, from basics to advanced features.</p>
                        <button onClick={() => navigate('Support')} className="mt-4 text-tally-blue font-semibold hover:underline">Learn More &rarr;</button>
                    </div>
                     <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                        <SupportIcon className="h-12 w-12 text-tally-blue mx-auto" />
                        <h3 className="mt-4 text-xl font-bold">Expert Support & Installation</h3>
                        <p className="mt-2 text-gray-600">From installation to troubleshooting and data recovery, our experts are here for you every step of the way.</p>
                        <button onClick={() => navigate('Support')} className="mt-4 text-tally-blue font-semibold hover:underline">Get Support &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
    
    const ProductSpotlight = () => {
        const features = [
            "Complete Accounting & Financials",
            "Advanced Inventory Management",
            "UAE VAT & GST Compliance",
            "Connected Banking Services",
            "Instant WhatsApp Integration",
            "Secure Multi-user Access",
            "Cloud-Ready for Remote Access"
        ];
        return (
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/600/500?random=2" alt="TallyPrime 7 Dashboard" className="rounded-lg shadow-xl"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Introducing TallyPrime 7</h2>
                        <p className="mt-4 text-lg text-gray-600">The latest evolution in business management. Built for growth, designed for simplicity, and optimized for UAE businesses.</p>
                        <ul className="mt-6 space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex space-x-4">
                             <button onClick={() => navigate('Products')} className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tally-blue hover:bg-tally-blue-dark">
                                Compare Editions
                            </button>
                             <button onClick={() => navigate('Pricing')} className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-tally-blue bg-white hover:bg-gray-50">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const WhyChooseUs = () => (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Businesses in the UAE Trust Tallyworks</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     <div className="text-center">
                        <AwardIcon className="h-12 w-12 text-tally-gold mx-auto" />
                        <h3 className="mt-4 text-xl font-bold">Deep Industry Expertise</h3>
                        <p className="mt-2 text-gray-600">With 10+ years of experience, our experts know Tally inside and out to maximize your investment.</p>
                    </div>
                    <div className="text-center">
                        <PriceTagIcon className="h-12 w-12 text-tally-gold mx-auto" />
                        <h3 className="mt-4 text-xl font-bold">Competitive Pricing</h3>
                        <p className="mt-2 text-gray-600">We offer high-quality solutions at competitive prices without compromising on quality or support.</p>
                    </div>
                    <div className="text-center">
                        <ShieldIcon className="h-12 w-12 text-tally-gold mx-auto" />
                        <h3 className="mt-4 text-xl font-bold">Trusted & Reliable</h3>
                        <p className="mt-2 text-gray-600">Count on us for reliable solutions and 24/7 support. You're never alone.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const Testimonials = () => (
        <div className="bg-tally-blue py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white text-center">What Our Clients Say</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 italic">"Because of Tallyworks, our business operations have never been smoother. Their Tally software solutions have truly changed the way we do business."</p>
                        <div className="mt-4 flex items-center">
                            <img src="https://picsum.photos/50/50?random=3" alt="John Doe" className="h-12 w-12 rounded-full"/>
                            <div className="ml-4">
                                <p className="font-bold">John Doe</p>
                                <p className="text-sm text-gray-500">Small Business Owner</p>
                            </div>
                        </div>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 italic">"I highly recommend Tallyworks to businesses looking for affordable and quality software solutions in the UAE. Their support is top-notch."</p>
                        <div className="mt-4 flex items-center">
                            <img src="https://picsum.photos/50/50?random=4" alt="Jane Smith" className="h-12 w-12 rounded-full"/>
                            <div className="ml-4">
                                <p className="font-bold">Jane Smith</p>
                                <p className="text-sm text-gray-500">Central Business Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button onClick={() => navigate('Case Studies')} className="text-tally-gold font-semibold hover:underline">Read More Success Stories &rarr;</button>
                </div>
            </div>
        </div>
    );
    
    const FinalCTA = () => (
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to transform your business?</span>
              <span className="block text-tally-blue">Get started with Tallyworks today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={() => navigate('Products')}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tally-blue hover:bg-tally-blue-dark"
                >
                  Get Started
                </button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <button
                  onClick={() => navigate('Contact')}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-tally-blue bg-white hover:bg-gray-50"
                >
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
    );

    return (
        <div>
            <HeroSection />
            <TrustBadges />
            <ServicesSection />
            <ProductSpotlight />
            <WhyChooseUs />
            <Testimonials />
            <FinalCTA />
        </div>
    );
};

export default HomePage;
