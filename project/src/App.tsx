import React, { useState, useEffect } from 'react';
import { Coffee, Timer, Brain, Target, TrendingUp, Award, Zap } from 'lucide-react';

function App() {
  const [timeWasted, setTimeWasted] = useState(0);
  const [productivity, setProductivity] = useState(100);
  const [coffeeLevel, setCoffeeLevel] = useState(0);
  const [achievement, setAchievement] = useState('');

  const achievements = [
    "Master of Doing Nothing",
    "Supreme Procrastinator",
    "Time Wasting Expert",
    "Professional Chair Warmer",
    "Elite Scroll Master"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeWasted(prev => prev + 1);
      setProductivity(prev => Math.max(0, prev - 0.5));
      
      if (timeWasted % 60 === 0) {
        setAchievement(achievements[Math.floor(Math.random() * achievements.length)]);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeWasted]);

  const drinkCoffee = () => {
    setCoffeeLevel(prev => Math.min(100, prev + 20));
    setProductivity(prev => Math.min(100, prev + 5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <Brain className="w-10 h-10" />
            Professional Procrastination Dashboard™
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Timer className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white">Time Expertly Wasted</h2>
              </div>
              <p className="text-5xl font-bold text-white">{timeWasted} seconds</p>
            </div>

            <div className="bg-white/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white">Productivity Decline</h2>
              </div>
              <div className="w-full bg-white/30 rounded-full h-6">
                <div 
                  className="bg-red-500 h-6 rounded-full transition-all duration-500"
                  style={{ width: `${productivity}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white">Coffee Power</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full bg-white/30 rounded-full h-6">
                  <div 
                    className="bg-yellow-500 h-6 rounded-full transition-all duration-500"
                    style={{ width: `${coffeeLevel}%` }}
                  ></div>
                </div>
                <button 
                  onClick={drinkCoffee}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2 transition-colors"
                >
                  ☕️
                </button>
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-semibold text-white">Latest Achievement</h2>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <p className="text-xl text-white">{achievement || "Working on it..."}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              Warning: This dashboard is scientifically engineered to waste your time.
              Side effects may include increased procrastination and decreased productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;