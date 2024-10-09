import React from 'react'
import { BookOpen, Clock, Zap, Users } from 'lucide-react'
import AuthCTA from '../components/AuthCTA'

const ForTeachers = () => {
  const tools = [
    { icon: BookOpen, title: 'Lesson Planning Assistant', description: 'AI-powered tool to help create engaging and personalized lesson plans.' },
    { icon: Clock, title: 'Automated Grading', description: 'Save time with AI-assisted grading for assignments and assessments.' },
    { icon: Zap, title: 'Interactive Content Creator', description: 'Generate interactive learning materials and quizzes with ease.' },
    { icon: Users, title: 'Student Progress Tracker', description: 'Monitor and analyze individual student progress with AI-driven insights.' },
  ]

  return (
    <div>
      <AuthCTA userType="teacher" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">AI Tools for Teachers</h1>
        <p className="text-xl mb-8">Explore how AI can enhance your teaching methods, save time, and provide personalized learning experiences for your students.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <tool.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Development</h2>
          <p>Enhance your AI skills with our comprehensive training programs:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>AI Literacy Workshops</li>
            <li>Integrating AI in the Classroom</li>
            <li>Data-Driven Teaching Strategies</li>
            <li>Ethical Considerations of AI in Education</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">Ready to transform your teaching with AI? Sign up for our free trial and experience the power of AI in education.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForTeachers