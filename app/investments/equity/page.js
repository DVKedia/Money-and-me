import CTAButton from '../../components/CTAButton';

export default function EquityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Equity Investments</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Direct stock investments in carefully selected companies with strong fundamentals and growth potential
            </p>
          </div>
        </div>
      </section>

      {/* Equity Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Equity Investment Categories</h2>
            <p className="text-xl text-gray-600">Diversified stock selection across market capitalizations and sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Large Cap Stocks</h3>
              <p className="text-gray-600 mb-4">Stable, established companies with market cap above ₹20,000 crores.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lower volatility</li>
                <li>• Consistent dividends</li>
                <li>• Market leaders</li>
                <li>• Blue-chip companies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mid Cap Stocks</h3>
              <p className="text-gray-600 mb-4">Growing companies with market cap between ₹5,000-20,000 crores.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Higher growth potential</li>
                <li>• Moderate risk</li>
                <li>• Emerging market leaders</li>
                <li>• Good diversification</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Cap Stocks</h3>
              <p className="text-gray-600 mb-4">High-growth potential companies with market cap below ₹5,000 crores.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Highest growth potential</li>
                <li>• Higher volatility</li>
                <li>• Niche market players</li>
                <li>• Long-term wealth creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Strategies</h2>
            <p className="text-xl text-gray-600">Different approaches to equity investing based on your goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Value Investing</h3>
              <p className="text-gray-600 mb-6">
                Invest in undervalued stocks trading below their intrinsic value with strong fundamentals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Low P/E and P/B ratios</li>
                <li>• Strong balance sheets</li>
                <li>• Consistent earnings</li>
                <li>• Dividend-paying stocks</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Investing</h3>
              <p className="text-gray-600 mb-6">
                Focus on companies with above-average growth rates and strong future prospects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• High revenue growth</li>
                <li>• Expanding market share</li>
                <li>• Innovation leaders</li>
                <li>• Scalable business models</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Equity Investing</h2>
          <p className="text-xl mb-8">Get expert stock recommendations tailored to your investment goals</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Stock Recommendations
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
