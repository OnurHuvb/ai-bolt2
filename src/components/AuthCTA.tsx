import React from 'react'
import { Link } from 'react-router-dom'

const AuthCTA = ({ userType }: { userType: 'school' | 'teacher' }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          {userType === 'school' ? 'Empower Your School' : 'Enhance Your Teaching'}
        </h2>
        <p className="mt-4 text-xl">
          {userType === 'school'
            ? 'Join our platform to access cutting-edge AI tools and resources for your entire school.'
            : 'Sign up to unlock AI-powered tools that will revolutionize your classroom experience.'}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300"
          >
            Register Now
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-300"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthCTA