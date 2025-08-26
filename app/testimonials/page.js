import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Real stories from satisfied clients who achieved their financial goals with Money & Me
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">₹500 Cr+</div>
              <p className="text-gray-600">Assets Under Management</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">9+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from clients across different financial goals and backgrounds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Business Owner"
              company="Tech Solutions Pvt Ltd"
              content="Money & Me helped me diversify my portfolio and plan for my retirement. Their expertise in tax planning saved me lakhs every year. The team is professional and always available for guidance."
              rating={5}
            />
            
            <TestimonialCard
              name="Priya Sharma"
              role="Software Engineer"
              company="Global Tech Corp"
              content="The team provided excellent guidance for my first home purchase and investment planning. Very professional and trustworthy. They made complex financial concepts easy to understand."
              rating={5}
            />
            
            <TestimonialCard
              name="Amit Patel"
              role="Doctor"
              company="City Hospital"
              content="Their comprehensive financial planning approach helped me secure my family's future. Highly recommend their services. The regular reviews keep me on track with my goals."
              rating={5}
            />

            <TestimonialCard
              name="Sneha Agarwal"
              role="Marketing Manager"
              company="Consumer Goods Ltd"
              content="Started my SIP journey with Money & Me 5 years ago. My portfolio has grown significantly, and I'm on track to achieve my financial goals. Great advisory service!"
              rating={5}
            />

            <TestimonialCard
              name="Vikram Singh"
              role="Entrepreneur"
              company="Manufacturing Business"
              content="Excellent tax planning strategies helped optimize my business finances. The team understands both personal and business financial needs. Very satisfied with their service."
              rating={5}
            />

            <TestimonialCard
              name="Anita Reddy"
              role="Teacher"
              company="International School"
              content="As a single mother, financial planning was overwhelming. Money & Me made it simple and helped me secure my daughter's education fund. Grateful for their support."
              rating={5}
            />

            <TestimonialCard
              name="Rohit Mehta"
              role="Sales Director"
              company="Pharmaceutical Company"
              content="Their retirement planning service is exceptional. Clear roadmap to achieve my retirement corpus with regular monitoring. Peace of mind knowing my future is secure."
              rating={5}
            />

            <TestimonialCard
              name="Kavya Nair"
              role="Chartered Accountant"
              company="Independent Practice"
              content="Professional approach to wealth management with transparent fee structure. No hidden charges and regular updates on portfolio performance. Highly recommended!"
              rating={5}
            />

            <TestimonialCard
              name="Suresh Gupta"
              role="Government Officer"
              company="State Government"
              content="Helped me understand different investment options and create a balanced portfolio. The educational approach of the team is commendable. Very happy with the results."
              rating={5}
            />

            <TestimonialCard
              name="Deepika Joshi"
              role="HR Manager"
              company="IT Services"
              content="Excellent guidance on ELSS investments and tax saving. The team's knowledge of tax laws is impressive. Saved significant amount on taxes while building wealth."
              rating={5}
            />

            <TestimonialCard
              name="Manoj Tiwari"
              role="Bank Manager"
              company="Private Bank"
              content="Even as a banking professional, I needed expert advice for personal investments. Money & Me provided unbiased recommendations that aligned with my goals."
              rating={5}
            />

            <TestimonialCard
              name="Ritu Kapoor"
              role="Interior Designer"
              company="Design Studio"
              content="Helped me plan for my child's higher education expenses. The goal-based approach and regular SIPs are helping me stay on track. Excellent service and support."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our clients about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">▶️</div>
                <p className="text-gray-600">Client Success Story</p>
                <p className="text-sm text-gray-500">Rajesh Kumar - Business Owner</p>
              </div>
            </div>

            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">▶️</div>
                <p className="text-gray-600">Investment Journey</p>
                <p className="text-sm text-gray-500">Priya Sharma - Software Engineer</p>
              </div>
            </div>

            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">▶️</div>
                <p className="text-gray-600">Retirement Planning Success</p>
                <p className="text-sm text-gray-500">Amit Patel - Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Industry recognition for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Financial Advisory Firm</h3>
              <p className="text-gray-600">Financial Excellence Awards 2023</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Client Satisfaction</h3>
              <p className="text-gray-600">Investment Advisory Awards 2023</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence in Wealth Management</h3>
              <p className="text-gray-600">Industry Recognition 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-xl mb-8">
            Start your journey to financial success with our expert guidance
          </p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Begin Your Success Story
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
