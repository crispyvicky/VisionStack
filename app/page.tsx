import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Palette, BarChart3, Users, Award, CheckCircle, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Turning Your Ideas Into{' '}
                <span className="text-[#04279B]">High-Impact Digital Products</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                From mobile apps to web platforms, we design and develop tailored solutions that elevate your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/lets-connect"
                  className="bg-[#04279B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
                <Link 
                  href="/what-we-do"
                  className="border-2 border-[#04279B] text-[#04279B] px-8 py-4 rounded-lg font-semibold hover:bg-[#04279B] hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              {/* 3D Geometric Shapes - CSS Recreation */}
              <div className="relative w-96 h-96">
                {/* Main Card/Platform */}
                <div className="absolute top-16 left-8 w-72 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl transform rotate-12 perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Blue Curved Shape */}
                <div className="absolute top-32 -left-4 w-32 h-24 bg-gradient-to-r from-[#04279B] to-blue-600 rounded-full transform -rotate-45 shadow-xl opacity-90"></div>
                
                {/* Blue Quarter Circle */}
                <div className="absolute top-8 right-16 w-24 h-24 bg-gradient-to-br from-[#04279B] to-blue-700 rounded-full shadow-lg transform rotate-12"></div>
                
                {/* Small Blue Circle */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-[#04279B] rounded-full shadow-md"></div>
                
                {/* Additional Geometric Elements */}
                <div className="absolute bottom-16 right-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-[#04279B] rounded-lg transform rotate-45 shadow-lg opacity-80"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-24 right-32 w-6 h-6 bg-[#04279B] rounded-full shadow-md animate-pulse"></div>
                <div className="absolute bottom-32 left-16 w-4 h-4 bg-blue-500 rounded-full shadow-sm animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04279B] mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating digital experiences that matter. Our expertise spans web development, 
              mobile applications, and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-[#04279B] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">Custom web applications built with modern technologies and best practices.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-[#04279B] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-[#04279B] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Palette className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Beautiful, intuitive designs that provide exceptional user experiences.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-[#04279B] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Strategy</h3>
              <p className="text-gray-600">Strategic planning and consulting to maximize your digital presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#04279B] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04279B] mb-6">
                Why Choose DevCorp?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with creative innovation to deliver solutions that exceed expectations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#04279B] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-600">Skilled developers and designers with years of industry experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#04279B] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance</h3>
                    <p className="text-gray-600">Rigorous testing and quality control processes for every project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#04279B] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">On-Time Delivery</h3>
                    <p className="text-gray-600">We respect deadlines and deliver projects on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#04279B] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                    <p className="text-gray-600">Continuous support and maintenance for long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <Users className="mx-auto text-[#04279B] mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
                    <h3 className="font-semibold text-gray-900 mb-2">Collaborative</h3>
                    <p className="text-gray-600 text-sm">We work closely with you throughout the entire process.</p>
                  </div>
                  <div className="text-center group">
                    <Award className="mx-auto text-[#04279B] mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
                    <h3 className="font-semibold text-gray-900 mb-2">Award-Winning</h3>
                    <p className="text-gray-600 text-sm">Recognized for excellence in digital innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#04279B] to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help bring your vision to life with our expertise and passion for innovation.
          </p>
          <Link 
            href="/lets-connect"
            className="bg-white text-[#04279B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group"
          >
            Get Started Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}