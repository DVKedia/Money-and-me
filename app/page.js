
import CTAButton from './components/CTAButton';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your <span className="text-yellow-400">Wealth</span> with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert financial planning and wealth management services tailored to secure your financial future. 
              Start your journey to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/get-started" size="lg">
                Book Free Consultation
              </CTAButton>
              <CTAButton href="/services" variant="outline" size="lg">
                Explore Services
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-gray-600">Certified professionals with proven track record</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-gray-600">SEBI Certified</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-gray-600">AMFI Registered</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-gray-600">ISO 27001</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-gray-600">5000+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From wealth management to retirement planning, we provide end-to-end financial solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Wealth Management"
              description="Comprehensive portfolio management and investment strategies tailored to your financial goals."
              icon="💰"
              href="/services/wealth-management"
              features={["Portfolio Optimization", "Risk Assessment", "Regular Reviews"]}
            />
            <ServiceCard
              title="Tax Planning"
              description="Strategic tax planning to minimize liabilities and maximize your savings through legal methods."
              icon="📊"
              href="/services/tax-planning"
              features={["Tax Optimization", "Deduction Planning", "Compliance Support"]}
            />
            <ServiceCard
              title="Investment Advisory"
              description="Expert guidance on investment opportunities across various asset classes and market conditions."
              icon="📈"
              href="/services/investment-advisory"
              features={["Market Analysis", "Asset Allocation", "Performance Tracking"]}
            />
          </div>
          
          <div className="text-center mt-12">
            <CTAButton href="/services" variant="secondary">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Quick Lead Form */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl">
              Get a free consultation with our certified financial advisors
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center">Request a Callback</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Time</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 5 PM)</option>
                  <option>Evening (5 PM - 8 PM)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your financial goals..."
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Request Callback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied clients who achieved their financial goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Business Owner"
              company="Tech Solutions Pvt Ltd"
              content="Money & Me helped me diversify my portfolio and plan for my retirement. Their expertise in tax planning saved me lakhs every year."
              rating={5}
            />
            <TestimonialCard
              name="Priya Sharma"
              role="Software Engineer"
              company="Global Tech Corp"
              content="The team provided excellent guidance for my first home purchase and investment planning. Very professional and trustworthy."
              rating={5}
            />
            <TestimonialCard
              name="Amit Patel"
              role="Doctor"
              company="City Hospital"
              content="Their comprehensive financial planning approach helped me secure my family's future. Highly recommend their services."
              rating={5}
            />
          </div>
          
          <div className="text-center mt-12">
            <CTAButton href="/testimonials" variant="secondary">
              Read More Reviews
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building Your Wealth Today
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied clients who trust us with their financial future
          </p>
          <CTAButton href="/get-started" size="lg">
            Get Started Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}