import CTAButton from '../../components/CTAButton';

export default function MutualFundsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mutual Funds</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Professional fund management with diversified portfolios across equity, debt, and hybrid categories
            </p>
          </div>
        </div>
      </section>

      {/* Fund Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mutual Fund Categories
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a wide range of mutual fund options based on your investment goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equity Funds</h3>
              <p className="text-gray-600 mb-4">
                Invest in stocks for long-term capital appreciation and wealth creation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Large Cap Funds</li>
                <li>• Mid Cap Funds</li>
                <li>• Small Cap Funds</li>
                <li>• Multi Cap Funds</li>
                <li>• Sectoral/Thematic Funds</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Debt Funds</h3>
              <p className="text-gray-600 mb-4">
                Stable income generation through government and corporate bonds.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Liquid Funds</li>
                <li>• Ultra Short Duration</li>
                <li>• Short Duration</li>
                <li>• Medium Duration</li>
                <li>• Long Duration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Funds</h3>
              <p className="text-gray-600 mb-4">
                Balanced approach combining equity and debt for moderate risk.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Conservative Hybrid</li>
                <li>• Balanced Hybrid</li>
                <li>• Aggressive Hybrid</li>
                <li>• Dynamic Asset Allocation</li>
                <li>• Multi Asset Allocation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ELSS Funds</h3>
              <p className="text-gray-600 mb-4">
                Tax-saving equity funds with 3-year lock-in period under Section 80C.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Tax deduction up to ₹1.5 lakh</li>
                <li>• 3-year lock-in period</li>
                <li>• Equity exposure for growth</li>
                <li>• Long-term capital gains tax benefits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Funds</h3>
              <p className="text-gray-600 mb-4">
                Diversify globally with investments in international markets.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• US Market Funds</li>
                <li>• Global Diversified Funds</li>
                <li>• Emerging Market Funds</li>
                <li>• Technology Focused Funds</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Index Funds</h3>
              <p className="text-gray-600 mb-4">
                Low-cost passive investing that tracks market indices.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Nifty 50 Index Funds</li>
                <li>• Sensex Index Funds</li>
                <li>• Nifty Next 50</li>
                <li>• Sectoral Index Funds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIP vs Lump Sum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Options</h2>
            <p className="text-xl text-gray-600">
              Choose the investment method that suits your financial situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-gray-900">Systematic Investment Plan (SIP)</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Invest a fixed amount regularly to benefit from rupee cost averaging and compounding.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Benefits:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Rupee cost averaging</li>
                  <li>• Disciplined investing</li>
                  <li>• Lower risk through averaging</li>
                  <li>• Flexible amount starting from ₹500</li>
                  <li>• Power of compounding</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900">Lump Sum Investment</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Invest a large amount at once when you have surplus funds or during market opportunities.
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Benefits:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Immediate market exposure</li>
                  <li>• Suitable for surplus funds</li>
                  <li>• Lower transaction costs</li>
                  <li>• Timing market opportunities</li>
                  <li>• Higher potential returns in bull markets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Selection Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Fund Selection Process</h2>
            <p className="text-xl text-gray-600">
              Rigorous analysis to recommend the best mutual funds for your portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analysis</h3>
              <p className="text-gray-600 text-sm">
                Evaluate historical performance across market cycles
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fund Manager Track Record</h3>
              <p className="text-gray-600 text-sm">
                Assess fund manager experience and consistency
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Metrics</h3>
              <p className="text-gray-600 text-sm">
                Analyze volatility, drawdowns, and risk-adjusted returns
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Analysis</h3>
              <p className="text-gray-600 text-sm">
                Consider expense ratios and impact on long-term returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Mutual Fund Journey
          </h2>
          <p className="text-xl mb-8">
            Get personalized mutual fund recommendations based on your financial goals
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Fund Recommendations
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
