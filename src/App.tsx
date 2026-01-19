import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Custom from './pages/Custom';

function App() {
  return (
    <Router>
      <div className='min-h-screen w-full flex justify-center bg-[var(--primary-bg)]'>
        <div className='w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 max-w-4xl flex flex-col'>
          <Header />
          <main className="flex-1 p-4 sm:p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/more" element={<Custom />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;