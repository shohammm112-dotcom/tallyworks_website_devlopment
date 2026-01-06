
import React from 'react';
import { CheckCircleIcon } from '../components/icons';

const CaseStudiesPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-tally-blue py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Real Businesses, Real Results</h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                    See how UAE businesses like yours are thriving with Tallyworks and TallyPrime.
                </p>
            </div>
        </div>
    );

    interface CaseStudyCardProps {
        company: string;
        industry: string;
        challenge: string;
        quote: string;
        author: string;
        solution: string[];
        results: string[];
    }
    
    const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ company, industry, challenge, quote, author, solution, results }) => (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="p-8">
                <p className="text-sm font-semibold text-tally-blue uppercase tracking-wide">{industry}</p>
                <h2 className="mt-1 text-3xl font-extrabold text-gray-900">{company}</h2>
                <p className="mt-4 text-lg font-semibold text-gray-600">Challenge: <span className="font-normal">{challenge}</span></p>
            </div>
            <div className="bg-gray-50 px-8 py-6">
                <blockquote className="italic text-gray-700 text-lg">"{quote}"</blockquote>
                <p className="text-right mt-2 font-semibold text-gray-800">&mdash; {author}</p>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900">Solution Implemented</h3>
                     <ul className="mt-4 space-y-2">
                        {solution.map(s => <li key={s} className="flex items-start"><CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" />{s}</li>)}
                    </ul>
                </div>
                 <div className="bg-green-50 p-8">
                    <h3 className="text-xl font-bold text-gray-900">Results</h3>
                     <ul className="mt-4 space-y-2">
                        {results.map(r => <li key={r} className="flex items-start"><CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-600 mr-2 mt-0.5" />{r}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
    
    const caseStudies = [
        {
            company: "Leading Dubai Fashion Retailer",
            industry: "Fashion Retail, 5 stores",
            challenge: "Managing inventory across multiple locations, slow billing, and manual VAT filing.",
            quote: "Because of TallyWorks, our business operations have never been smoother. It truly changed the way we do business.",
            author: "John Doe, Business Owner",
            solution: ["TallyPrime Gold", "Multi-location inventory sync", "POS integration", "WhatsApp invoice integration"],
            results: ["80% faster billing", "Zero stock discrepancies", "VAT filing time reduced by 90%", "ROI achieved in 4 months"]
        },
        {
            company: "UAE-Based Electronics Manufacturer",
            industry: "Electronics Manufacturing",
            challenge: "Complex bill of materials, production cost tracking, and high material wastage.",
            quote: "We now have accurate production costs, allowing for better pricing and profitability. I highly recommend Tallyworks.",
            author: "Jane Smith, Central Business Manager",
            solution: ["TallyPrime Gold", "Bill of Materials (BoM) setup", "Job work management", "Inventory optimization"],
            results: ["20% reduction in production costs", "Material wastage down by 15%", "Real-time production visibility"]
        }
    ];
    
    return (
        <div className="bg-gray-100">
            <PageHeader />
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {caseStudies.map(cs => <CaseStudyCard key={cs.company} {...cs} />)}
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesPage;
