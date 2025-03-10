import React from 'react';

const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Get Started with Our Platform
        </h1>
        
        {/* Steps Section */}
        <div className="space-y-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                1
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Create Your Account
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-12">
              Sign up for free and get access to all our basic features.
            </p>
            <button className="ml-12 mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Sign Up
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                2
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Set Up Your Profile
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-12">
              Customize your profile and configure your preferences.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                3
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Start Using Features
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-12">
              Explore our platform and start using all the amazing features.
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Need Help?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our support team is always ready to assist you
          </p>
          <button className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted; 