import CTAButton from '../../components/CTAButton';

export default function WealthManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wealth Management</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive portfolio management and investment strategies tailored to grow and preserve your wealth
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Wealth Management Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our wealth management service is designed for individuals and families who want professional oversight 
                of their investment portfolio. We provide comprehensive financial planning, investment management, 
                and ongoing advisory services.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're building wealth for the first time or looking to preserve and grow existing assets, 
                our certified advisors will create a personalized strategy that aligns with your financial goals 
                and risk tolerance.
              </p>
              <CTAButton href="/get-started">
                Start Your Wealth Journey
              </CTAButton>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Wealth Management Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Wealth Management Service
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for all your wealth management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Portfolio Analysis</h3>
              <p className="text-gray-600">
                Comprehensive review of your current investments with detailed performance analysis and recommendations for optimization.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal-Based Planning</h3>
              <p className="text-gray-600">
                Customized investment strategies aligned with your specific financial goals, timeline, and risk tolerance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">
                Sophisticated risk assessment and mitigation strategies to protect your wealth during market volatility.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Rebalancing</h3>
              <p className="text-gray-600">
                Systematic portfolio rebalancing to maintain optimal asset allocation and maximize returns.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring of portfolio performance with detailed reporting and benchmark comparisons.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Optimization</h3>
              <p className="text-gray-600">
                Strategic tax planning integrated with investment decisions to minimize tax impact and maximize after-tax returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investment Approach</h2>
            <p className="text-xl text-gray-600">
              Time-tested strategies backed by research and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diversified Portfolio Strategy</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Asset allocation across multiple asset classes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Geographic diversification for global exposure
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Sector and style diversification
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Regular rebalancing to maintain target allocation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk-Adjusted Returns</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Focus on risk-adjusted performance metrics
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Downside protection strategies
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Volatility management techniques
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Long-term wealth preservation focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              No hidden fees, no surprises - just clear, competitive pricing
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">1.5%</p>
                <p className="text-gray-600 mb-6">Annual fee for portfolios up to ₹50 Lakhs</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Quarterly portfolio review</li>
                  <li>Basic reporting</li>
                  <li>Email support</li>
                </ul>
              </div>

              <div className="text-center border-2 border-blue-600 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">1.25%</p>
                <p className="text-gray-600 mb-6">Annual fee for portfolios ₹50L - ₹2 Crores</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Monthly portfolio review</li>
                  <li>Detailed reporting</li>
                  <li>Phone & email support</li>
                  <li>Tax optimization</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Elite</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">1.0%</p>
                <p className="text-gray-600 mb-6">Annual fee for portfolios above ₹2 Crores</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Weekly portfolio monitoring</li>
                  <li>Premium reporting</li>
                  <li>Dedicated relationship manager</li>
                  <li>Advanced strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building Wealth Today
          </h2>
          <p className="text-xl mb-8">
            Schedule a free consultation to discuss your wealth management needs
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Book Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
