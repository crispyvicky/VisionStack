import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Insights() {
  const featuredArticles = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      slug: 'future-web-development-trends-2024'
    },
    {
      id: 2,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Learn why mobile-first design is crucial for modern applications and how to implement it effectively.',
      author: 'Emily Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      slug: 'mobile-first-design-importance'
    },
    {
      id: 3,
      title: 'React vs Vue.js: Choosing the Right Framework for Your Project',
      excerpt: 'A comprehensive comparison of React and Vue.js to help you make an informed decision for your next project.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      slug: 'react-vs-vue-framework-comparison'
    }
  ];

  const recentArticles = [
    {
      title: 'Building Scalable APIs with Node.js and Express',
      author: 'David Park',
      date: '2024-01-08',
      category: 'Backend',
      slug: 'scalable-apis-nodejs-express'
    },
    {
      title: 'User Experience Best Practices for E-commerce',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'UX Design',
      slug: 'ux-best-practices-ecommerce'
    },
    {
      title: 'The Rise of Serverless Architecture',
      author: 'Michael Chen',
      date: '2024-01-03',
      category: 'Architecture',
      slug: 'serverless-architecture-rise'
    },
    {
      title: 'CSS Grid vs Flexbox: When to Use Which',
      author: 'Sarah Johnson',
      date: '2024-01-01',
      category: 'CSS',
      slug: 'css-grid-vs-flexbox'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Redesign: 200% Increase in Conversions',
      client: 'TechStore Pro',
      description: 'How we transformed an outdated e-commerce platform into a modern, high-converting online store.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=300',
      results: '200% conversion increase',
      slug: 'techstore-pro-redesign'
    },
    {
      title: 'Mobile App Development for Healthcare Startup',
      client: 'HealthConnect',
      description: 'Building a secure, HIPAA-compliant mobile application for patient-doctor communication.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=300',
      results: '50k+ users in 6 months',
      slug: 'healthconnect-mobile-app'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#04279B] mb-6">
              Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from the world of 
              web and mobile development. Learn from our experiences and industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">
              Our latest thoughts on technology, design, and development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Tag size={16} />
                      <span className="text-[#04279B] font-medium">{article.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#04279B] transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User size={16} className="text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{article.author}</p>
                        <p className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-[#04279B] hover:text-blue-800 font-medium flex items-center space-x-1 group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles & Case Studies */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recent Articles */}
            <div>
              <h2 className="text-2xl font-bold text-[#04279B] mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          <Tag size={14} className="text-[#04279B]" />
                          <span className="text-sm font-medium text-[#04279B]">{article.category}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#04279B] transition-colors duration-200">
                          <Link href={`/insights/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="text-[#04279B] hover:text-blue-800 flex-shrink-0"
                      >
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div>
              <h2 className="text-2xl font-bold text-[#04279B] mb-8">Case Studies</h2>
              <div className="space-y-6">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-[#04279B]">{study.client}</span>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{study.results}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {study.description}
                      </p>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="text-[#04279B] hover:text-blue-800 font-medium flex items-center space-x-1 group"
                      >
                        <span>View Case Study</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#04279B] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-[#04279B] px-8 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-semibold hover:bg-gray-100 transition-colors duration-200 mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}