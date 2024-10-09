import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'High School Teacher', content: 'AI has revolutionized my classroom. My students are more engaged than ever!' },
    { name: 'Michael Chen', role: 'Elementary School Principal', content: 'Implementing AI tools has significantly improved our school\'s overall performance.' },
    { name: 'Emily Rodriguez', role: 'Special Education Teacher', content: 'AI-powered assistive technologies have been a game-changer for my students with special needs.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Educators Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials