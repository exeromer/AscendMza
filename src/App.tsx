import { lazy, Suspense } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/scrollToTop';
import { ScrollToBack } from './utils/scrollToBack';

const Home = lazy(() => import('./components/templates/home').then(module => ({ default: module.Home })));
const ActivityDetail = lazy(() => import('./components/templates/activityDetail').then(module => ({ default: module.ActivityDetail })));

const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-brand-bg text-brand-brown">
    <div className="animate-pulse flex flex-col items-center">
      <img src="/logo-ascend.png" alt="Cargando..." className="w-16 h-16 mb-4 opacity-50" />
      <span className="text-sm font-bold tracking-widest uppercase">Cargando Aventura...</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToBack />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia/:slug" element={<ActivityDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;