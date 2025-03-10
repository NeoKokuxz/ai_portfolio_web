import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center space-y-8">
          <div className="inline-block animate-bounce bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-600 dark:text-blue-300 text-sm font-medium">
              ✨ New: AI-Powered Development
            </span>
          </div>

          <h1
            className={`text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Code Faster with
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              AI-Powered Intelligence
            </span>
          </h1>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Experience the future of coding with our AI-powered platform. Write
            better code, faster, and with fewer bugs.
          </p>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => navigate('/get-started')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Try it Free →
            </button>
            <button className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                50K+
              </div>
              <div
                className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                2M+
              </div>
              <div
                className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Lines Generated
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                98%
              </div>
              <div
                className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-24`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Why Developers Love Our Platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon="🤖"
              title="AI-Powered Suggestions"
              description="Get intelligent code suggestions and completions as you type."
              darkMode={darkMode}
            />
            <FeatureCard
              icon="⚡️"
              title="Lightning Fast"
              description="Experience real-time completions with near-zero latency."
              darkMode={darkMode}
            />
            <FeatureCard
              icon="🔒"
              title="Secure & Private"
              description="Your code stays private with enterprise-grade security."
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div
        className={`py-24 max-w-7xl mx-auto px-4 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        <div className={`text-center`}>
          <h2 className={`text-3xl font-bold mb-12`}>
            Trusted by developers worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
            {/* Add company logos here */}
            <div className="h-12 flex items-center justify-center">
              Company 1
            </div>
            <div className="h-12 flex items-center justify-center">
              Company 2
            </div>
            <div className="h-12 flex items-center justify-center">
              Company 3
            </div>
            <div className="h-12 flex items-center justify-center">
              Company 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function FeatureCard({
  icon,
  title,
  description,
  darkMode,
}: {
  icon: string;
  title: string;
  description: string;
  darkMode: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-xl ${
        darkMode ? 'bg-gray-700' : 'bg-white'
      } hover:transform hover:scale-105 transition-transform duration-200`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3
        className={`text-xl font-semibold mb-2 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}

export default HomePage;
