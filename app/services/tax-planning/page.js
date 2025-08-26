import CTAButton from '../../components/CTAButton';

export default function TaxPlanningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tax Planning</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Strategic tax planning to minimize liabilities and maximize your savings through legal and efficient methods
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
                Expert Tax Planning Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our tax planning services help individuals and businesses optimize their tax strategies while ensuring 
                full compliance with Indian tax laws. We focus on legitimate tax-saving opportunities that align 
                with your financial goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From Section 80C investments to advanced tax planning strategies, our certified tax advisors will 
                help you save thousands of rupees annually while building a robust financial portfolio.
              </p>
              <CTAButton href="/get-started">
                Start Tax Planning
              </CTAButton>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Tax Planning Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Saving Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Tax Saving Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Maximize your tax savings with our proven strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Section 80C Planning</h3>
              <p className="text-gray-600 mb-4">
                Optimize investments in ELSS, PPF, EPF, and life insurance to maximize ₹1.5 lakh deduction.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ELSS mutual funds</li>
                <li>• Public Provident Fund</li>
                <li>• Life insurance premiums</li>
                <li>• Home loan principal</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Insurance Benefits</h3>
              <p className="text-gray-600 mb-4">
                Leverage Section 80D for health insurance premiums and medical expenses.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Health insurance premiums</li>
                <li>• Preventive health check-ups</li>
                <li>• Senior citizen benefits</li>
                <li>• Critical illness coverage</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Loan Benefits</h3>
              <p className="text-gray-600 mb-4">
                Maximize deductions on home loan interest and principal payments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Section 24(b) interest deduction</li>
                <li>• Section 80C principal repayment</li>
                <li>• First-time buyer benefits</li>
                <li>• Joint ownership advantages</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Tax Planning</h3>
              <p className="text-gray-600 mb-4">
                Strategic planning for business owners and professionals to optimize tax liability.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Business expense optimization</li>
                <li>• Depreciation planning</li>
                <li>• Income timing strategies</li>
                <li>• Corporate structure optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capital Gains Planning</h3>
              <p className="text-gray-600 mb-4">
                Minimize capital gains tax through strategic investment and exit planning.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Long-term vs short-term planning</li>
                <li>• Tax loss harvesting</li>
                <li>• Reinvestment strategies</li>
                <li>• Exemption planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">👴</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retirement Tax Planning</h3>
              <p className="text-gray-600 mb-4">
                Plan for tax-efficient retirement with NPS and other retirement instruments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• National Pension System benefits</li>
                <li>• Pension income planning</li>
                <li>• Annuity tax implications</li>
                <li>• Withdrawal strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Year-Round Tax Support</h2>
            <p className="text-xl text-gray-600">
              Stay compliant with important tax deadlines and planning opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Q1 (Apr-Jun)</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• ITR filing</li>
                <li>• Advance tax planning</li>
                <li>• Investment review</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Q2 (Jul-Sep)</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• First advance tax</li>
                <li>• Mid-year review</li>
                <li>• Strategy adjustment</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Q3 (Oct-Dec)</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Second advance tax</li>
                <li>• Tax loss harvesting</li>
                <li>• Investment planning</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Q4 (Jan-Mar)</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Final advance tax</li>
                <li>• Last-minute investments</li>
                <li>• Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Save More on Taxes This Year
          </h2>
          <p className="text-xl mb-8">
            Get expert tax planning advice and start saving thousands annually
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Book Tax Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
