import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import Contact from './pages/Contact'
import ForSchool from './pages/ForSchool'
import ForTeachers from './pages/ForTeachers'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/for-school" element={<ForSchool />} />
            <Route path="/for-teachers" element={<ForTeachers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App