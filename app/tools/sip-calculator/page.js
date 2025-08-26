'use client';

import { useState } from 'react';
import CTAButton from '../../components/CTAButton';

export default function SIPCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [results, setResults] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const months = timePeriod * 12;
    
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = monthlyInvestment * months;
    const totalReturns = futureValue - totalInvestment;
    
    setResults({
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SIP Calculator</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Calculate the future value of your systematic investment plan and see the power of compounding
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SIP Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Investment Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="500"
                    step="500"
                  />
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    max="30"
                    step="0.5"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Period (Years)
                  </label>
                  <input
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    max="50"
                  />
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <button
                  onClick={calculateSIP}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Calculate SIP Returns
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Results</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Future Value</h3>
                    <p className="text-3xl font-bold text-blue-600">₹{results.futureValue.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Total Investment</h3>
                    <p className="text-2xl font-bold text-green-600">₹{results.totalInvestment.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Total Returns</h3>
                    <p className="text-2xl font-bold text-yellow-600">₹{results.totalReturns.toLocaleString()}</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly SIP:</span>
                        <span className="font-medium">₹{monthlyInvestment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Investment Period:</span>
                        <span className="font-medium">{timePeriod} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Return:</span>
                        <span className="font-medium">{expectedReturn}% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Return Multiple:</span>
                        <span className="font-medium">{(results.futureValue / results.totalInvestment).toFixed(2)}x</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600">Enter your SIP details and click calculate to see projected returns</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Understanding SIP</h2>
            <p className="text-xl text-gray-600">Learn about the benefits of systematic investment planning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Power of Compounding</h3>
              <p className="text-gray-600">Your money grows exponentially over time as returns generate their own returns</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rupee Cost Averaging</h3>
              <p className="text-gray-600">Regular investments help average out market volatility over time</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Disciplined Investing</h3>
              <p className="text-gray-600">Automated investments help build discipline and consistent wealth creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your SIP?</h2>
          <p className="text-xl mb-8">Get personalized SIP recommendations from our experts</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Start SIP Planning
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
