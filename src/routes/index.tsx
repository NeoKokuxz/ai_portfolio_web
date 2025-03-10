import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetStarted from '../pages/GetStarted';
import HomePage from '../pages/Home';

interface RouterProps {
  darkMode: boolean;
}

const AppRouter: React.FC<RouterProps> = ({ darkMode }) => {
  return (
    <Routes>
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/" element={<HomePage darkMode={darkMode} />} />
    </Routes>
  );
};

export default AppRouter; 