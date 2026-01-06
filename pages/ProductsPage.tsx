
import React from 'react';
import { CheckCircleIcon } from '../components/icons';

const ProductsPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-tally-blue sm:text-5xl">Complete Tally Product Suite</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                    From single-user solutions to enterprise-wide systems, find the perfect fit for your business.
                </p>
            </div>
        </div>
    );

    const TallyPrime7Banner = () => (
        <div className="bg-tally-blue text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <span className="inline-block bg-tally-gold text-tally-blue-dark font-semibold px-3 py-1 rounded-full text-sm">LATEST VERSION</span>
                <h2 className="mt-4 text-4xl font-extrabold">TallyPrime 7 - The Future of Business Management</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                    The newest and most advanced version, packed with powerful new features, enhanced performance, and a modern user experience.
                </p>
                 <div className="mt-8">
                     <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-tally-blue bg-white hover:bg-gray-100">
                        See What's New
                    </button>
                </div>
            </div>
        </div>
    );

    interface ProductCardProps {
        title: string;
        tagline: string;
        description: string;
        features: string[];
        idealFor: string[];
        cta: string;
        isPopular?: boolean;
    }
    
    const ProductCard: React.FC<ProductCardProps> = ({ title, tagline, description, features, idealFor, cta, isPopular }) => (
        <div className={`border rounded-lg p-8 flex flex-col ${isPopular ? 'border-tally-gold border-2' : 'border-gray-200'} bg-white`}>
            {isPopular && <span className="mx-auto mb-4 bg-tally-gold text-white font-semibold px-3 py-1 rounded-full text-sm w-max">MOST POPULAR</span>}
            <h3 className="text-2xl font-bold text-tally-blue">{title}</h3>
            <p className="font-semibold text-gray-700 mt-1">{tagline}</p>
            <p className="mt-4 text-gray-600 flex-grow">{description}</p>
            
            <div className="mt-6">
                <p className="font-semibold">Key Features:</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    {features.map(f => <li key={f} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />{f}</li>)}
                </ul>
            </div>

            <div className="mt-6">
                <p className="font-semibold">Ideal For:</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    {idealFor.map(i => <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />{i}</li>)}
                </ul>
            </div>
            
            <button className="mt-8 w-full bg-tally-blue text-white py-3 rounded-md hover:bg-tally-blue-dark transition-colors font-semibold">{cta}</button>
        </div>
    );


    const EditionsSection = () => (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <ProductCard
                        title="TallyPrime Silver"
                        tagline="Perfect for Startups & Sole Traders"
                        description="Suitable for businesses that need TallyPrime on a single PC. Fully loaded with all features to manage your complete business."
                        features={["Invoicing & Accounting", "Inventory Management", "GST/VAT Compliance", "Connected Services"]}
                        idealFor={["Freelancers", "Small retail shops", "Sole proprietors", "Startups"]}
                        cta="Get Silver"
                    />
                    <ProductCard
                        title="TallyPrime Gold"
                        tagline="For Growing Teams & Multi-User Businesses"
                        description="Perfect for businesses needing multi-user access on multiple PCs. Everything in Silver, plus unlimited users on the same network."
                        features={["Everything in Silver", "Unlimited LAN users", "Role-based access", "Collaborative workflows"]}
                        idealFor={["Growing businesses", "Multi-department orgs", "Businesses with 3+ users", "Manufacturing units"]}
                        cta="Get Gold"
                        isPopular
                    />
                     <ProductCard
                        title="TallyPrime Cloud"
                        tagline="Work from Anywhere, Anytime"
                        description="Access TallyPrime seamlessly on Windows, Linux, or macOS (via browser). Secure, real-time collaboration with zero IT management."
                        features={["24/7 Secured Cloud Access", "Platform Agnostic", "Automatic Backups", "Powered by Oracle Cloud"]}
                        idealFor={["Remote teams", "Multiple locations", "Mac users", "Zero IT infrastructure needs"]}
                        cta="Get Cloud Access"
                    />
                </div>
            </div>
        </div>
    );
    
    return (
        <>
            <PageHeader />
            <TallyPrime7Banner />
            <EditionsSection />
        </>
    );
};

export default ProductsPage;
