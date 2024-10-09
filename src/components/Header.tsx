import React from 'react'
import { Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Brain className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">AI in Education</span>
        </Link>
        <div className="flex items-center">
          <nav className="mr-8">
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header