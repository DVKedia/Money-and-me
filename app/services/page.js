import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your goals at every stage of life
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From wealth management to retirement planning, we provide end-to-end financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Wealth Management"
              description="Comprehensive portfolio management and investment strategies tailored to your financial goals and risk tolerance."
              icon="💰"
              href="/services/wealth-management"
              features={[
                "Portfolio Optimization",
                "Risk Assessment & Management",
                "Regular Performance Reviews",
                "Asset Allocation Strategy"
              ]}
            />
            
            <ServiceCard
              title="Tax Planning"
              description="Strategic tax planning to minimize liabilities and maximize your savings through legal and efficient methods."
              icon="📊"
              href="/services/tax-planning"
              features={[
                "Tax Optimization Strategies",
                "Deduction Planning",
                "Compliance Support",
                "Year-round Tax Advisory"
              ]}
            />
            
            <ServiceCard
              title="Investment Advisory"
              description="Expert guidance on investment opportunities across various asset classes and market conditions."
              icon="📈"
              href="/services/investment-advisory"
              features={[
                "Market Analysis & Research",
                "Asset Allocation",
                "Performance Tracking",
                "Investment Selection"
              ]}
            />
            
            <ServiceCard
              title="Estate Planning"
              description="Protect and transfer your wealth efficiently to future generations with comprehensive estate planning."
              icon="🏛️"
              href="/services/estate-planning"
              features={[
                "Will & Testament Drafting",
                "Trust Planning",
                "Succession Planning",
                "Legacy Protection"
              ]}
            />
            
            <ServiceCard
              title="Treasury Management"
              description="Optimize your cash flow and liquidity management for businesses and high-net-worth individuals."
              icon="🏦"
              href="/services/treasury-management"
              features={[
                "Cash Flow Optimization",
                "Liquidity Management",
                "Corporate Finance",
                "Risk Mitigation"
              ]}
            />
            
            <ServiceCard
              title="Retirement Planning"
              description="Secure your golden years with comprehensive retirement planning and pension optimization strategies."
              icon="🌅"
              href="/services/retirement-planning"
              features={[
                "Retirement Goal Setting",
                "Pension Planning",
                "Post-retirement Income",
                "Healthcare Planning"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference of working with certified financial professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Experts</h3>
              <p className="text-gray-600">
                SEBI registered advisors with professional certifications and years of experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Approach</h3>
              <p className="text-gray-600">
                Clear fee structure with no hidden charges. You know exactly what you're paying for
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Driven</h3>
              <p className="text-gray-600">
                Modern tools and platforms for portfolio tracking, reporting, and communication
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Touch</h3>
              <p className="text-gray-600">
                Dedicated relationship managers who understand your unique financial situation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to achieving your financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understand your financial situation, goals, and risk tolerance
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600 text-sm">
                Analyze your current portfolio and identify opportunities for improvement
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Develop a customized financial plan tailored to your specific needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Execute the plan with ongoing monitoring and regular reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Schedule a free consultation to discuss which services are right for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/get-started" variant="outline" size="lg">
              Book Free Consultation
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
