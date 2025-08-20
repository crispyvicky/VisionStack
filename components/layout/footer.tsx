import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#04279B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-[#04279B] font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl">DevCorp</span>
            </div>
            <p className="text-blue-100 text-sm">
              Leading web and app development company delivering innovative digital solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/what-we-do" className="block text-blue-100 hover:text-white transition-colors duration-200">
                What We Do
              </Link>
              <Link href="/we-are" className="block text-blue-100 hover:text-white transition-colors duration-200">
                We Are
              </Link>
              <Link href="/insights" className="block text-blue-100 hover:text-white transition-colors duration-200">
                Insights
              </Link>
              <Link href="/careers" className="block text-blue-100 hover:text-white transition-colors duration-200">
                Careers
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <div className="space-y-2 text-blue-100">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>UI/UX Design</p>
              <p>Digital Strategy</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-blue-100">
                <Mail size={16} />
                <span className="text-sm">hello@devcorp.com</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <MapPin size={16} />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2024 DevCorp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;