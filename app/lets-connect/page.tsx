'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function LetsConnect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'web',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-8">
            We've received your message and will get back to you within 24 hours. 
            In the meantime, feel free to explore our work and insights.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#04279B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#04279B] mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear about your vision and discuss 
              how we can bring it to life. Get in touch and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#04279B] mb-6">Tell Us About Your Project</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04279B] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04279B] focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04279B] focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04279B] focus:border-transparent"
                      >
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="both">Web & Mobile</option>
                        <option value="design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04279B] focus:border-transparent"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-25k">Under $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-plus">$250,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04279B] focus:border-transparent"
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04279B] focus:border-transparent"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#04279B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-[#04279B] mb-6">Get in Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#04279B] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">hello@devcorp.com</p>
                        <p className="text-gray-600">support@devcorp.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#04279B] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#04279B] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Office</p>
                        <p className="text-gray-600">123 Innovation Drive</p>
                        <p className="text-gray-600">San Francisco, CA 94107</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#04279B] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600">Mon - Fri: 9AM - 6PM PST</p>
                        <p className="text-gray-600">Sat - Sun: By appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-[#04279B] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Quick Response Guaranteed</h3>
                  <p className="text-blue-100 mb-4">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, don't hesitate to call us directly.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Average Response Time:</strong> 4-6 hours
                    </p>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-[#04279B] mb-4">Have Questions?</h3>
                  <p className="text-gray-600 mb-4">
                    Check out our frequently asked questions or schedule a free consultation call.
                  </p>
                  <button className="text-[#04279B] font-semibold hover:text-blue-800 transition-colors duration-200">
                    View FAQ →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of San Francisco's tech district.
            </p>
          </div>
          
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p>123 Innovation Drive, San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}