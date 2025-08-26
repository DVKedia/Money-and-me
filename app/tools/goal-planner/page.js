'use client';

import { useState } from 'react';
import CTAButton from '../../components/CTAButton';

export default function GoalPlannerPage() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: 'Child Education',
      targetAmount: 2500000,
      timeHorizon: 15,
      currentSavings: 200000,
      monthlyContribution: 8000,
      expectedReturn: 12
    }
  ]);

  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: 0,
    timeHorizon: 0,
    currentSavings: 0,
    monthlyContribution: 0,
    expectedReturn: 12
  });

  const calculateGoal = (goal) => {
    const monthlyRate = goal.expectedReturn / 100 / 12;
    const months = goal.timeHorizon * 12;
    
    // Future value of current savings
    const futureValueCurrent = goal.currentSavings * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions (annuity)
    const futureValueSIP = goal.monthlyContribution * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    const totalAccumulated = futureValueCurrent + futureValueSIP;
    const shortfall = Math.max(0, goal.targetAmount - totalAccumulated);
    
    // Required monthly SIP to cover shortfall
    const requiredSIP = shortfall > 0 ? 
      (shortfall * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1) : 0;

    return {
      totalAccumulated,
      shortfall,
      requiredSIP,
      onTrack: shortfall <= 0
    };
  };

  const addGoal = () => {
    if (newGoal.name && newGoal.targetAmount > 0 && newGoal.timeHorizon > 0) {
      setGoals([...goals, { ...newGoal, id: Date.now() }]);
      setNewGoal({
        name: '',
        targetAmount: 0,
        timeHorizon: 0,
        currentSavings: 0,
        monthlyContribution: 0,
        expectedReturn: 12
      });
    }
  };

  const updateGoal = (id, field, value) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, [field]: value } : goal
    ));
  };

  const removeGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Goal Planner</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Plan and track your financial goals with our comprehensive goal planning tool
            </p>
          </div>
        </div>
      </section>

      {/* Add New Goal */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Add New Financial Goal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Goal Name</label>
                <input
                  type="text"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
                  placeholder="e.g., Child Education, Home Purchase"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Amount (₹)</label>
                <input
                  type="number"
                  value={newGoal.targetAmount}
                  onChange={(e) => setNewGoal({...newGoal, targetAmount: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Horizon (Years)</label>
                <input
                  type="number"
                  value={newGoal.timeHorizon}
                  onChange={(e) => setNewGoal({...newGoal, timeHorizon: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Savings (₹)</label>
                <input
                  type="number"
                  value={newGoal.currentSavings}
                  onChange={(e) => setNewGoal({...newGoal, currentSavings: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Contribution (₹)</label>
                <input
                  type="number"
                  value={newGoal.monthlyContribution}
                  onChange={(e) => setNewGoal({...newGoal, monthlyContribution: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Return (%)</label>
                <input
                  type="number"
                  value={newGoal.expectedReturn}
                  onChange={(e) => setNewGoal({...newGoal, expectedReturn: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="1"
                  max="30"
                  step="0.5"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={addGoal}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Add Goal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Financial Goals</h2>
          
          <div className="space-y-8">
            {goals.map((goal) => {
              const calculation = calculateGoal(goal);
              
              return (
                <div key={goal.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{goal.name}</h3>
                      <button
                        onClick={() => removeGoal(goal.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Goal Inputs */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Goal Details</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Target Amount (₹)</label>
                            <input
                              type="number"
                              value={goal.targetAmount}
                              onChange={(e) => updateGoal(goal.id, 'targetAmount', Number(e.target.value))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time Horizon (Years)</label>
                            <input
                              type="number"
                              value={goal.timeHorizon}
                              onChange={(e) => updateGoal(goal.id, 'timeHorizon', Number(e.target.value))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings (₹)</label>
                            <input
                              type="number"
                              value={goal.currentSavings}
                              onChange={(e) => updateGoal(goal.id, 'currentSavings', Number(e.target.value))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly SIP (₹)</label>
                            <input
                              type="number"
                              value={goal.monthlyContribution}
                              onChange={(e) => updateGoal(goal.id, 'monthlyContribution', Number(e.target.value))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Expected Return (%)</label>
                            <input
                              type="number"
                              value={goal.expectedReturn}
                              onChange={(e) => updateGoal(goal.id, 'expectedReturn', Number(e.target.value))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              step="0.5"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Progress Visualization */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Progress Tracker</h4>
                        
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-600">Progress</span>
                              <span className="text-sm font-medium">
                                {((calculation.totalAccumulated / goal.targetAmount) * 100).toFixed(1)}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full ${calculation.onTrack ? 'bg-green-500' : 'bg-yellow-500'}`}
                                style={{width: `${Math.min(100, (calculation.totalAccumulated / goal.targetAmount) * 100)}%`}}
                              ></div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-indigo-600">
                                ₹{calculation.totalAccumulated.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-600">Projected Amount</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-gray-900">
                                ₹{goal.targetAmount.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-600">Target Amount</p>
                            </div>
                          </div>

                          <div className={`p-4 rounded-lg ${calculation.onTrack ? 'bg-green-50' : 'bg-yellow-50'}`}>
                            <div className="flex items-center">
                              <span className={`text-2xl mr-2 ${calculation.onTrack ? 'text-green-600' : 'text-yellow-600'}`}>
                                {calculation.onTrack ? '✓' : '⚠'}
                              </span>
                              <div>
                                <p className={`font-semibold ${calculation.onTrack ? 'text-green-900' : 'text-yellow-900'}`}>
                                  {calculation.onTrack ? 'On Track!' : 'Needs Adjustment'}
                                </p>
                                <p className={`text-sm ${calculation.onTrack ? 'text-green-700' : 'text-yellow-700'}`}>
                                  {calculation.onTrack 
                                    ? 'You\'re on track to achieve your goal'
                                    : `Shortfall: ₹${calculation.shortfall.toLocaleString()}`
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recommendations */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h4>
                        
                        <div className="space-y-4">
                          {!calculation.onTrack && (
                            <div className="bg-red-50 p-4 rounded-lg">
                              <h5 className="font-semibold text-red-900 mb-2">Required Monthly SIP</h5>
                              <p className="text-2xl font-bold text-red-600">
                                ₹{(goal.monthlyContribution + calculation.requiredSIP).toLocaleString()}
                              </p>
                              <p className="text-sm text-red-700">
                                Increase by ₹{calculation.requiredSIP.toLocaleString()} per month
                              </p>
                            </div>
                          )}

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-blue-900 mb-2">Asset Allocation</h5>
                            <div className="space-y-2">
                              {goal.timeHorizon > 10 && (
                                <div className="flex justify-between">
                                  <span className="text-blue-700">Equity</span>
                                  <span className="font-medium">70-80%</span>
                                </div>
                              )}
                              {goal.timeHorizon > 5 && goal.timeHorizon <= 10 && (
                                <div className="flex justify-between">
                                  <span className="text-blue-700">Equity</span>
                                  <span className="font-medium">60-70%</span>
                                </div>
                              )}
                              {goal.timeHorizon <= 5 && (
                                <div className="flex justify-between">
                                  <span className="text-blue-700">Debt</span>
                                  <span className="font-medium">60-70%</span>
                                </div>
                              )}
                              <div className="flex justify-between">
                                <span className="text-blue-700">Debt</span>
                                <span className="font-medium">
                                  {goal.timeHorizon > 10 ? '20-30%' : 
                                   goal.timeHorizon > 5 ? '30-40%' : '30-40%'}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-purple-900 mb-2">Investment Options</h5>
                            <ul className="text-sm text-purple-700 space-y-1">
                              {goal.timeHorizon > 10 && (
                                <>
                                  <li>• Large Cap Equity Funds</li>
                                  <li>• Mid Cap Equity Funds</li>
                                  <li>• ELSS (Tax Saving)</li>
                                </>
                              )}
                              {goal.timeHorizon > 5 && goal.timeHorizon <= 10 && (
                                <>
                                  <li>• Balanced Hybrid Funds</li>
                                  <li>• Large Cap Equity Funds</li>
                                  <li>• Corporate Bond Funds</li>
                                </>
                              )}
                              {goal.timeHorizon <= 5 && (
                                <>
                                  <li>• Conservative Hybrid Funds</li>
                                  <li>• Corporate Bond Funds</li>
                                  <li>• Fixed Deposits</li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {goals.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Goals Added Yet</h3>
              <p className="text-gray-600">Add your first financial goal to get started with planning</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Achieving Your Goals?</h2>
          <p className="text-xl mb-8">Get personalized advice from our financial planning experts</p>
          <CTAButton href="/get-started" variant="outline" size="lg">
            Get Professional Guidance
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
