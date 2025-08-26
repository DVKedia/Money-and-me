'use client';

import { useState } from 'react';
import CTAButton from '../../components/CTAButton';

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [results, setResults] = useState(null);

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const months = loanTenure * 12;
    
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanAmount;
    
    setResults({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Calculator</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Calculate EMIs, total interest, and plan your loan repayment strategy effectively
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="100000"
                    step="100000"
                  />
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% per annum)</label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="6"
                    max="20"
                    step="0.25"
                  />
                  <input
                    type="range"
                    min="6"
                    max="20"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
                  <input
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="1"
                    max="30"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <button
                  onClick={calculateLoan}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Calculate EMI
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Calculation Results</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Monthly EMI</h3>
                    <p className="text-3xl font-bold text-green-600">₹{results.emi.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Total Amount Payable</h3>
                    <p className="text-2xl font-bold text-blue-600">₹{results.totalAmount.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Total Interest</h3>
                    <p className="text-2xl font-bold text-red-600">₹{results.totalInterest.toLocaleString()}</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Principal Amount:</span>
                        <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Rate:</span>
                        <span className="font-medium">{interestRate}% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Loan Tenure:</span>
                        <span className="font-medium">{loanTenure} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest vs Principal:</span>
                        <span className="font-medium">{((results.totalInterest / loanAmount) * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-gray-600">Enter loan details and click calculate to see EMI breakdown</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Loan Planning?</h2>
          <p className="text-xl mb-8">Get expert advice on loan structuring and repayment strategies</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Loan Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
