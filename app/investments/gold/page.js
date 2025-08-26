import CTAButton from '../../components/CTAButton';

export default function GoldPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gold Investments</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Hedge against inflation and diversify your portfolio with various gold investment options
            </p>
          </div>
        </div>
      </section>

      {/* Gold Investment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gold Investment Options</h2>
            <p className="text-xl text-gray-600">Multiple ways to invest in gold based on your preferences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gold ETFs</h3>
              <p className="text-gray-600 mb-4">Trade gold like stocks with high liquidity and transparency.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High liquidity</li>
                <li>• No storage costs</li>
                <li>• Real-time pricing</li>
                <li>• Demat account required</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gold Mutual Funds</h3>
              <p className="text-gray-600 mb-4">Invest in gold through mutual funds that invest in Gold ETFs.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SIP option available</li>
                <li>• Professional management</li>
                <li>• No demat required</li>
                <li>• Small amount investing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Gold</h3>
              <p className="text-gray-600 mb-4">Buy gold online in small quantities with secure storage.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Start from ₹1</li>
                <li>• Secure storage</li>
                <li>• Easy buying/selling</li>
                <li>• Physical delivery option</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sovereign Gold Bonds</h3>
              <p className="text-gray-600 mb-4">Government-issued bonds backed by gold with annual interest.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 2.5% annual interest</li>
                <li>• 8-year maturity</li>
                <li>• Tax benefits on maturity</li>
                <li>• Government guarantee</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">💍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Gold</h3>
              <p className="text-gray-600 mb-4">Traditional gold coins and bars for physical ownership.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Physical possession</li>
                <li>• Cultural significance</li>
                <li>• Storage required</li>
                <li>• Making charges apply</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gold Futures</h3>
              <p className="text-gray-600 mb-4">Trade gold futures for leveraged exposure (for experienced investors).</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Leverage available</li>
                <li>• High risk/reward</li>
                <li>• Requires expertise</li>
                <li>• Short-term trading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Gold Investment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Invest in Gold?</h2>
            <p className="text-xl text-gray-600">Key benefits of including gold in your portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inflation Hedge</h3>
              <p className="text-gray-600">Protects purchasing power during inflationary periods</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Portfolio Diversification</h3>
              <p className="text-gray-600">Low correlation with stocks and bonds reduces overall risk</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Acceptance</h3>
              <p className="text-gray-600">Universally accepted store of value across cultures</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Haven Asset</h3>
              <p className="text-gray-600">Tends to perform well during economic uncertainty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Add Gold to Your Portfolio</h2>
          <p className="text-xl mb-8">Diversify your investments with strategic gold allocation</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Gold Investment Plan
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
