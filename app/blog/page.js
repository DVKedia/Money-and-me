import Link from 'next/link';
import CTAButton from '../components/CTAButton';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for First-Time Investors in India",
      excerpt: "Starting your investment journey can be overwhelming. Here are the key principles every beginner should know before making their first investment.",
      category: "Investment Basics",
      readTime: "5 min read",
      date: "March 15, 2024",
      slug: "first-time-investor-tips"
    },
    {
      id: 2,
      title: "SIP vs Lump Sum: Which Investment Strategy Works Better?",
      excerpt: "Compare the benefits and drawbacks of systematic investment plans versus lump sum investments to make informed decisions.",
      category: "Investment Strategy",
      readTime: "7 min read",
      date: "March 12, 2024",
      slug: "sip-vs-lump-sum"
    },
    {
      id: 3,
      title: "Tax Saving Investments Under Section 80C: Complete Guide",
      excerpt: "Maximize your tax savings with these Section 80C investment options while building long-term wealth.",
      category: "Tax Planning",
      readTime: "8 min read",
      date: "March 10, 2024",
      slug: "section-80c-tax-saving-guide"
    },
    {
      id: 4,
      title: "How to Build an Emergency Fund: A Step-by-Step Guide",
      excerpt: "Learn why emergency funds are crucial and how to build one that provides financial security during unexpected situations.",
      category: "Financial Planning",
      readTime: "6 min read",
      date: "March 8, 2024",
      slug: "emergency-fund-guide"
    },
    {
      id: 5,
      title: "Mutual Fund Categories Explained: Equity, Debt, and Hybrid",
      excerpt: "Understand different types of mutual funds and how to choose the right category based on your investment goals.",
      category: "Mutual Funds",
      readTime: "9 min read",
      date: "March 5, 2024",
      slug: "mutual-fund-categories"
    },
    {
      id: 6,
      title: "Retirement Planning in Your 30s: Why Starting Early Matters",
      excerpt: "Discover the power of compound interest and why your 30s are the perfect time to start serious retirement planning.",
      category: "Retirement Planning",
      readTime: "7 min read",
      date: "March 3, 2024",
      slug: "retirement-planning-30s"
    }
  ];

  const categories = ["All", "Investment Basics", "Investment Strategy", "Tax Planning", "Financial Planning", "Mutual Funds", "Retirement Planning"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Insights & Tips</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Stay informed with expert insights, market updates, and practical financial advice
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{blogPosts[0].category}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gray-200 h-64 lg:h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Featured Article Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Expert insights to help you make informed financial decisions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Get the latest financial insights and market updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button className="bg-indigo-800 px-6 py-3 rounded-r-md font-medium hover:bg-indigo-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Personalized Financial Advice?
          </h2>
          <p className="text-xl mb-8">
            While our blog provides general guidance, get customized advice for your unique situation
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Consult Our Experts
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
