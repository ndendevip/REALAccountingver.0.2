import React from 'react';
import { BookOpen, FileText, PenTool, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '簿記の基本概念',
    icon: BookOpen,
    topics: [
      '簿記とは何か、複式簿記の仕組み',
      '簿記の目的と重要性'
    ],
    path: '/basic-concepts'
  },
  {
    title: '帳簿記入の基礎',
    icon: PenTool,
    topics: [
      '帳簿の種類と役割',
      '記帳の基本的な流れ'
    ],
    path: '/bookkeeping-records'
  },
  {
    title: '勘定科目',
    icon: FileText,
    topics: [
      '資産、負債、純資産、収益、費用の各勘定科目',
      '各勘定科目の意味と使用方法'
    ]
  },
  {
    title: '帳簿記入',
    icon: Layers,
    topics: [
      '帳簿の種類',
      '試算表の作成方法',
      '決算書の基礎知識'
    ]
  }
];

const BasicCourse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">会計用語や帳簿の基礎知識</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            仕訳のルールや勘定科目の知識など、気になったらこのページで確認するくらいの参考書程度の使い方をおすすめします。
            実際に事業を立ち上げて運営する上で、伝票会計など細かい知識は不要です。基本的なルールをしっかりおさえてすぐに実践編へいきましょう！
          </p>
        </div>

        <div className="grid gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                        {topicIndex + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{topic}</h3>
                      </div>
                      <div className="ml-auto">
                        <Link
                          to={section.path || '#'}
                          className="btn btn-secondary"
                        >
                          学習する
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BasicCourse;