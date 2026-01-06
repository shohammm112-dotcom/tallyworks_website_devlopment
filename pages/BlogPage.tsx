
import React from 'react';

const BlogPage: React.FC = () => {

    const PageHeader = () => (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-tally-blue sm:text-5xl">Insights, Updates & Tips</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                    Stay informed with the latest TallyPrime features, compliance updates, and business management best practices for UAE businesses.
                </p>
            </div>
        </div>
    );

    const samplePosts = [
        {
            category: "Product Updates",
            title: "TallyPrime 7 Launch: What's New for UAE Businesses",
            excerpt: "TallyPrime 7 is here with game-changing features. From enhanced WhatsApp integration to faster performance, discover what's new...",
            imageUrl: "https://picsum.photos/400/250?random=21",
            author: "Tallyworks Team",
            date: "July 15, 2024",
        },
        {
            category: "Compliance & VAT",
            title: "UAE VAT Changes 2025: How TallyPrime Keeps You Compliant",
            excerpt: "Stay ahead of UAE VAT regulation changes. Learn how TallyPrime automates compliance and what you need to know for the upcoming year.",
            imageUrl: "https://picsum.photos/400/250?random=22",
            author: "Tallyworks Team",
            date: "July 10, 2024",
        },
        {
            category: "How-To Guides",
            title: "5 Ways TallyPrime Saves Small Businesses Time & Money",
            excerpt: "Time is money. Discover five powerful TallyPrime features that automate tedious tasks and boost your bottom line, from banking to reporting.",
            imageUrl: "https://picsum.photos/400/250?random=23",
            author: "Tallyworks Team",
            date: "July 5, 2024",
        },
    ];

    const BlogGrid = () => (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-3">
                    {samplePosts.map(post => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-tally-blue">
                                        <a href="#" className="hover:underline">{post.category}</a>
                                    </p>
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="text-sm text-gray-500">
                                        <span>{post.author}</span>
                                        <span className="mx-1">&middot;</span>
                                        <time>{post.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
    return (
        <>
            <PageHeader />
            <BlogGrid />
        </>
    );
};

export default BlogPage;
