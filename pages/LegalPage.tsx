
import React from 'react';

interface LegalPageProps {
    type: 'Terms' | 'Privacy';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
    
    const content = {
        Terms: {
            title: "Terms & Conditions",
            sections: [
                {
                    heading: "1. Introduction & Acceptance",
                    body: "Welcome to Tallyworks. By accessing our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services."
                },
                {
                    heading: "2. Services Offered",
                    body: "Tallyworks provides Tally software solutions, support, training, and related services as described on this website. All services are subject to Tally's official licensing agreements."
                },
                {
                    heading: "3. User Responsibilities",
                    body: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to use our services only for lawful purposes."
                },
                {
                    heading: "4. Limitation of Liability",
                    body: "Tallyworks will not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
                },
                {
                    heading: "5. Governing Law",
                    body: "These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions."
                }
            ]
        },
        Privacy: {
            title: "Privacy Policy",
            sections: [
                {
                    heading: "1. Information We Collect",
                    body: "We collect personal information such as your name, email, and phone number when you fill out a form. We also collect business information and usage data through cookies and analytics to improve our services."
                },
                {
                    heading: "2. How We Use Your Information",
                    body: "Your information is used to deliver our services, communicate with you, process payments, and for marketing purposes (with your explicit consent). We do not sell your personal data to third parties."
                },
                {
                    heading: "3. Data Storage & Security",
                    body: "We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and protected against unauthorized access."
                },
                {
                    heading: "4. Your Rights",
                    body: "You have the right to access, update, or delete your personal information. Please contact us to make such a request."
                },
                 {
                    heading: "5. Cookies Policy",
                    body: "Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of the site."
                }
            ]
        }
    };

    const pageContent = content[type];

    return (
        <div className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-tally-blue mb-8">{pageContent.title}</h1>
                <div className="prose prose-lg max-w-none text-gray-700">
                    {pageContent.sections.map(section => (
                        <div key={section.heading} className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
                            <p>{section.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
