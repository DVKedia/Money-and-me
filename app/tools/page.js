import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Calculators & Tools</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Plan your financial future with our comprehensive suite of calculators and planning tools
            </p>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Planning Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make informed financial decisions with our easy-to-use calculators and planning tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="SIP Calculator"
              description="Calculate the future value of your systematic investment plan and see the power of compounding."
              icon="📊"
              href="/tools/sip-calculator"
              features={[
                "Monthly SIP calculations",
                "Compound interest projections",
                "Goal-based planning",
                "Visual growth charts"
              ]}
            />
            
            <ServiceCard
              title="Retirement Planner"
              description="Plan for a comfortable retirement by calculating how much you need to save and invest."
              icon="🌅"
              href="/tools/retirement-planner"
              features={[
                "Retirement corpus calculation",
                "Inflation adjustment",
                "Multiple scenarios",
                "Monthly savings required"
              ]}
            />
            
            <ServiceCard
              title="Loan Calculator"
              description="Calculate EMIs, total interest, and plan your loan repayment strategy effectively."
              icon="🏠"
              href="/tools/loan-calculator"
              features={[
                "EMI calculations",
                "Amortization schedule",
                "Prepayment scenarios",
                "Interest savings analysis"
              ]}
            />
            
            <ServiceCard
              title="Net Worth Calculator"
              description="Track your financial progress by calculating your total assets minus liabilities."
              icon="💎"
              href="/tools/net-worth-calculator"
              features={[
                "Asset valuation",
                "Liability tracking",
                "Net worth trends",
                "Financial health score"
              ]}
            />
            
            <ServiceCard
              title="Tax Calculator"
              description="Calculate your income tax liability and plan tax-saving investments effectively."
              icon="📋"
              href="/tools/tax-calculator"
              features={[
                "Income tax calculation",
                "Tax saving suggestions",
                "Regime comparison",
                "Deduction optimization"
              ]}
            />
            
            <ServiceCard
              title="Goal Planner"
              description="Plan and track progress towards your financial goals with systematic investing."
              icon="🎯"
              href="/tools/goal-planner"
              features={[
                "Multiple goal tracking",
                "Timeline planning",
                "Investment allocation",
                "Progress monitoring"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Use Our Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Use Our Financial Tools?
            </h2>
            <p className="text-xl text-gray-600">
              Professional-grade calculators designed for accurate financial planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accurate Calculations</h3>
              <p className="text-gray-600">
                Precise calculations using industry-standard formulas and methodologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy to Use</h3>
              <p className="text-gray-600">
                User-friendly interface designed for both beginners and experienced investors
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Reports</h3>
              <p className="text-gray-600">
                Clear charts and graphs to visualize your financial projections
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🆓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free to Use</h3>
              <p className="text-gray-600">
                All our financial calculators are completely free with no hidden charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Planning Your Financial Future
          </h2>
          <p className="text-xl mb-8">
            Use our tools to create a comprehensive financial plan and achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/tools/sip-calculator" variant="outline" size="lg">
              Try SIP Calculator
            </CTAButton>
            <CTAButton href="/get-started" variant="secondary" size="lg">
              Get Professional Help
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
