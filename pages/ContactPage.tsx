
import React from 'react';

const ContactPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-tally-blue sm:text-5xl">Let's Talk About Your Business</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                    Ready to take your business to the next level? Contact us for more information.
                </p>
            </div>
        </div>
    );

    const ContactDetails = () => (
        <div className="bg-tally-blue text-white p-8 lg:p-12 rounded-lg">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <div className="mt-6 space-y-4 text-lg">
                <p><strong>📍 Address:</strong> Street Address, Area, Dubai, UAE</p>
                <p><strong>📞 Phone:</strong> <a href="tel:+971000000000" className="hover:underline">+971 XX XXX XXXX</a></p>
                <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="hover:underline">+971 XX XXX XXXX</a></p>
                <p><strong>✉️ Email:</strong> <a href="mailto:info@tallyworks.ae" className="hover:underline">info@tallyworks.ae</a></p>
                <p><strong>🕐 Hours:</strong> Sunday - Thursday, 9 AM - 6 PM</p>
                <p><strong>🚨 Emergency:</strong> <a href="tel:+971000000000" className="hover:underline">24/7 for critical issues</a></p>
            </div>
        </div>
    );

    const ContactForm = () => (
        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
            <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                    <input type="text" name="phone" id="phone" autoComplete="tel" required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                </div>
                 <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" name="company" id="company" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700">Inquiry Type *</label>
                    <select id="inquiry_type" name="inquiry_type" required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-tally-blue focus:border-tally-blue sm:text-sm rounded-md">
                        <option>Product Information</option>
                        <option>Request a Quote</option>
                        <option>Schedule a Demo</option>
                        <option>Technical Support</option>
                        <option>General Inquiry</option>
                    </select>
                </div>
                 <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                    <textarea id="message" name="message" rows={4} required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"></textarea>
                </div>
                <div className="sm:col-span-2">
                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tally-gold hover:bg-tally-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tally-gold">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
    
    return (
        <>
            <PageHeader />
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </div>
            <div className="w-full h-96">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231268.32456619175!2d55.08631024323218!3d25.07635071195655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1678886427345!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dubai Location Map"
                ></iframe>
            </div>
        </>
    );
};

export default ContactPage;
