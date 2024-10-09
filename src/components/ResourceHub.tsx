import React from 'react'
import { Video, FileText, Wrench } from 'lucide-react'

const ResourceHub = () => {
  const resources = [
    { icon: Video, title: 'Webinars', count: 50 },
    { icon: FileText, title: 'Lesson Plans', count: 100 },
    { icon: Wrench, title: 'Free AI Tools', count: 25 }
  ]

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Resource Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="text-center">
              <resource.icon className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-4xl font-bold">{resource.count}+</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Explore Resources
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResourceHub