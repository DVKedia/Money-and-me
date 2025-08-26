'use client';

import { useState } from 'react';
import CTAButton from '../../components/CTAButton';

export default function RetirementPlannerPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentIncome, setCurrentIncome] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [results, setResults] = useState(null);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = 25; // Assuming 25 years post retirement
    
    // Calculate future monthly expenses (70% of current income adjusted for inflation)
    const futureMonthlyExpenses = (currentIncome * 0.7) * Math.pow(1 + inflationRate/100, yearsToRetirement);
    
    // Calculate retirement corpus needed
    const monthlyInflationRate = inflationRate / 100 / 12;
    const retirementCorpus = futureMonthlyExpenses * 12 * yearsInRetirement * Math.pow(1 + monthlyInflationRate, yearsInRetirement/2);
    
    // Calculate monthly SIP required
    const monthlyReturnRate = expectedReturn / 100 / 12;
    const months = yearsToRetirement * 12;
    const monthlySIP = retirementCorpus / (((Math.pow(1 + monthlyReturnRate, months) - 1) / monthlyReturnRate) * (1 + monthlyReturnRate));
    
    setResults({
      retirementCorpus: Math.round(retirementCorpus),
      monthlySIP: Math.round(monthlySIP),
      futureMonthlyExpenses: Math.round(futureMonthlyExpenses),
      yearsToRetirement
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Retirement Planner</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Plan for a comfortable retirement by calculating how much you need to save and invest
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Retirement Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Age</label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    min="18"
                    max="65"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Retirement Age</label>
                  <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    min="50"
                    max="70"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly Income (₹)</label>
                  <input
                    type="number"
                    value={currentIncome}
                    onChange={(e) => setCurrentIncome(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    min="10000"
                    step="5000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Inflation Rate (%)</label>
                  <input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    min="3"
                    max="10"
                    step="0.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return on Investment (%)</label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    min="8"
                    max="20"
                    step="0.5"
                  />
                </div>

                <button
                  onClick={calculateRetirement}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-md font-medium hover:bg-orange-700 transition-colors"
                >
                  Calculate Retirement Plan
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Retirement Plan Results</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-2">Retirement Corpus Needed</h3>
                    <p className="text-3xl font-bold text-orange-600">₹{(results.retirementCorpus / 10000000).toFixed(2)} Cr</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Monthly SIP Required</h3>
                    <p className="text-2xl font-bold text-blue-600">₹{results.monthlySIP.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Future Monthly Expenses</h3>
                    <p className="text-2xl font-bold text-green-600">₹{results.futureMonthlyExpenses.toLocaleString()}</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Years to Retirement:</span>
                        <span className="font-medium">{results.yearsToRetirement} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Current Income:</span>
                        <span className="font-medium">₹{currentIncome.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Inflation Rate:</span>
                        <span className="font-medium">{inflationRate}% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Return:</span>
                        <span className="font-medium">{expectedReturn}% p.a.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🌅</div>
                  <p className="text-gray-600">Enter your details and click calculate to see your retirement plan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Retirement Today</h2>
          <p className="text-xl mb-8">Get professional retirement planning advice from our experts</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Retirement Plan
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
