
import React from 'react';
import { AwardIcon } from '../components/icons';

const AboutPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-tally-blue py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Empowering Businesses with Innovative Solutions</h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                    Welcome to Tallyworks, where we're committed to empowering businesses with modern solutions tailored to their unique needs.
                </p>
            </div>
        </div>
    );

    const MissionVisionSection = () => (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        "Our mission at Tallyworks is to provide businesses with modern software tools that streamline operations, enhance efficiency, and drive growth. We aim to deliver unparalleled service and support, ensuring our clients' success and satisfaction every step of the way."
                    </p>
                </div>
                 <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        "Our vision at Tallyworks is to be the leading provider of comprehensive business solutions, trusted by businesses worldwide. We aspire to create a culture of innovation and collaboration, where our team members are motivated to push boundaries and exceed expectations."
                    </p>
                </div>
            </div>
        </div>
    );

    const TeamSection = () => (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Meet the Tallyworks Team</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Our team of certified Tally professionals brings decades of combined experience to your business. We're here to ensure your success.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {['Founder / CEO', 'Sales Manager', 'Lead Technical Support', 'Training Specialist'].map(role => (
                        <div key={role} className="space-y-4">
                            <img className="mx-auto h-40 w-40 rounded-full object-cover" src={`https://picsum.photos/200/200?random=${role}`} alt={role} />
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">{role}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const ValuesSection = () => (
        <div className="bg-white py-16">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <AwardIcon className="h-10 w-10 mx-auto text-tally-blue" />
                        <h3 className="mt-3 text-xl font-semibold">Excellence</h3>
                        <p className="mt-2 text-gray-600">We strive for excellence in every solution we deliver.</p>
                    </div>
                    <div>
                        <AwardIcon className="h-10 w-10 mx-auto text-tally-blue" />
                        <h3 className="mt-3 text-xl font-semibold">Integrity</h3>
                        <p className="mt-2 text-gray-600">We operate with transparency and honesty.</p>
                    </div>
                     <div>
                        <AwardIcon className="h-10 w-10 mx-auto text-tally-blue" />
                        <h3 className="mt-3 text-xl font-semibold">Customer-First</h3>
                        <p className="mt-2 text-gray-600">Your success is our priority, always.</p>
                    </div>
                    <div>
                        <AwardIcon className="h-10 w-10 mx-auto text-tally-blue" />
                        <h3 className="mt-3 text-xl font-semibold">Innovation</h3>
                        <p className="mt-2 text-gray-600">We embrace new technologies and methodologies.</p>
                    </div>
                </div>
             </div>
        </div>
    );

    return (
        <>
            <PageHeader />
            <MissionVisionSection />
            <TeamSection />
            <ValuesSection />
        </>
    );
};

export default AboutPage;
