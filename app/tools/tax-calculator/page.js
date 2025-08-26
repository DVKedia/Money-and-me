'use client';

import { useState } from 'react';
import CTAButton from '../../components/CTAButton';

export default function TaxCalculatorPage() {
  const [income, setIncome] = useState({
    salary: 1200000,
    houseRent: 0,
    otherIncome: 0
  });
  
  const [deductions, setDeductions] = useState({
    section80C: 150000,
    section80D: 25000,
    section24B: 200000,
    hra: 0,
    standardDeduction: 50000
  });

  const [regime, setRegime] = useState('old'); // 'old' or 'new'

  const calculateTax = () => {
    const totalIncome = income.salary + income.houseRent + income.otherIncome;
    
    if (regime === 'new') {
      // New tax regime (simplified)
      const taxableIncome = totalIncome - deductions.standardDeduction;
      let tax = 0;
      
      if (taxableIncome > 1500000) {
        tax += (taxableIncome - 1500000) * 0.30;
        tax += (1500000 - 1200000) * 0.20;
        tax += (1200000 - 900000) * 0.15;
        tax += (900000 - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 1200000) {
        tax += (taxableIncome - 1200000) * 0.20;
        tax += (1200000 - 900000) * 0.15;
        tax += (900000 - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 900000) {
        tax += (taxableIncome - 900000) * 0.15;
        tax += (900000 - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 600000) {
        tax += (taxableIncome - 600000) * 0.10;
        tax += (600000 - 300000) * 0.05;
      } else if (taxableIncome > 300000) {
        tax += (taxableIncome - 300000) * 0.05;
      }
      
      return { tax, taxableIncome, totalDeductions: deductions.standardDeduction };
    } else {
      // Old tax regime
      const totalDeductions = Object.values(deductions).reduce((sum, value) => sum + value, 0);
      const taxableIncome = Math.max(0, totalIncome - totalDeductions);
      let tax = 0;
      
      if (taxableIncome > 1000000) {
        tax += (taxableIncome - 1000000) * 0.30;
        tax += (1000000 - 500000) * 0.20;
        tax += (500000 - 250000) * 0.05;
      } else if (taxableIncome > 500000) {
        tax += (taxableIncome - 500000) * 0.20;
        tax += (500000 - 250000) * 0.05;
      } else if (taxableIncome > 250000) {
        tax += (taxableIncome - 250000) * 0.05;
      }
      
      return { tax, taxableIncome, totalDeductions };
    }
  };

  const result = calculateTax();
  const cess = result.tax * 0.04; // 4% Health and Education Cess
  const totalTax = result.tax + cess;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Income Tax Calculator</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Calculate your income tax liability for FY 2023-24 under both old and new tax regimes
            </p>
          </div>
        </div>
      </section>

      {/* Tax Regime Selection */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setRegime('old')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  regime === 'old' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Old Tax Regime
              </button>
              <button
                onClick={() => setRegime('new')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  regime === 'new' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                New Tax Regime
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Income Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-900 mb-6">Annual Income</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary Income (₹)</label>
                  <input
                    type="number"
                    value={income.salary}
                    onChange={(e) => setIncome({...income, salary: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">House Rent Income (₹)</label>
                  <input
                    type="number"
                    value={income.houseRent}
                    onChange={(e) => setIncome({...income, houseRent: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Other Income (₹)</label>
                  <input
                    type="number"
                    value={income.otherIncome}
                    onChange={(e) => setIncome({...income, otherIncome: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900">Total Income</h3>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{(income.salary + income.houseRent + income.otherIncome).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Deductions Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                {regime === 'old' ? 'Deductions' : 'Standard Deduction'}
              </h2>
              
              <div className="space-y-4">
                {regime === 'old' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Section 80C (₹)</label>
                      <input
                        type="number"
                        value={deductions.section80C}
                        onChange={(e) => setDeductions({...deductions, section80C: Number(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="150000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Max: ₹1,50,000</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Section 80D (₹)</label>
                      <input
                        type="number"
                        value={deductions.section80D}
                        onChange={(e) => setDeductions({...deductions, section80D: Number(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="75000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Max: ₹75,000</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Section 24B - Home Loan Interest (₹)</label>
                      <input
                        type="number"
                        value={deductions.section24B}
                        onChange={(e) => setDeductions({...deductions, section24B: Number(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="200000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Max: ₹2,00,000</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">HRA Exemption (₹)</label>
                      <input
                        type="number"
                        value={deductions.hra}
                        onChange={(e) => setDeductions({...deductions, hra: Number(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Standard Deduction (₹)</label>
                      <input
                        type="number"
                        value={deductions.standardDeduction}
                        onChange={(e) => setDeductions({...deductions, standardDeduction: Number(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="50000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Max: ₹50,000</p>
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Standard Deduction (₹)</label>
                    <input
                      type="number"
                      value={deductions.standardDeduction}
                      onChange={(e) => setDeductions({...deductions, standardDeduction: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      min="0"
                      max="50000"
                    />
                    <p className="text-xs text-gray-500 mt-1">Max: ₹50,000</p>
                    <p className="text-sm text-blue-600 mt-2">
                      New regime doesn't allow most deductions but has lower tax rates
                    </p>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900">Total Deductions</h3>
                  <p className="text-2xl font-bold text-blue-600">₹{result.totalDeductions.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Tax Calculation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Calculation</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Income:</span>
                    <span className="font-semibold">₹{(income.salary + income.houseRent + income.otherIncome).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Deductions:</span>
                    <span className="font-semibold text-blue-600">₹{result.totalDeductions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Taxable Income:</span>
                    <span className="font-semibold">₹{result.taxableIncome.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Income Tax:</span>
                    <span className="font-semibold text-red-600">₹{result.tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Health & Education Cess (4%):</span>
                    <span className="font-semibold text-red-600">₹{cess.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Tax Liability:</span>
                    <span className="text-red-600">₹{totalTax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Effective Tax Rate</h4>
                  <p className="text-2xl font-bold text-purple-600">
                    {((totalTax / (income.salary + income.houseRent + income.otherIncome)) * 100).toFixed(2)}%
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Monthly Tax Deduction</h4>
                  <p className="text-xl font-bold text-yellow-700">₹{(totalTax / 12).toLocaleString()}</p>
                  <p className="text-sm text-yellow-600">Approximate TDS per month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Slabs Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tax Slabs FY 2023-24</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Old Tax Regime</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Up to ₹2.5 Lakh</span>
                  <span className="font-semibold">0%</span>
                </div>
                <div className="flex justify-between">
                  <span>₹2.5 - ₹5 Lakh</span>
                  <span className="font-semibold">5%</span>
                </div>
                <div className="flex justify-between">
                  <span>₹5 - ₹10 Lakh</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Above ₹10 Lakh</span>
                  <span className="font-semibold">30%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">New Tax Regime</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Up to ₹3 Lakh</span>
                  <span className="font-semibold">0%</span>
                </div>
                <div className="flex justify-between">
                  <span>₹3 - ₹6 Lakh</span>
                  <span className="font-semibold">5%</span>
                </div>
                <div className="flex justify-between">
                  <span>₹6 - ₹9 Lakh</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>₹9 - ₹12 Lakh</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>₹12 - ₹15 Lakh</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Above ₹15 Lakh</span>
                  <span className="font-semibold">30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimize Your Tax Planning</h2>
          <p className="text-xl mb-8">Get expert advice on tax-saving investments and strategies</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Tax Planning Advice
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
