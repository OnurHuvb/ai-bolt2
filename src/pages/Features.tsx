import React from 'react'
import { BookOpen, FileText, Lightbulb, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'AI Literacy and Training',
      description: 'Comprehensive programs to help schools and districts implement AI learning strategies and AI literacy programs for teachers and students.'
    },
    {
      icon: FileText,
      title: 'Policy and AI Integration',
      description: 'Expert guidance on policy development and actionable AI adoption plans tailored for educational institutions.'
    },
    {
      icon: Lightbulb,
      title: 'Resource Hub',
      description: 'Access our extensive collection of webinars, lesson plans, and free AI tools to enhance your teaching and learning experiences.'
    },
    {
      icon: Users,
      title: 'Insights and Updates',
      description: 'Stay informed with our regularly updated articles and guides on the evolving landscape of AI in education.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Features</h1>
      <p className="text-xl mb-8">Discover the powerful features of AI in education that can transform your teaching and learning experiences.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features