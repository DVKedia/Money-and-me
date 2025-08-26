import CTAButton from '../../components/CTAButton';

export default function REITsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Investment Trusts (REITs)</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Invest in real estate without direct property ownership through professionally managed REITs
            </p>
          </div>
        </div>
      </section>

      {/* REIT Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of REITs</h2>
            <p className="text-xl text-gray-600">Different REIT categories for diversified real estate exposure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial REITs</h3>
              <p className="text-gray-600 mb-4">Invest in office buildings, retail spaces, and commercial properties.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office complexes</li>
                <li>• Shopping malls</li>
                <li>• Business parks</li>
                <li>• Commercial towers</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential REITs</h3>
              <p className="text-gray-600 mb-4">Exposure to residential properties and housing developments.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Apartment complexes</li>
                <li>• Housing societies</li>
                <li>• Rental properties</li>
                <li>• Student housing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure REITs</h3>
              <p className="text-gray-600 mb-4">Invest in infrastructure assets like highways and utilities.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Highway projects</li>
                <li>• Power transmission</li>
                <li>• Telecom towers</li>
                <li>• Logistics hubs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of REIT Investing</h2>
            <p className="text-xl text-gray-600">Why REITs are attractive for portfolio diversification</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Income</h3>
              <p className="text-gray-600">Quarterly dividend distributions from rental income</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Liquidity</h3>
              <p className="text-gray-600">Trade on stock exchanges unlike direct real estate</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Management</h3>
              <p className="text-gray-600">Expert property management and maintenance</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diversification</h3>
              <p className="text-gray-600">Access to diversified real estate portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest in Real Estate Through REITs</h2>
          <p className="text-xl mb-8">Get real estate exposure with professional management and regular income</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Explore REIT Options
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
