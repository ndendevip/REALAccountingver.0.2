import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                A
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">REAL　Accounting</span>
            </div>
          </Link>
          <div className="flex space-x-8">
            <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              <BookOpen className="w-5 h-5 mr-2" />
              入門編
            </button>
            <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              <Briefcase className="w-5 h-5 mr-2" />
              実践編
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;