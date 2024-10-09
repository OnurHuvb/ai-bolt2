import React from 'react'
import { BookOpen, FileText, Lightbulb, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeaturedServices = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'AI Literacy and Training',
      description: 'Implement AI learning strategies and literacy programs for teachers and students.',
      link: '/for-school'
    },
    {
      icon: FileText,
      title: 'Policy and AI Integration',
      description: 'Develop policies and actionable AI adoption plans for educational institutions.',
      link: '/for-school'
    },
    {
      icon: Lightbulb,
      title: 'Resource Hub',
      description: 'Access a collection of webinars, lesson plans, and free AI tools.',
      link: '/features'
    },
    {
      icon: Users,
      title: 'Insights and Updates',
      description: 'Stay informed with articles and guides on the evolving landscape of AI in education.',
      link: '/features'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-blue-600 hover:underline">Learn more &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices