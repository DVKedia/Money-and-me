import CTAButton from '../../components/CTAButton';

export default function TreasuryManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Treasury Management</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Optimize your cash flow and liquidity management for businesses and high-net-worth individuals
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
                Strategic Treasury Management
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Effective treasury management is crucial for maintaining optimal cash flow, managing liquidity, 
                and maximizing returns on surplus funds. Our treasury management services help businesses and 
                wealthy individuals optimize their cash management strategies.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From cash flow forecasting to investment of surplus funds, we provide comprehensive treasury 
                solutions that enhance your financial efficiency while managing risks effectively.
              </p>
              <CTAButton href="/get-started">
                Optimize Cash Management
              </CTAButton>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Treasury Management Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Treasury Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Treasury Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Complete cash management and liquidity optimization services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cash Flow Management</h3>
              <p className="text-gray-600 mb-4">
                Optimize cash flow through strategic planning and efficient working capital management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cash flow forecasting</li>
                <li>• Working capital optimization</li>
                <li>• Receivables management</li>
                <li>• Payables optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Liquidity Management</h3>
              <p className="text-gray-600 mb-4">
                Maintain optimal liquidity levels while maximizing returns on surplus funds.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Liquidity planning</li>
                <li>• Short-term investments</li>
                <li>• Money market instruments</li>
                <li>• Bank relationship management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Identify and mitigate financial risks through comprehensive risk management strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Interest rate risk</li>
                <li>• Currency risk hedging</li>
                <li>• Credit risk assessment</li>
                <li>• Operational risk controls</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">💹</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Management</h3>
              <p className="text-gray-600 mb-4">
                Strategic investment of surplus funds to generate additional returns.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Short-term investments</li>
                <li>• Fixed deposits</li>
                <li>• Government securities</li>
                <li>• Corporate bonds</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foreign Exchange</h3>
              <p className="text-gray-600 mb-4">
                Manage foreign exchange exposure and optimize international transactions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• FX risk hedging</li>
                <li>• Currency forecasting</li>
                <li>• International payments</li>
                <li>• Trade finance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive reporting and analytics for informed decision making.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cash position reports</li>
                <li>• Performance analytics</li>
                <li>• Risk dashboards</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Professional Treasury Management</h2>
            <p className="text-xl text-gray-600">
              Why businesses and individuals choose our treasury services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Improved Returns</h3>
              <p className="text-gray-600">
                Maximize returns on surplus cash through strategic investment planning
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">
                Reduce financial risks through comprehensive risk management strategies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Streamline cash management processes and improve operational efficiency
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-600">
                Ensure regulatory compliance and maintain proper documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Optimize Your Treasury Operations
          </h2>
          <p className="text-xl mb-8">
            Enhance cash flow efficiency and maximize returns with professional treasury management
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Treasury Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
