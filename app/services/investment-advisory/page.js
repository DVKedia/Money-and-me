import CTAButton from '../../components/CTAButton';

export default function InvestmentAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Advisory</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Expert guidance on investment opportunities across various asset classes and market conditions
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
                Professional Investment Advisory
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Navigate the complex world of investments with confidence. Our investment advisory services provide 
                you with research-backed recommendations, market insights, and strategic guidance to help you make 
                informed investment decisions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a beginner looking to start your investment journey or an experienced investor 
                seeking to optimize your portfolio, our certified advisors will provide personalized recommendations 
                tailored to your financial goals and risk profile.
              </p>
              <CTAButton href="/get-started">
                Get Investment Guidance
              </CTAButton>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Investment Advisory Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Investment Services
            </h2>
            <p className="text-xl text-gray-600">
              From research to execution, we cover all aspects of investment advisory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Research & Analysis</h3>
              <p className="text-gray-600 mb-4">
                In-depth market research and analysis to identify investment opportunities and risks.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fundamental analysis</li>
                <li>• Technical analysis</li>
                <li>• Sector research</li>
                <li>• Economic indicators</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Asset Allocation Strategy</h3>
              <p className="text-gray-600 mb-4">
                Strategic asset allocation based on your risk profile and investment horizon.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Equity allocation</li>
                <li>• Debt allocation</li>
                <li>• Alternative investments</li>
                <li>• International exposure</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stock Selection</h3>
              <p className="text-gray-600 mb-4">
                Carefully curated stock recommendations based on thorough research and analysis.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Large cap stocks</li>
                <li>• Mid cap opportunities</li>
                <li>• Small cap gems</li>
                <li>• Dividend stocks</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mutual Fund Advisory</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance on mutual fund selection and portfolio construction.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fund selection</li>
                <li>• SIP planning</li>
                <li>• Performance monitoring</li>
                <li>• Fund switching</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Timing Guidance</h3>
              <p className="text-gray-600 mb-4">
                Strategic entry and exit recommendations based on market conditions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entry point identification</li>
                <li>• Exit strategies</li>
                <li>• Market cycle analysis</li>
                <li>• Volatility management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Tracking</h3>
              <p className="text-gray-600 mb-4">
                Continuous monitoring and reporting of your investment performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Portfolio performance</li>
                <li>• Benchmark comparison</li>
                <li>• Risk metrics</li>
                <li>• Regular reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investment Philosophy</h2>
            <p className="text-xl text-gray-600">
              Time-tested principles that guide our investment recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal-Based Investing</h3>
              <p className="text-gray-600">
                Every investment recommendation is aligned with your specific financial goals and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">
                Balanced approach to risk and return with appropriate diversification strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research-Driven</h3>
              <p className="text-gray-600">
                All recommendations are backed by thorough research and fundamental analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Term Focus</h3>
              <p className="text-gray-600">
                Emphasis on long-term wealth creation rather than short-term speculation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Investment Journey
          </h2>
          <p className="text-xl mb-8">
            Get expert investment advice tailored to your financial goals
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Book Investment Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
