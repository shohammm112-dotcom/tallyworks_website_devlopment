
import React from 'react';

const ResourcesPage: React.FC = () => {
    
    const PageHeader = () => (
        <div className="bg-tally-blue py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Resource Center</h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                    Everything you need to master TallyPrime. Free guides, tutorials, and resources to help you succeed.
                </p>
            </div>
        </div>
    );

    const SearchBar = () => (
        <div className="bg-white py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search for help, guides, tutorials..."
                        className="block w-full text-lg p-4 border-2 border-gray-300 rounded-full focus:ring-tally-blue focus:border-tally-blue"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                         <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );

    const ResourceCategoryCard: React.FC<{ title: string; items: string[]; }> = ({ title, items }) => (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-tally-blue">{title}</h3>
            <ul className="mt-4 space-y-2">
                {items.map(item => (
                    <li key={item}><a href="#" className="text-gray-600 hover:text-tally-blue hover:underline">{item}</a></li>
                ))}
            </ul>
        </div>
    );

    const CategoriesSection = () => (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ResourceCategoryCard title="Getting Started Guides" items={["TallyPrime 7 Quick Start Guide", "Installation Step-by-Step", "Migrating from Tally.ERP 9"]} />
                    <ResourceCategoryCard title="Video Tutorials" items={["Basics: Navigation & Vouchers", "Inventory Management", "GST/VAT Filing", "Advanced Reporting"]} />
                    <ResourceCategoryCard title="User Manuals" items={["TallyPrime 7 Complete Manual", "Keyboard Shortcuts", "Payroll Guide", "Feature Documentation"]} />
                    <ResourceCategoryCard title="Blog Articles" items={["TallyPrime 7: Top New Features", "UAE VAT Filing Guide", "5 Ways to Speed Up Workflow", "TallyPrime vs QuickBooks"]} />
                    <ResourceCategoryCard title="FAQs" items={["General Questions", "Technical Issues", "Licensing & Pricing", "Data Management"]} />
                    <ResourceCategoryCard title="Downloads" items={["TallyPrime Trial Version", "Demo Company Data", "Custom Report Templates", "Invoice Formats"]} />
                </div>
            </div>
        </div>
    );
    
    return (
        <>
            <PageHeader />
            <SearchBar />
            <CategoriesSection />
        </>
    );
};

export default ResourcesPage;
