import React from 'react';
import { TrendingUp, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="relative z-10 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                簿記3級取得しません！
              </div>
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                簿記2級取得しません！
              </div>
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                管理会計勉強しません！
              </div>
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:max-w-3xl">
              <span className="block">実務で使える</span>
              <span className="block text-blue-600">現代の会計スキル</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 lg:max-w-2xl">
              資格学習は必要ありません。現代のビジネスに必要な会計スキルを、
              自社の決算書作成やフリーランスの会計処理に特化して効率的に学べます。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary text-base px-8 py-3">
                無料で始める
              </button>
              <button className="btn btn-secondary text-base px-8 py-3">
                コース一覧を見る
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:max-w-2xl">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">実践重視</h3>
                  <p className="text-sm text-gray-600">現場で使える知識</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">効率学習</h3>
                  <p className="text-sm text-gray-600">必要な知識に集中</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">短期習得</h3>
                  <p className="text-sm text-gray-600">最短で実務に活用</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full opacity-10 bg-gradient-to-l from-blue-500 to-transparent -skew-x-12" />
    </div>
  );
};

export default Hero;