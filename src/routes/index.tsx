import { Routes, Route } from 'react-router-dom';
import GetStarted from '../pages/GetStarted';
import HomePage from '../pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
} 