import React from 'react';
import { Book, DollarSign, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';

const BasicConcepts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">簿記の基本概念</h1>
          <p className="text-lg text-gray-600">
            ビジネスの基礎となる簿記の概念を、複式簿記を中心に解説
          </p>
        </div>

        {/* 簿記の定義セクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            1. 簿記とは何か、複式簿記の仕組み
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <p className="text-gray-700 mb-4">
              簿記は、会社や個人事業の取引を記録する仕組みです。
              日常の家計簿に似た概念ですが、
              ビジネスでは正確なルールと形式が必要です。
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700">
                簿記には大きく分けて「単式簿記」と「複式簿記」の2種類がありますが、ビジネスで一般的に用いられるのは「複式簿記」です。複式簿記の特徴は、「取引が発生した際に、借方（かりかた）と貸方（かしかた）という2つの側面で同時に記録すること」です。
              </p>
              <p className="mt-4">
                ここでいきなりすべてを暗記する必要はありません、仕訳の練習をしていくうちに確認して理解していきましょう。
              </p>
            </div>
            
            {/* 複式簿記の説明図 */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">複式簿記の基本</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-3 text-left w-1/4">要素</th>
                      <th className="border border-blue-200 p-3 text-left w-1/4">借方</th>
                      <th className="border border-blue-200 p-3 text-left w-1/4">貸方</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-blue-200 p-3 font-semibold">資産</td>
                      <td className="border border-blue-200 p-3 text-blue-700">資産の増加</td>
                      <td className="border border-blue-200 p-3 text-red-700">資産の減少</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-blue-200 p-3 font-semibold">負債</td>
                      <td className="border border-blue-200 p-3 text-blue-700">負債の減少</td>
                      <td className="border border-blue-200 p-3 text-red-700">負債の増加</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-blue-200 p-3 font-semibold">純資産（自己資本）</td>
                      <td className="border border-blue-200 p-3 text-blue-700">純資産の減少</td>
                      <td className="border border-blue-200 p-3 text-red-700">純資産の増加</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-blue-200 p-3 font-semibold">費用</td>
                      <td className="border border-blue-200 p-3 text-blue-700">費用の増加</td>
                      <td className="border border-blue-200 p-3 text-red-700">費用の減少</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-blue-200 p-3 font-semibold">収益</td>
                      <td className="border border-blue-200 p-3 text-blue-700">収益の減少</td>
                      <td className="border border-blue-200 p-3 text-red-700">収益の増加</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 仕訳例 */}
            <div className="space-y-6">
              <div className="border-2 border-blue-100 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">仕訳例1：美容院でお客さんから売上の代金として3000円を受け取った</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-blue-600">借方：</span>
                    <span>現金 3,000（資産の増加）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-blue-600">貸方：</span>
                    <span>売上 3,000（収益の増加）</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-blue-100 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">仕訳例2：銀行からお金を100万円借りた</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-blue-600">借方：</span>
                    <span>現金 1,000,000（資産の増加）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-blue-600">貸方：</span>
                    <span>借入金 1,000,000（負債の増加）</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 pl-4 border-l-4 border-gray-200">
                  ※ お金を借りると、手元の現金（資産）は増えますが、同時に返済義務（負債）も増えます
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <p className="text-gray-700">
                このように「増加」や「減少」が左右で対になって記録されることで、資産や負債、収益、費用といった要素の動きを明確に追跡することができます。また、複式簿記では「貸方の合計」と「借方の合計」が常に一致することが基本ルールとなっており、これが会計の整合性を保つ仕組みとなっています。
              </p>
            </div>
          </div>
        </section>

        {/* 簿記の目的と重要性セクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2. 簿記の目的と重要性
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                経営判断の材料
              </h3>
              <p className="text-gray-600">
                日々の取引を記録・集計し、業績の推移を把握。今後の経営判断に使う。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                外部関係者への報告
              </h3>
              <p className="text-gray-600">
                銀行からお金を借りたいときや補助金の申請に決算書の提出が必要。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                確定申告のため
              </h3>
              <p className="text-gray-600">
                確定申告で正確な利益を計算するために、正確な記帳が必要。
              </p>
            </div>
          </div>

          {/* 財務諸表の説明図 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              主な財務諸表
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  貸借対照表（B/S）
                </h4>
                <div className="border-2 border-blue-100 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-2">資産</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>現金預金</li>
                        <li>売掛金</li>
                        <li>商品</li>
                        <li>固定資産</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-2">負債・純資産</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>買掛金</li>
                        <li>借入金</li>
                        <li>資本金</li>
                        <li>利益剰余金</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  損益計算書（P/L）
                </h4>
                <div className="border-2 border-blue-100 rounded-lg p-4">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-2">収益</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>売上高</li>
                        <li>営業外収益</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-2">費用</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>売上原価</li>
                        <li>販売費及び一般管理費</li>
                        <li>営業外費用</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-green-50 rounded-lg p-6 mb-6 border-l-4 border-green-400">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            ☕️現代の会計と複式簿記
          </h4>
          <p className="text-gray-700">
            最近ではクラウド会計の進化により「複式簿記」を知らずとも会計帳簿を作成することができる時代にはなりましたが、実際の取引で「何が減ったのか」「何が増えたか」という取引の実態を会計仕訳として理解するためには「複式簿記」での仕訳を理解することがおススメです。一方で、「単式簿記」は取引の片面しか見ないため取引の全体が分かりにくいのです、そういう記帳の方法もあるのだなという程度の認識で良いでしょう。
          </p>
        </div>
      </main>
    </div>
  );
};

export default BasicConcepts;