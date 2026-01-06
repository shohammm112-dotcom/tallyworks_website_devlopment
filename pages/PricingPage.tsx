
import React from 'react';

const PricingPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-tally-blue sm:text-5xl">Transparent Pricing for Every Business</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                   Get a personalized quote based on your unique business needs. We'll send you a detailed proposal within 24 hours.
                </p>
            </div>
        </div>
    );

    const QuoteRequestForm = () => (
        <div className="bg-gray-50 py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-900">Get Your Personalized Quote</h2>
                    <form className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name *</label>
                            <input type="text" name="company" id="company" required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                            <input id="email" name="email" type="email" required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                            <input type="text" name="phone" id="phone" required className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-tally-blue focus:border-tally-blue"/>
                        </div>
                        <div>
                            <label htmlFor="users" className="block text-sm font-medium text-gray-700">Number of Users *</label>
                            <select id="users" name="users" required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-tally-blue focus:border-tally-blue sm:text-sm rounded-md">
                                <option>1</option>
                                <option>2-5</option>
                                <option>6-10</option>
                                <option>11-20</option>
                                <option>20+</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="edition" className="block text-sm font-medium text-gray-700">Preferred Edition *</label>
                            <select id="edition" name="edition" required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-tally-blue focus:border-tally-blue sm:text-sm rounded-md">
                                <option>TallyPrime Silver</option>
                                <option>TallyPrime Gold</option>
                                <option>TallyPrime Cloud</option>
                                <option>Not Sure</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                             <label className="block text-sm font-medium text-gray-700">Additional Services Needed</label>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-tally-blue border-gray-300 rounded mr-2"/> Installation & Setup</label>
                                <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-tally-blue border-gray-300 rounded mr-2"/> Data Migration</label>
                                <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-tally-blue border-gray-300 rounded mr-2"/> Advanced Training</label>
                                <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-tally-blue border-gray-300 rounded mr-2"/> Ongoing Support</label>
                            </div>
                        </div>
                         <div className="sm:col-span-2">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tally-gold hover:bg-tally-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tally-gold">
                                Get My Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <PageHeader />
            <QuoteRequestForm />
        </>
    );
};

export default PricingPage;
