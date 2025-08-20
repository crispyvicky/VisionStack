import { MapPin, Clock, DollarSign, Users, Heart, Zap, Award, Coffee } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'We\'re looking for an experienced full stack developer to join our team and work on cutting-edge web applications.',
      requirements: ['5+ years experience with React/Node.js', 'Experience with cloud platforms', 'Strong problem-solving skills'],
      slug: 'senior-fullstack-developer'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'Join our design team to create beautiful and intuitive user experiences for web and mobile applications.',
      requirements: ['3+ years of UX/UI design experience', 'Proficiency in Figma/Sketch', 'Portfolio showcasing design work'],
      slug: 'ux-ui-designer'
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$100,000 - $140,000',
      description: 'Develop amazing mobile applications for iOS and Android using React Native and native technologies.',
      requirements: ['3+ years mobile development experience', 'React Native or native iOS/Android', 'App Store deployment experience'],
      slug: 'mobile-app-developer'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      description: 'Help us build and maintain scalable infrastructure and deployment pipelines for our applications.',
      requirements: ['Experience with AWS/GCP', 'Docker and Kubernetes knowledge', 'CI/CD pipeline experience'],
      slug: 'devops-engineer'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Drive product strategy and work closely with engineering and design teams to deliver exceptional products.',
      requirements: ['5+ years product management experience', 'Technical background preferred', 'Strong analytical skills'],
      slug: 'product-manager'
    },
    {
      title: 'Frontend Developer Intern',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Internship',
      salary: '$25 - $35/hour',
      description: 'Summer internship opportunity for students passionate about frontend development and modern web technologies.',
      requirements: ['Currently pursuing CS/related degree', 'Knowledge of React/JavaScript', 'Eagerness to learn'],
      slug: 'frontend-developer-intern'
    }
  ];

  const benefits = [
    {
      icon: <Heart size={32} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO policy.'
    },
    {
      icon: <Award size={32} />,
      title: 'Learning & Growth',
      description: '$2,000 annual learning budget and conference attendance opportunities.'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Culture',
      description: 'Collaborative environment with team events and quarterly offsites.'
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Equity & Bonuses',
      description: 'Competitive equity packages and performance-based bonuses.'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Office Perks',
      description: 'Free meals, snacks, and premium coffee in our modern office space.'
    }
  ];

  const companyValues = [
    'Innovation-driven mindset',
    'Collaborative team environment',
    'Commitment to quality',
    'Continuous learning culture',
    'Work-life balance',
    'Diversity and inclusion'
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#04279B] mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build the future of digital experiences with a passionate team of creators, 
              innovators, and problem solvers. We're always looking for talented individuals 
              to join our growing family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#04279B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                View Open Positions
              </button>
              <button className="border-2 border-[#04279B] text-[#04279B] px-8 py-4 rounded-lg font-semibold hover:bg-[#04279B] hover:text-white transition-all duration-200">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04279B] mb-6">
                Why Work at DevCorp?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At DevCorp, we believe that great work comes from great people working in a supportive, 
                innovative environment. We're not just building software—we're building careers and 
                creating a positive impact on the world through technology.
              </p>
              <div className="space-y-3">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#04279B] rounded-full"></div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Office environment"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Team meeting"
                  className="rounded-lg shadow-lg -mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Work environment"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">
              We believe in taking care of our team members with comprehensive benefits and perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#04279B] rounded-lg flex items-center justify-center mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#04279B] mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Ready to make an impact? Check out our current openings and find your next opportunity.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        position.type === 'Full-time' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <span className="text-[#04279B] mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users size={16} />
                        <span className="text-sm">{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm">{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign size={16} />
                        <span className="text-sm">{position.salary}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex items-center">
                    <button className="w-full bg-[#04279B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-[#04279B] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Hiring Process</h2>
            <p className="text-xl text-blue-100">
              We've designed our hiring process to be fair, efficient, and give you the best opportunity to showcase your skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#04279B] font-bold text-xl">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Application</h3>
              <p className="text-blue-100 text-sm">Submit your resume and cover letter through our application portal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#04279B] font-bold text-xl">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Screening</h3>
              <p className="text-blue-100 text-sm">Initial phone or video call to discuss your background and interests.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#04279B] font-bold text-xl">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Interview</h3>
              <p className="text-blue-100 text-sm">Technical and cultural fit interviews with team members and hiring managers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#04279B] font-bold text-xl">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Decision</h3>
              <p className="text-blue-100 text-sm">Final decision and offer discussion, including role details and compensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Don't See a Fit */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#04279B] mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals to join our team. If you don't see a role 
            that matches your skills but believe you'd be a great fit, we'd love to hear from you.
          </p>
          <button className="bg-[#04279B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
            Send Us Your Resume
          </button>
        </div>
      </section>
    </div>
  );
}