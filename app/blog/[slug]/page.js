import Link from 'next/link';
import CTAButton from '../../components/CTAButton';

// This would typically come from a CMS or database
const getBlogPost = (slug) => {
  const posts = {
    'first-time-investor-tips': {
      title: "10 Essential Tips for First-Time Investors in India",
      content: `
        <p>Starting your investment journey can feel overwhelming, especially with the numerous options available in the Indian market. Whether you're a fresh graduate or someone who has been putting off investing, these essential tips will help you build a solid foundation for your financial future.</p>

        <h2>1. Start with Clear Financial Goals</h2>
        <p>Before investing a single rupee, define what you're investing for. Are you saving for a house down payment, your child's education, or retirement? Having clear goals helps you choose the right investment products and time horizons.</p>

        <h2>2. Build an Emergency Fund First</h2>
        <p>Before you start investing, ensure you have 6-12 months of expenses saved in a liquid fund or savings account. This prevents you from having to withdraw investments during emergencies.</p>

        <h2>3. Understand Your Risk Tolerance</h2>
        <p>Risk tolerance varies from person to person. Young investors can typically take more risk, while those nearing retirement should be more conservative. Assess your comfort level with market volatility.</p>

        <h2>4. Start with SIPs</h2>
        <p>Systematic Investment Plans (SIPs) are perfect for beginners. They help you invest regularly, reduce the impact of market volatility through rupee cost averaging, and build discipline.</p>

        <h2>5. Diversify Your Portfolio</h2>
        <p>Don't put all your eggs in one basket. Spread your investments across different asset classes like equity, debt, and gold to reduce risk.</p>

        <h2>6. Invest in What You Understand</h2>
        <p>Avoid complex financial products that you don't understand. Start with simple mutual funds and gradually expand your knowledge.</p>

        <h2>7. Take Advantage of Tax-Saving Investments</h2>
        <p>Use Section 80C investments like ELSS mutual funds, PPF, and EPF to save taxes while building wealth.</p>

        <h2>8. Review and Rebalance Regularly</h2>
        <p>Review your portfolio at least annually and rebalance if needed to maintain your desired asset allocation.</p>

        <h2>9. Avoid Emotional Investing</h2>
        <p>Don't let fear or greed drive your investment decisions. Stick to your plan and avoid making impulsive moves based on market news.</p>

        <h2>10. Seek Professional Advice</h2>
        <p>Consider consulting a financial advisor, especially for complex financial planning needs. Professional guidance can help you avoid costly mistakes.</p>

        <h2>Conclusion</h2>
        <p>Investing is a marathon, not a sprint. Start early, stay consistent, and let the power of compounding work for you. Remember, the best time to start investing was yesterday; the second-best time is today.</p>
      `,
      category: "Investment Basics",
      readTime: "5 min read",
      date: "March 15, 2024",
      author: "Rajesh Gupta",
      authorRole: "Senior Financial Advisor"
    },
    'sip-vs-lump-sum': {
      title: "SIP vs Lump Sum: Which Investment Strategy Works Better?",
      content: `
        <p>One of the most common dilemmas investors face is whether to invest through SIPs (Systematic Investment Plans) or make lump sum investments. Both strategies have their merits, and the choice depends on various factors including your financial situation, market conditions, and investment goals.</p>

        <h2>Understanding SIP (Systematic Investment Plan)</h2>
        <p>SIP involves investing a fixed amount regularly (monthly, quarterly) regardless of market conditions. This approach helps in rupee cost averaging and reduces the impact of market volatility.</p>

        <h3>Advantages of SIP:</h3>
        <ul>
          <li>Rupee cost averaging reduces impact of volatility</li>
          <li>Builds investment discipline</li>
          <li>Suitable for regular income earners</li>
          <li>Lower entry barrier</li>
          <li>Reduces timing risk</li>
        </ul>

        <h2>Understanding Lump Sum Investment</h2>
        <p>Lump sum investment involves investing a large amount at once. This strategy can be effective when markets are undervalued or when you have surplus funds available.</p>

        <h3>Advantages of Lump Sum:</h3>
        <ul>
          <li>Potential for higher returns in rising markets</li>
          <li>Full exposure to market upside immediately</li>
          <li>Suitable when markets are at low levels</li>
          <li>No need for regular monitoring</li>
        </ul>

        <h2>Which Strategy Performs Better?</h2>
        <p>Historical data suggests that lump sum investments often outperform SIPs in the long term, especially in consistently rising markets. However, SIPs provide better risk-adjusted returns and peace of mind.</p>

        <h2>When to Choose SIP</h2>
        <ul>
          <li>You have regular income but limited surplus</li>
          <li>You're new to investing</li>
          <li>Markets are at high levels</li>
          <li>You want to build investment discipline</li>
        </ul>

        <h2>When to Choose Lump Sum</h2>
        <ul>
          <li>You have a large surplus amount</li>
          <li>Markets are significantly undervalued</li>
          <li>You have high risk tolerance</li>
          <li>You can time the market effectively</li>
        </ul>

        <h2>The Hybrid Approach</h2>
        <p>Many successful investors use a combination of both strategies. They invest lump sums when opportunities arise and continue SIPs for regular wealth building.</p>

        <h2>Conclusion</h2>
        <p>There's no one-size-fits-all answer. SIPs are generally better for beginners and those with regular income, while lump sum works well for experienced investors with surplus funds and market timing skills. The key is to start investing and stay consistent with your chosen approach.</p>
      `,
      category: "Investment Strategy",
      readTime: "7 min read",
      date: "March 12, 2024",
      author: "Priya Sharma",
      authorRole: "Investment Strategist"
    }
  };

  return posts[slug] || null;
};

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm">{post.authorRole}</p>
                </div>
              </div>
              <div className="ml-8 flex items-center space-x-4 text-sm">
                <li>• Large Cap Equity Funds</li>
                <li>• Mid Cap Equity Funds</li>
                <li>• ELSS (Tax Saving)</li>
              </div>
            </div>
            <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center mb-8">
              <span className="text-gray-500 text-lg">Article Featured Image</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Share this article:</span>
                <button className="text-blue-600 hover:text-blue-800">Twitter</button>
                <button className="text-blue-600 hover:text-blue-800">LinkedIn</button>
                <button className="text-green-600 hover:text-green-800">WhatsApp</button>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Article Image</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tax Saving Investments Under Section 80C
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete guide to maximizing tax savings while building wealth
              </p>
              <Link href="/blog/section-80c-tax-saving-guide" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Article Image</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How to Build an Emergency Fund
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Step-by-step guide to financial security during unexpected situations
              </p>
              <Link href="/blog/emergency-fund-guide" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Read More →
              </Link>
            </article>

            <article className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Article Image</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mutual Fund Categories Explained
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Understanding equity, debt, and hybrid funds for better investment decisions
              </p>
              <Link href="/blog/mutual-fund-categories" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-blue-800">
            For specific data protection inquiries, you can contact our Data Protection Officer at 
            <a href="mailto:dpo@moneyandme.com" className="underline ml-1">dpo@moneyandme.com</a>
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Expert Guidance
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
