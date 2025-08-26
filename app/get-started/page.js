import CTAButton from '../components/CTAButton';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Financial Journey</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Take the first step towards financial freedom with our comprehensive consultation process
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started with professional financial planning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Consultation</h3>
              <p className="text-gray-600">
                Schedule a 30-minute free consultation to discuss your financial goals and current situation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Plan</h3>
              <p className="text-gray-600">
                Receive a customized financial plan tailored to your specific needs and objectives
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Start implementing your plan with ongoing support and regular reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our expert will contact you within 24 hours
              </p>
            </div>

            <form className="space-y-6">
              {/* Personal Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select age range</option>
                      <option>20-30</option>
                      <option>31-40</option>
                      <option>41-50</option>
                      <option>51-60</option>
                      <option>60+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select income range</option>
                      <option>Below ₹5 Lakhs</option>
                      <option>₹5-10 Lakhs</option>
                      <option>₹10-25 Lakhs</option>
                      <option>₹25-50 Lakhs</option>
                      <option>₹50 Lakhs - ₹1 Crore</option>
                      <option>Above ₹1 Crore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Investments</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select investment range</option>
                      <option>No investments</option>
                      <option>Below ₹1 Lakh</option>
                      <option>₹1-5 Lakhs</option>
                      <option>₹5-25 Lakhs</option>
                      <option>₹25 Lakhs - ₹1 Crore</option>
                      <option>Above ₹1 Crore</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Goals and Preferences */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Goals</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Financial Goal</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select primary goal</option>
                      <option>Retirement Planning</option>
                      <option>Wealth Creation</option>
                      <option>Tax Saving</option>
                      <option>Child Education</option>
                      <option>Home Purchase</option>
                      <option>Emergency Fund</option>
                      <option>Business Investment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Investment Experience</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="experience" className="mr-2" />
                        <span className="text-sm">Beginner</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="experience" className="mr-2" />
                        <span className="text-sm">Intermediate</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="experience" className="mr-2" />
                        <span className="text-sm">Experienced</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="risk" className="mr-2" />
                        <span className="text-sm">Conservative</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="risk" className="mr-2" />
                        <span className="text-sm">Moderate</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="risk" className="mr-2" />
                        <span className="text-sm">Aggressive</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Preferences */}
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultation Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 5 PM)</option>
                      <option>Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Mode</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Video Call</option>
                      <option>Phone Call</option>
                      <option>In-Person Meeting</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us more about your specific financial concerns or questions..."
                  ></textarea>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and 
                    <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I would like to receive updates about financial planning tips and market insights
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors"
                >
                  Book My Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-xl">Comprehensive financial guidance tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Financial Health Check</h3>
              <p className="text-blue-100">Complete analysis of your current financial situation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Goal-Based Planning</h3>
              <p className="text-blue-100">Customized strategies to achieve your financial objectives</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Expert Recommendations</h3>
              <p className="text-blue-100">Professional advice on investments and financial products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Action Plan</h3>
              <p className="text-blue-100">Step-by-step roadmap to financial success</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
