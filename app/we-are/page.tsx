import { Users, Award, Globe, Heart, Target, Lightbulb } from 'lucide-react';

export default function WeAre() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      description: 'Visionary leader with 10+ years in tech industry.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      description: 'Tech expert specializing in scalable architectures.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      description: 'Creative director with passion for user experience.'
    },
    {
      name: 'David Park',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      description: 'Full-stack developer with expertise in modern frameworks.'
    }
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Passion',
      description: 'Our team is passionate about technology and creating meaningful digital experiences.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners in their success.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex challenges.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#04279B] mb-6">
              We Are DevCorp
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate team of designers, developers, and strategists dedicated to creating 
              exceptional digital experiences that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04279B] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, DevCorp began as a small team of passionate developers who believed 
                that exceptional software should be accessible to businesses of all sizes. What started 
                as a vision to democratize technology has grown into a thriving company that serves 
                clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to be a leading web and app development company, known for our 
                innovative solutions, collaborative approach, and unwavering commitment to quality. 
                We've helped over 50 businesses transform their ideas into successful digital products.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#04279B] mb-2">150+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#04279B] mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#04279B] to-blue-600 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center text-white">
                    <Globe size={32} className="mx-auto mb-2" />
                    <div className="text-lg font-semibold">Global Reach</div>
                    <div className="text-sm">Worldwide Clients</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center text-white">
                    <Award size={32} className="mx-auto mb-2" />
                    <div className="text-lg font-semibold">Award Winning</div>
                    <div className="text-sm">Industry Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#04279B] rounded-lg flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The talented individuals who make the magic happen behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#04279B] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-[#04279B] to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            To empower businesses with cutting-edge digital solutions that drive growth, 
            enhance user experiences, and create lasting value. We believe technology should 
            be a catalyst for positive change and innovation.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg text-white italic">
              "We don't just build software; we craft digital experiences that inspire, 
              engage, and transform the way people interact with technology."
            </p>
            <p className="text-blue-200 mt-4">- Sarah Johnson, CEO & Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
}