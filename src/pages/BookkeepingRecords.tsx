import React from 'react';
import { Book, ScrollText, FileSpreadsheet } from 'lucide-react';
import Navigation from '../components/Navigation';

const BookkeepingRecords: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">帳簿記入の基礎</h1>
          <p className="text-lg text-gray-600">
            会計帳簿の種類と役割、記帳の流れを理解しましょう
          </p>
        </div>

        {/* 帳簿の概要セクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            1. 帳簿の種類と役割
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">仕訳帳</h3>
                <p className="text-gray-600">
                  取引を発生順に記録する最初の帳簿。すべての会計記録の出発点です。
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <ScrollText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">元帳</h3>
                <p className="text-gray-600">
                  仕訳を勘定科目ごとに集計し、残高を管理する帳簿です。
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <FileSpreadsheet className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">試算表</h3>
                <p className="text-gray-600">
                  すべての勘定科目の残高を一覧表示し、貸借のバランスを確認します。
                </p>
              </div>
            </div>

            {/* 帳簿の詳細表 */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-3 text-left">帳簿</th>
                    <th className="border border-blue-200 p-3 text-left">説明</th>
                    <th className="border border-blue-200 p-3 text-left">役割/目的</th>
                    <th className="border border-blue-200 p-3 text-left">関連事項</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-blue-200 p-3 font-semibold">仕訳帳</td>
                    <td className="border border-blue-200 p-3">発生順に仕訳を記録する帳簿</td>
                    <td className="border border-blue-200 p-3">取引の記録と整理</td>
                    <td className="border border-blue-200 p-3">普通仕訳帳、特殊仕訳帳</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-blue-200 p-3 font-semibold">元帳</td>
                    <td className="border border-blue-200 p-3">勘定科目ごとの残高を記録</td>
                    <td className="border border-blue-200 p-3">残高管理、試算表作成の基礎</td>
                    <td className="border border-blue-200 p-3">総勘定元帳、補助元帳</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-blue-200 p-3 font-semibold">試算表</td>
                    <td className="border border-blue-200 p-3">全勘定科目の残高一覧</td>
                    <td className="border border-blue-200 p-3">貸借バランスの確認</td>
                    <td className="border border-blue-200 p-3">BS、PL作成の基礎</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 記帳の流れセクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2. 記帳の基本的な流れ
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-6">
              <div className="border-2 border-blue-100 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 1: 取引の認識と仕訳</h4>
                <div className="pl-4 border-l-4 border-blue-200">
                  <p className="text-gray-700">
                    取引を認識し、仕訳帳に記録します。この時点で借方と貸方を正しく判断することが重要です。
                  </p>
                </div>
              </div>

              <div className="border-2 border-blue-100 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 2: 元帳への転記</h4>
                <div className="pl-4 border-l-4 border-blue-200">
                  <p className="text-gray-700">
                    仕訳帳の内容を勘定科目ごとに元帳に転記します。これにより、各勘定科目の増減と残高が把握できます。
                  </p>
                </div>
              </div>

              <div className="border-2 border-blue-100 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 3: 試算表の作成</h4>
                <div className="pl-4 border-l-4 border-blue-200">
                  <p className="text-gray-700">
                    一定期間ごとに、全ての勘定科目の残高を集計して試算表を作成します。この段階で貸借のバランスを確認します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 実務上のポイント */}
        <div className="bg-green-50 rounded-lg p-6 mb-6 border-l-4 border-green-400">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            ☕️ 現代の記帳実務
          </h4>
          <p className="text-gray-700">
            クラウド会計ソフトを使用する場合、これらの帳簿は自動的に作成されます。
            ただし、正しい仕訳を入力するために、帳簿の基本的な仕組みを理解しておくことは重要です。
            特に、「仕訳→元帳→試算表」という流れと、それぞれの役割を押さえておきましょう。
          </p>
        </div>
      </main>
    </div>
  );
};

export default BookkeepingRecords;