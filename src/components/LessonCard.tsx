import React, { useState } from 'react';
import { Book, ChevronDown, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LessonCardProps {
  title: string;
  description: string;
  lessonCount: string;
  level: string;
  icon: 'beginner' | 'intermediate' | 'advanced';
  path?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  lessonCount,
  level,
  icon,
  path
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const topics = [
    '基本的な概念と用語',
    '実践的な帳簿記入方法',
    'よくある取引パターン',
    '効率的な記帳のコツ'
  ];

  const CardContent = () => (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            <Book className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 text-xs rounded-full bg-blue-50 text-blue-600">
              {level}
            </span>
            <span className="text-sm text-gray-500">{lessonCount}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <PlayCircle className="w-4 h-4" />
              <span>今すぐ学ぶ</span>
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              <span>詳細を見る</span>
            </button>
          </div>
          
          {/* Accordion Content */}
          <div className={`mt-4 overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 mb-3">学習項目</h4>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-medium">{index + 1}</span>
                    </div>
                    <span className="text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return path ? (
    <Link to={path}>
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
};

export default LessonCard;