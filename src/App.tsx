import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LessonCard from './components/LessonCard';
import Hero from './components/Hero';
import BasicCourse from './pages/BasicCourse';
import BasicConcepts from './pages/BasicConcepts';
import BookkeepingRecords from './pages/BookkeepingRecords';

const lessons = [
  {
    title: '会計用語や帳簿の基礎知識',
    description: '勘定科目の意味や帳簿の基礎知識。基本に戻って確認しよう。',
    lessonCount: '全1レッスン',
    level: '基礎',
    icon: 'beginner' as const,
    path: '/basic-course'
  },
  {
    title: 'フリーランスの会計実務',
    description: '確定申告に必要な帳簿作成から、経費計上のポイントまで解説。',
    lessonCount: '全10レッスン',
    level: '実践',
    icon: 'beginner' as const,
  },
  {
    title: '実践問題で学ぶ会計処理',
    description: '実務でよくある事例をベースに、具体的な会計処理の方法を演習形式で学習。',
    lessonCount: '全15レッスン',
    level: '実践',
    icon: 'intermediate' as const,
  },
  {
    title: '1年間の流れでつかむ、リアルな会計スキル',
    description: '1年のタイムラインに沿って学ぶ会計知識とポイント',
    lessonCount: '全8レッスン',
    level: '実践',
    icon: 'intermediate' as const,
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <Hero />
              <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">人気のコース</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lessons.map((lesson, index) => (
                    <LessonCard key={index} {...lesson} />
                  ))}
                </div>
              </main>
            </>
          } />
          <Route path="/basic-course" element={<BasicCourse />} />
          <Route path="/basic-concepts" element={<BasicConcepts />} />
          <Route path="/bookkeeping-records" element={<BookkeepingRecords />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;