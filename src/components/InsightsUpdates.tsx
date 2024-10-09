import React from 'react'

const InsightsUpdates = () => {
  const articles = [
    { title: 'The Future of AI in Classrooms', excerpt: 'Explore how AI is shaping the future of education...' },
    { title: 'Ethical Considerations of AI in Education', excerpt: 'Understanding the ethical implications of AI adoption...' },
    { title: 'AI Tools for Personalized Learning', excerpt: 'Discover AI-powered tools that cater to individual student needs...' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Insights and Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <a href="#" className="text-blue-600 hover:underline">Read more</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default InsightsUpdates