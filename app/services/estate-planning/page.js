import CTAButton from '../../components/CTAButton';

export default function EstatePlanningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Estate Planning</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Protect and transfer your wealth efficiently to future generations with comprehensive estate planning
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
                Comprehensive Estate Planning Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Estate planning is about more than just writing a will. It's about ensuring your wealth is protected, 
                your family is provided for, and your legacy continues according to your wishes. Our comprehensive 
                estate planning services help you navigate complex legal and tax considerations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From simple will drafting to complex trust structures, we work with legal experts to provide 
                holistic estate planning solutions that protect your assets and minimize tax implications for 
                your beneficiaries.
              </p>
              <CTAButton href="/get-started">
                Plan Your Legacy
              </CTAButton>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Estate Planning Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Estate Planning Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Estate Planning Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Protect your legacy with our comprehensive estate planning services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📜</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Will & Testament</h3>
              <p className="text-gray-600 mb-4">
                Professional will drafting to ensure your assets are distributed according to your wishes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Asset distribution planning</li>
                <li>• Guardian appointment</li>
                <li>• Executor selection</li>
                <li>• Legal compliance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust Planning</h3>
              <p className="text-gray-600 mb-4">
                Establish trusts to protect assets and provide for beneficiaries efficiently.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Revocable trusts</li>
                <li>• Irrevocable trusts</li>
                <li>• Charitable trusts</li>
                <li>• Special needs trusts</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Succession</h3>
              <p className="text-gray-600 mb-4">
                Plan for the smooth transition of your business to the next generation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Succession planning</li>
                <li>• Buy-sell agreements</li>
                <li>• Key person insurance</li>
                <li>• Valuation strategies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Minimization</h3>
              <p className="text-gray-600 mb-4">
                Minimize estate taxes and maximize wealth transfer to beneficiaries.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gift tax planning</li>
                <li>• Estate tax strategies</li>
                <li>• Generation-skipping</li>
                <li>• Charitable giving</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Asset Protection</h3>
              <p className="text-gray-600 mb-4">
                Protect your assets from potential creditors and legal challenges.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Liability protection</li>
                <li>• Offshore structures</li>
                <li>• Insurance strategies</li>
                <li>• Legal entity planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive planning for family wealth transfer and protection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Minor beneficiary planning</li>
                <li>• Education funding</li>
                <li>• Family governance</li>
                <li>• Wealth education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estate Planning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Estate Planning Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to protecting your legacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive review of your assets, family situation, and estate planning goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Develop customized estate planning strategy based on your unique circumstances
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">
                Prepare and execute all necessary legal documents with expert legal counsel
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Regular reviews and updates to ensure your plan remains current and effective
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Family's Future
          </h2>
          <p className="text-xl mb-8">
            Start planning your estate today to protect your legacy and provide for your loved ones
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Begin Estate Planning
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
