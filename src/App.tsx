import { useAtom } from 'jotai';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRouter from './routes';
import { darkModeWithPersistAtom } from './store/atoms';

export default function App() {
  const [darkMode] = useAtom(darkModeWithPersistAtom);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Navigation />
        <AppRouter />
      </div>
    </Router>
  );
}
