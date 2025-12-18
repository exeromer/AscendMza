import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/templates/home';
import { ActivityDetail } from '../src/components/templates/activityDetail';
import { ScrollToTop } from '../src/utils/scrollToTop'; 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />       
      <Routes>
        {/* Ruta Principal */}
        <Route path="/" element={<Home />} />
        <Route path="/experiencia/:slug" element={<ActivityDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App