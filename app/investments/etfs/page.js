import CTAButton from '../../components/CTAButton';

export default function ETFsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Exchange Traded Funds (ETFs)</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Low-cost, diversified ETF investments tracking various indices and asset classes
            </p>
          </div>
        </div>
      </section>

      {/* ETF Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ETF Categories</h2>
            <p className="text-xl text-gray-600">Diversified ETF options for every investment strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Index ETFs</h3>
              <p className="text-gray-600 mb-4">Track major market indices for broad market exposure.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nifty 50 ETF</li>
                <li>• Sensex ETF</li>
                <li>• Nifty Next 50</li>
                <li>• Bank Nifty ETF</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sector ETFs</h3>
              <p className="text-gray-600 mb-4">Focused exposure to specific sectors and themes.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• IT Sector ETF</li>
                <li>• Banking ETF</li>
                <li>• Pharma ETF</li>
                <li>• Auto Sector ETF</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International ETFs</h3>
              <p className="text-gray-600 mb-4">Global diversification through international markets.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• US Market ETFs</li>
                <li>• Emerging Markets</li>
                <li>• Global Technology</li>
                <li>• Developed Markets</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🥇</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commodity ETFs</h3>
              <p className="text-gray-600 mb-4">Invest in commodities for portfolio diversification.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gold ETFs</li>
                <li>• Silver ETFs</li>
                <li>• Commodity Basket</li>
                <li>• Energy ETFs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bond ETFs</h3>
              <p className="text-gray-600 mb-4">Fixed income exposure through government and corporate bonds.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Government Bond ETFs</li>
                <li>• Corporate Bond ETFs</li>
                <li>• Short Duration</li>
                <li>• Long Duration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Beta ETFs</h3>
              <p className="text-gray-600 mb-4">Factor-based investing with enhanced strategies.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Low Volatility ETFs</li>
                <li>• Quality ETFs</li>
                <li>• Momentum ETFs</li>
                <li>• Value ETFs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ETFs?</h2>
            <p className="text-xl text-gray-600">Key advantages of ETF investing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Low Cost</h3>
              <p className="text-gray-600">Lower expense ratios compared to actively managed funds</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Liquidity</h3>
              <p className="text-gray-600">Trade throughout market hours like individual stocks</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diversification</h3>
              <p className="text-gray-600">Instant diversification across multiple securities</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">Clear visibility into underlying holdings and performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start ETF Investing</h2>
          <p className="text-xl mb-8">Build a diversified portfolio with low-cost ETFs</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get ETF Portfolio
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
