import React from "react";

// Tailwind CSSは通常、プロジェクトのビルドプロセスで設定します。
// <script src="https://cdn.tailwindcss.com"></script> や <style> ブロックは
// このコンポーネント内ではなく、アプリケーション全体の設定で行います。

const TechnicalGuidePage: React.FC = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">OBORAオンライン</div>
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  ナビ1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  ナビ2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  ナビ3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1080px] mx-auto px-4 py-8 flex flex-col">
        <main className="w-full space-y-8">
          {/* テクニカルガイド セクション */}
          <section className="bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              テクニカルガイド　-クリアファイルデータ作成時チェックポイント-
            </h1>
            <p className="mb-2 text-gray-600">
              データ作成方法は下記の３種類からお選びいただけます
            </p>

            <div className="flex items-start space-x-3 flex-col">
              {/* データ作成方法 1 */}
              <div
                id="tg_box01"
                className="w-full border-b-2 border-black mb-4"
              >
                <h3 className="mb-2 font-semibold text-gray-600 flex items-center text-[19px]">
                  <span className="flex-shrink-0 w-3 h-3 bg-black text-white rounded-full flex items-center justify-center font-bold mr-2">
                    {/* 数字やアイコンが入る場合 */}
                  </span>
                  illustratorもしくはPhotoshopでのデータ作成
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  すべての商品に対応している作成方法です。
                  <br />
                  <a
                    href="https://www.bora-net.com/beginner/list.html"
                    className="text-blue-600 hover:opacity-70"
                  >
                    テンプレートダウンロードページからテンプレートをダウンロード
                  </a>
                  いただき、
                  <br />
                  本ページのアプリケーションごとのチェックポイントやテンプレートに同梱されているマニュアルをご参照いただきながらデータの作成をお願いします。
                </p>
              </div>

              {/* データ作成方法 2 */}
              <div id="tg_box02" className="!ml-0 w-full">
                <h3 className="mb-2 font-semibold text-gray-600 flex items-center text-[19px]">
                  <span className="flex-shrink-0 w-3 h-3 bg-black text-white rounded-full flex items-center justify-center font-bold mr-2">
                    {/* 数字やアイコンが入る場合 */}
                  </span>
                  Officeソフトでのデータ作成
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  一部の商品では、Officeソフトでも作成いただけます。
                  <br />
                  Officeソフトをご利用の場合は、「
                  <a
                    href="https://www.bora-net.com/beginner/list.html"
                    className="text-blue-600 hover:opacity-70"
                  >
                    Microsoft Officeのご利用について
                  </a>
                  」のページにて詳細をご確認ください。
                </p>
              </div>
              {/* 元HTMLにはデータ作成方法3がありませんでしたが、見出しのテキストに「3種類」とあるため、必要であればここに追加します */}
            </div>
          </section>

          {/* ご注文方法 セクション */}
          <section className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              ご注文方法
            </h2>
            <div className="space-y-4">
              {/* ステップ 1 */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">
                    商品をカートに入れる
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ご希望の商品をカートに追加してください。
                  </p>
                  <div className="mt-2 bg-gray-100 p-3 rounded flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gray-300 flex-shrink-0 flex items-center justify-center text-gray-500 text-xs">
                      商品画像
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        商品名サンプル
                      </p>
                      <button className="mt-1 px-4 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600">
                        カートに入れる
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ステップ 2 */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">
                    ご購入手続きへ
                  </h3>
                  <p className="text-gray-600 text-sm">
                    カートの内容を確認し、購入手続きへ進んでください。
                  </p>
                  <button className="mt-2 px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
                    購入手続きへ進む
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* お支払い方法 セクション */}
          <section className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              お支払い方法
            </h2>
            <p className="text-gray-600">
              ご利用いただけるお支払い方法はこちらです。
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <div className="w-12 h-8 bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
                決済ロゴ
              </div>
              <div className="w-12 h-8 bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
                決済ロゴ
              </div>
              <div className="w-12 h-8 bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
                決済ロゴ
              </div>
            </div>
          </section>

          {/* 配送について セクション */}
          <section className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              配送について
            </h2>
            <p className="text-gray-600">配送に関する情報が入ります。</p>
          </section>

          {/* その他のコンテンツ セクション */}
          <section className="bg-white p-6 rounded shadow h-48 flex items-center justify-center text-gray-500">
            その他のコンテンツセクション
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; 2023 サイト名. All rights reserved.
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-white">
              利用規約
            </a>
            <a href="#" className="hover:text-white">
              お問い合わせ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnicalGuidePage;
