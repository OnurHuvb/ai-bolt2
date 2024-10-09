import React from 'react'
import { CheckCircle } from 'lucide-react'
import AuthCTA from '../components/AuthCTA'

const ForSchool = () => {
  const benefits = [
    'Implement AI learning strategies across your curriculum',
    'Develop comprehensive AI literacy programs',
    'Create actionable AI adoption plans',
    'Access a wide range of educational resources and tools',
    'Stay updated with the latest trends in AI and education'
  ]

  return (
    <div>
      <AuthCTA userType="school" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">AI Solutions for Schools</h1>
        <p className="text-xl mb-8">Discover how AI can transform your school's educational experience and prepare students for the future.</p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits for Schools</h2>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p>We work closely with schools to develop tailored AI integration strategies that align with your educational goals and curriculum. Our team of experts provides guidance on policy development, teacher training, and selecting the right AI tools for your institution.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">Ready to bring the power of AI to your school? Contact us for a consultation and let's explore how we can enhance your educational offerings.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForSchool