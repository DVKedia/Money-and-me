'use client';

import { useState } from 'react';
import CTAButton from '../../components/CTAButton';

export default function NetWorthCalculatorPage() {
  const [assets, setAssets] = useState({
    cash: 100000,
    investments: 500000,
    realEstate: 2000000,
    vehicle: 300000,
    other: 50000
  });
  
  const [liabilities, setLiabilities] = useState({
    homeLoan: 1500000,
    carLoan: 200000,
    personalLoan: 0,
    creditCard: 25000,
    other: 0
  });

  const totalAssets = Object.values(assets).reduce((sum, value) => sum + value, 0);
  const totalLiabilities = Object.values(liabilities).reduce((sum, value) => sum + value, 0);
  const netWorth = totalAssets - totalLiabilities;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Net Worth Calculator</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Track your financial progress by calculating your total assets minus liabilities
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Assets */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-900 mb-6">Assets</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cash & Bank Balance (₹)</label>
                  <input
                    type="number"
                    value={assets.cash}
                    onChange={(e) => setAssets({...assets, cash: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Investments (₹)</label>
                  <input
                    type="number"
                    value={assets.investments}
                    onChange={(e) => setAssets({...assets, investments: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Real Estate (₹)</label>
                  <input
                    type="number"
                    value={assets.realEstate}
                    onChange={(e) => setAssets({...assets, realEstate: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle (₹)</label>
                  <input
                    type="number"
                    value={assets.vehicle}
                    onChange={(e) => setAssets({...assets, vehicle: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Other Assets (₹)</label>
                  <input
                    type="number"
                    value={assets.other}
                    onChange={(e) => setAssets({...assets, other: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900">Total Assets</h3>
                  <p className="text-2xl font-bold text-green-600">₹{totalAssets.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Liabilities */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6">Liabilities</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Home Loan (₹)</label>
                  <input
                    type="number"
                    value={liabilities.homeLoan}
                    onChange={(e) => setLiabilities({...liabilities, homeLoan: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Car Loan (₹)</label>
                  <input
                    type="number"
                    value={liabilities.carLoan}
                    onChange={(e) => setLiabilities({...liabilities, carLoan: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Personal Loan (₹)</label>
                  <input
                    type="number"
                    value={liabilities.personalLoan}
                    onChange={(e) => setLiabilities({...liabilities, personalLoan: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Credit Card Debt (₹)</label>
                  <input
                    type="number"
                    value={liabilities.creditCard}
                    onChange={(e) => setLiabilities({...liabilities, creditCard: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Other Liabilities (₹)</label>
                  <input
                    type="number"
                    value={liabilities.other}
                    onChange={(e) => setLiabilities({...liabilities, other: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                  />
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900">Total Liabilities</h3>
                  <p className="text-2xl font-bold text-red-600">₹{totalLiabilities.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Net Worth */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Net Worth Summary</h2>
              
              <div className="space-y-6">
                <div className={`p-6 rounded-lg ${netWorth >= 0 ? 'bg-purple-50' : 'bg-red-50'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${netWorth >= 0 ? 'text-purple-900' : 'text-red-900'}`}>
                    Your Net Worth
                  </h3>
                  <p className={`text-4xl font-bold ${netWorth >= 0 ? 'text-purple-600' : 'text-red-600'}`}>
                    ₹{Math.abs(netWorth).toLocaleString()}
                  </p>
                  {netWorth < 0 && <p className="text-red-600 text-sm mt-2">(Negative Net Worth)</p>}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Assets:</span>
                    <span className="font-semibold text-green-600">₹{totalAssets.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Liabilities:</span>
                    <span className="font-semibold text-red-600">₹{totalLiabilities.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Net Worth:</span>
                    <span className={netWorth >= 0 ? 'text-purple-600' : 'text-red-600'}>
                      ₹{Math.abs(netWorth).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Financial Health Score</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        netWorth >= 1000000 ? 'bg-green-500' : 
                        netWorth >= 500000 ? 'bg-yellow-500' : 
                        netWorth >= 0 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{width: `${Math.min(100, Math.max(10, (netWorth + 1000000) / 20000))}%`}}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {netWorth >= 1000000 ? 'Excellent' : 
                     netWorth >= 500000 ? 'Good' : 
                     netWorth >= 0 ? 'Fair' : 'Needs Improvement'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Improve Your Net Worth</h2>
          <p className="text-xl mb-8">Get expert advice on building wealth and reducing liabilities</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Wealth Building Plan
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
