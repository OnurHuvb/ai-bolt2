import React, { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState('')
  const features = ['easy to prepare', 'fun', 'planned', 'time saving', 'dynamic', 'surprising']
  const [featureIndex, setFeatureIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentFeature === features[featureIndex]) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && currentFeature === '') {
        setIsDeleting(false)
        setFeatureIndex((prev) => (prev + 1) % features.length)
        return
      }

      setCurrentFeature(prev => 
        isDeleting 
          ? prev.slice(0, -1) 
          : features[featureIndex].slice(0, prev.length + 1)
      )
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timer)
  }, [currentFeature, featureIndex, isDeleting])

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Revolutionize Teaching with AI
        </h1>
        <div className="h-8 mb-8">
          <span className="text-2xl md:text-3xl font-semibold">
            {currentFeature}<span className="animate-pulse">|</span>
          </span>
        </div>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Empower your teaching with cutting-edge AI tools and resources designed to enhance learning experiences and save time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/for-school" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg">
            For Schools
          </Link>
          <Link to="/for-teachers" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition duration-300 shadow-lg">
            For Teachers
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero