import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/templates/home';
import { ActivityDetail } from '../src/components/templates/activityDetail';
import { ScrollToTop } from '../src/utils/scrollToTop'; 
import { ScrollToBack } from '../src/utils/scrollToBack';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />       
      <ScrollToBack />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia/:slug" element={<ActivityDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App