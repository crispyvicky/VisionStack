'use client';

import { useState } from 'react';
import { Code, Smartphone, Globe, Database, Palette, BarChart3, Shield, Zap } from 'lucide-react';

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState('web');

  const webServices = [
    {
      icon: <Code size={32} />,
      title: 'Custom Web Applications',
      description: 'Scalable, performant web applications built with modern frameworks like React, Next.js, and Vue.js.'
    },
    {
      icon: <Globe size={32} />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and customer analytics.'
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with APIs, databases, and cloud infrastructure management.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Web Security',
      description: 'Implementation of security best practices, SSL certificates, and data protection measures.'
    }
  ];

  const appServices = [
    {
      icon: <Smartphone size={32} />,
      title: 'Native Mobile Apps',
      description: 'High-performance iOS and Android applications using Swift, Kotlin, and platform-specific features.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Cross-Platform Development',
      description: 'Efficient app development using React Native and Flutter for multiple platforms.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'App Analytics',
      description: 'Integration of analytics tools to track user behavior and app performance metrics.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Intuitive mobile interfaces designed for optimal user experience and engagement.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#04279B] mb-6">
              What We Do
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating cutting-edge digital solutions that drive business growth. 
              From web applications to mobile apps, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Toggle */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 rounded-lg p-2 flex">
              <button
                onClick={() => setActiveTab('web')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'web'
                    ? 'bg-[#04279B] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#04279B]'
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setActiveTab('app')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'app'
                    ? 'bg-[#04279B] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#04279B]'
                }`}
              >
                App Development
              </button>
            </div>
          </div>

          {/* Services Content */}
          <div className="transition-all duration-500">
            {activeTab === 'web' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#04279B] mb-4">Web Development Services</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We build responsive, scalable, and secure web applications that deliver exceptional user experiences.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {webServices.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="w-16 h-16 bg-[#04279B] rounded-lg flex items-center justify-center mb-6 text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'app' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#04279B] mb-4">App Development Services</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We create innovative mobile applications that engage users and drive business success across all platforms.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {appServices.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="w-16 h-16 bg-[#04279B] rounded-lg flex items-center justify-center mb-6 text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">
              We work with cutting-edge technologies to deliver the best results for your project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Next.js', 'Node.js', 'Python', 'React Native', 'Flutter', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'TypeScript'].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-lg font-semibold text-[#04279B]">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to ensure successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04279B] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your requirements, goals, and target audience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04279B] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create detailed project plans, wireframes, and technical specifications.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04279B] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Our team builds your solution using best practices and modern technologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04279B] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">We deploy your project and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}