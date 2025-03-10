import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Your Logo
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              Features
            </Link>
            <Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              Docs
            </Link>
            <Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              Pricing
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-600'}`}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button 
            onClick={() => navigate('/get-started')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try it Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 