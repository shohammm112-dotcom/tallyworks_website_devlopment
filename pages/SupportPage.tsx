
import React from 'react';
import { PhoneIcon, WhatsAppIcon } from '../components/icons';

const SupportPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-tally-blue py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Expert Support When You Need It Most</h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                    With our deep expertise and technical understanding, we provide efficient, effective, and friendly services to ensure our clients' success.
                </p>
            </div>
        </div>
    );
    
    const SupportAvailability = () => (
        <div className="bg-tally-gold text-tally-blue-dark py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center font-semibold">
                    <div>
                        <p>Sunday - Thursday, 9 AM - 6 PM UAE Time</p>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <a href="tel:+971000000000" className="flex items-center hover:underline">
                            <PhoneIcon className="h-5 w-5 mr-1" /> Call Us
                        </a>
                         <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                            <WhatsAppIcon className="h-5 w-5 mr-1" /> WhatsApp
                        </a>
                    </div>
                    <div>
                        <p>🚨 Emergency Support: <span className="font-bold">24/7 for critical issues</span></p>
                    </div>
                </div>
            </div>
        </div>
    );

    const ServiceCard: React.FC<{ title: string; description: string; children: React.ReactNode; cta: string; }> = ({ title, description, children, cta }) => (
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-tally-blue">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            <div className="mt-6 text-gray-700 space-y-2">
                {children}
            </div>
            <button className="mt-6 w-full bg-tally-blue text-white py-2 rounded-md hover:bg-tally-blue-dark transition-colors">{cta}</button>
        </div>
    );

    const CoreServices = () => (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Comprehensive Support Services</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ServiceCard title="Software Installation & Setup" description="Get TallyPrime up and running quickly with our expert installation service." cta="Request Installation">
                        <p>✅ Software installation on single or multiple PCs</p>
                        <p>✅ Company creation and configuration</p>
                        <p>✅ User access and security setup</p>
                        <p>✅ Basic training for your team (2-hour session)</p>
                    </ServiceCard>
                    <ServiceCard title="Customized Training Programs" description="Personalized training to ensure you and your employees get the most out of Tally software." cta="Enroll in Training">
                        <p>✅ Basic, Advanced, and Industry-Specific modules</p>
                        <p>✅ On-site, Online, and Self-paced options</p>
                        <p>✅ Tailored to your industry and skill level</p>
                        <p>✅ Certificate of completion provided</p>
                    </ServiceCard>
                    <ServiceCard title="Ongoing Support & Maintenance" description="Our expert team is available to help with any questions, issues, or optimization needs." cta="View Support Plans">
                        <p>✅ Email, Phone & WhatsApp Support Tiers</p>
                        <p>✅ Priority Support with dedicated specialists</p>
                        <p>✅ Troubleshooting, updates, and optimization</p>
                        <p>✅ Custom report creation</p>
                    </ServiceCard>
                    <ServiceCard title="Data Recovery & Migration" description="Recover corrupted Tally data, migrate from older versions, or transfer from other software." cta="Schedule Migration">
                        <p>✅ 95%+ data recovery success rate</p>
                        <p>✅ Tally.ERP 9 to TallyPrime 7 migration</p>
                        <p>✅ Automated backup configuration</p>
                        <p className="font-bold text-red-600">🚨 Emergency 24-hour recovery available</p>
                    </ServiceCard>
                </div>
            </div>
        </div>
    );
    
    return (
        <>
            <PageHeader />
            <SupportAvailability />
            <CoreServices />
        </>
    );
};

export default SupportPage;
