import CTAButton from '../components/CTAButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Money & Me</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner in building a secure financial future through expert guidance and personalized strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, Money & Me was born from a simple belief: everyone deserves access to professional financial guidance, 
                regardless of their current wealth status. We started as a small team of passionate financial advisors who wanted to 
                democratize wealth management.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we've grown to serve over 5,000 clients across India, helping them navigate complex financial decisions and 
                build sustainable wealth. Our name "Money & Me" reflects our personal approach - it's not just about money, 
                it's about your unique financial journey.
              </p>
              <p className="text-lg text-gray-600">
                We believe that financial planning should be transparent, accessible, and tailored to your individual goals. 
                That's why we've built a company culture centered around trust, expertise, and genuine care for our clients' success.
              </p>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Company Story Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower individuals and families to achieve financial freedom through personalized guidance, 
                innovative solutions, and unwavering commitment to their success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency in all our dealings. No hidden fees, no complex jargon - 
                just honest advice that puts your interests first.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We continuously strive for excellence in service delivery, staying updated with market trends 
                and regulatory changes to provide the best advice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We leverage technology and innovative approaches to make financial planning more accessible 
                and effective for our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centric</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our clients. Your financial success 
                is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Certified professionals with decades of combined experience in financial planning and wealth management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rahul Mehta</h3>
              <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                15+ years in wealth management. SEBI Registered Investment Advisor. MBA Finance from IIM Bangalore. 
                Passionate about helping families achieve financial independence.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sneha Agarwal</h3>
              <p className="text-blue-600 font-medium mb-3">Head of Tax Planning</p>
              <p className="text-gray-600 text-sm">
                Chartered Accountant with 12+ years experience. Expert in tax optimization strategies and 
                regulatory compliance. Helps clients save thousands in taxes annually.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vikram Singh</h3>
              <p className="text-blue-600 font-medium mb-3">Senior Investment Advisor</p>
              <p className="text-gray-600 text-sm">
                CFA charterholder with 10+ years in portfolio management. Specializes in equity research and 
                asset allocation strategies for high-net-worth individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Money & Me?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Here's what sets us apart from other financial advisory firms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-blue-100">
                9+ years of consistent performance with 95% client satisfaction rate
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-blue-100">
                SEBI registered and AMFI certified with full regulatory compliance
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Technology Driven</h3>
              <p className="text-blue-100">
                Modern tools and platforms for portfolio tracking and reporting
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3">Personal Touch</h3>
              <p className="text-blue-100">
                Dedicated relationship managers for personalized service
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/get-started" variant="outline" size="lg">
              Start Your Journey With Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
