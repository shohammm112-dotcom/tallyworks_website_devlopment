
import React from 'react';
import { CheckCircleIcon } from '../components/icons';

const SolutionsPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-tally-blue py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Industry-Tailored Solutions</h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                    Whether you're in retail, manufacturing, services, or trading - TallyPrime adapts to your unique business needs.
                </p>
            </div>
        </div>
    );
    
    interface SolutionCardProps {
        title: string;
        description: string;
        features: string[];
        imageUrl: string;
        cta: string;
    }

    const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, features, imageUrl, cta }) => (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden my-8">
            <div className="grid md:grid-cols-2">
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-tally-blue">{title}</h3>
                    <p className="mt-4 text-gray-600">{description}</p>
                    <ul className="mt-6 space-y-3">
                        {features.map((feature, index) => (
                             <li key={index} className="flex items-start">
                                <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-2 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                     <button className="mt-8 bg-tally-gold text-white px-6 py-2 rounded-md text-base font-medium hover:bg-tally-gold-dark transition-colors">
                        {cta}
                    </button>
                </div>
                <div className="hidden md:block">
                     <img src={imageUrl} alt={title} className="h-full w-full object-cover"/>
                </div>
            </div>
        </div>
    );
    
    const Solutions = () => (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SolutionCard
                    title="Manufacturing Solutions"
                    description="Tailored to meet the specific needs of your production environment, from job work to raw material tracking."
                    features={["Job Work Management", "Bill of Materials (BoM)", "Production & Cost Tracking", "Batch & Serial Number Tracking"]}
                    imageUrl="https://picsum.photos/600/600?random=11"
                    cta="Request Manufacturing Demo"
                />
                <SolutionCard
                    title="Retail & Trading Solutions"
                    description="From single stores to multi-location chains, manage your retail business efficiently with POS integration and inventory control."
                    features={["Multi-location Management", "POS Integration & Barcoding", "Pricing & Discount Schemes", "Sales & Stock Analysis"]}
                    imageUrl="https://picsum.photos/600/600?random=12"
                    cta="Explore Retail Solutions"
                />
                <SolutionCard
                    title="Services & Consulting Solutions"
                    description="Track projects, bill clients, manage expenses, and maintain profitability with tools designed for service providers."
                    features={["Project & Cost Center Management", "Time Tracking & Billable Hours", "Professional Invoicing", "Profitability Analysis"]}
                    imageUrl="https://picsum.photos/600/600?random=13"
                    cta="Schedule Services Demo"
                />
                 <SolutionCard
                    title="Payroll & HR Management"
                    description="Streamline and automate payroll processes, from salary calculations to ensuring compliance with UAE labor laws."
                    features={["Flexible Salary Structures", "Attendance Integration", "WPS File Generation", "Employee Self-Service Portal"]}
                    imageUrl="https://picsum.photos/600/600?random=14"
                    cta="Automate Your Payroll"
                />
            </div>
        </div>
    );

    return (
        <>
            <PageHeader />
            <Solutions />
        </>
    );
};

export default SolutionsPage;
