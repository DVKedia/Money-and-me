import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Options</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore diverse investment opportunities to build and grow your wealth across multiple asset classes
            </p>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diversified Investment Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build wealth through strategic allocation across various asset classes tailored to your risk profile and financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Mutual Funds"
              description="Professional fund management with diversified portfolios across equity, debt, and hybrid categories."
              icon="📊"
              href="/investments/mutual-funds"
              features={[
                "SIP & Lump Sum Options",
                "Tax Saving ELSS Funds",
                "Sector & Thematic Funds",
                "International Funds"
              ]}
            />
            
            <ServiceCard
              title="Equity Investments"
              description="Direct stock investments in carefully selected companies with strong fundamentals and growth potential."
              icon="📈"
              href="/investments/equity"
              features={[
                "Large Cap Stocks",
                "Mid & Small Cap Opportunities",
                "Dividend Paying Stocks",
                "Growth & Value Stocks"
              ]}
            />
            
            <ServiceCard
              title="Exchange Traded Funds"
              description="Low-cost, diversified ETF investments tracking various indices and asset classes."
              icon="🔄"
              href="/investments/etfs"
              features={[
                "Index ETFs",
                "Sector ETFs",
                "International ETFs",
                "Commodity ETFs"
              ]}
            />
            
            <ServiceCard
              title="Gold Investments"
              description="Hedge against inflation and diversify your portfolio with various gold investment options."
              icon="🥇"
              href="/investments/gold"
              features={[
                "Gold ETFs",
                "Gold Mutual Funds",
                "Digital Gold",
                "Gold Bonds"
              ]}
            />
            
            <ServiceCard
              title="Real Estate Investment Trusts"
              description="Invest in real estate without direct property ownership through professionally managed REITs."
              icon="🏢"
              href="/investments/reits"
              features={[
                "Commercial REITs",
                "Residential REITs",
                "Infrastructure REITs",
                "Regular Dividend Income"
              ]}
            />
            
            <ServiceCard
              title="Fixed Income Securities"
              description="Stable income generation through government and corporate bonds, fixed deposits, and debt instruments."
              icon="🏛️"
              href="/investments/fixed-income"
              features={[
                "Government Bonds",
                "Corporate Bonds",
                "Fixed Deposits",
                "Debt Mutual Funds"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Investment Philosophy
            </h2>
            <p className="text-xl text-gray-600">
              Time-tested principles that guide our investment recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal-Based Approach</h3>
              <p className="text-gray-600">
                Every investment recommendation aligns with your specific financial goals and timeline
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">
                Balanced portfolio construction with appropriate risk-return optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diversification</h3>
              <p className="text-gray-600">
                Spread investments across asset classes, sectors, and geographies
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Focus</h3>
              <p className="text-gray-600">
                Emphasis on long-term wealth creation rather than short-term speculation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Process</h2>
            <p className="text-xl text-gray-600">
              Our systematic approach to building your investment portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment</h3>
              <p className="text-gray-600 text-sm">
                Evaluate your risk tolerance and investment capacity
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Asset Allocation</h3>
              <p className="text-gray-600 text-sm">
                Design optimal asset allocation based on your profile
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Selection</h3>
              <p className="text-gray-600 text-sm">
                Choose specific investments within each asset class
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Regular review and rebalancing of your portfolio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Investment Journey
          </h2>
          <p className="text-xl mb-8">
            Build a diversified portfolio tailored to your financial goals and risk tolerance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/get-started" variant="outline" size="lg">
              Get Investment Plan
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Speak to Advisor
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
