import React from 'react'
import { Lightbulb, Clock, Target, Zap } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    { icon: Lightbulb, title: 'Enhanced Learning', description: 'AI-powered tools adapt to individual student needs, providing personalized learning experiences.' },
    { icon: Clock, title: 'Time-Saving', description: 'Automate grading and administrative tasks, allowing teachers to focus more on instruction.' },
    { icon: Target, title: 'Data-Driven Insights', description: 'Gain valuable insights into student performance and learning patterns.' },
    { icon: Zap, title: 'Interactive Content', description: 'Create engaging, interactive content that keeps students motivated and interested.' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Benefits of AI in Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits